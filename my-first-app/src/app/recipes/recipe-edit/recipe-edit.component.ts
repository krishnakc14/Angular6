import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient-model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  isEditMode = false;
  id:number;

  myRecipeForm:FormGroup;
  recipeToEdit:Recipe;
  // recipeToAdd:Recipe;
  ingredientToEdit:Ingredient[];

  constructor(private route:ActivatedRoute, private recipeService:RecipeService, private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.isEditMode = params['id'] != null;
        this.formInit();
      }
    )
  }

  private formInit(){

    let recipeName = '';
    let imagePath = '';
    let description = '';
    // let name = '';
    // let amount:number;

    let recipeIngredients = new FormArray([]);

    if(!this.isEditMode){
      recipeIngredients.push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount':new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        })
       );
    }
    

    if(this.isEditMode){

      this.recipeToEdit = this.recipeService.getRecipeById(this.id);
      this.ingredientToEdit = this.recipeToEdit.ingredients;

       recipeName = this.recipeToEdit.name;
       imagePath = this.recipeToEdit.imagePath;
       description = this.recipeToEdit.description;

       //Since we have defined it as a FormArray , we caanot add ingred directly.
       //We have to create a Form Group inside to make it as an array
       if(this.recipeToEdit['ingredients']){
         for(let ingred of this.recipeToEdit.ingredients){
           recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingred.name, Validators.required),
              'amount':new FormControl(ingred.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
           );
         }
       }


      // this.myRecipeForm.patchValue({
      //   'recipeData':{
      //     'name':this.recipeToEdit.name,
      //     'imagePath':this.recipeToEdit.imagePath,
      //     'description':this.recipeToEdit.description
      //   },
      //   'ingredientData':{
      //     'name':this.ingredientToEdit[0].name,
      //     'amount':this.ingredientToEdit[0].amount
      //   }
      // });
    }


    this.myRecipeForm = new FormGroup({
      // 'recipeData': new FormGroup({
        'name':new FormControl(recipeName, Validators.required),
        'imagePath':new FormControl(imagePath, Validators.required),
        'description':new FormControl(description, Validators.required),
      // }),
      'ingredients':recipeIngredients
     
    });
  }

  onSubmit(){
    console.log(this.myRecipeForm);

    
    if(this.isEditMode){
      this.recipeService.editRecipe(this.id, this.myRecipeForm.value);
    } else {
      this.recipeService.addRecipe(this.myRecipeForm.value);
    }

    this.router.navigate(['recipes']);

  }

  onAddIngredient(){
   
    (<FormArray>this.myRecipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount':new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
     );
  }

  onClear(){
    this.myRecipeForm.reset();
  }

  onDiscard(){
    this.router.navigate(['../'], {relativeTo:this.route});
  }

  onClearIngredient(index:number){
    (<FormArray>this.myRecipeForm.get('ingredients')).removeAt(index);
  }

}
