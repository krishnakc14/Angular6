import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient-model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeToDisplay:Recipe;
  id: number;

  constructor(private shoppingService:ShoppingListService, private route:ActivatedRoute, 
              private recipeService:RecipeService, private router:Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.recipeToDisplay = this.recipeService.getRecipeById(+this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipeToDisplay = this.recipeService.getRecipeById(+params['id']);
      }
    )
  }

  toShoppingList(){

    this.shoppingService.addIngredients(this.recipeToDisplay.ingredients);
    
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }
}
