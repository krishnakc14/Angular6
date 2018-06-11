import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient-model";
import { Subject } from "rxjs";

export class RecipeService{

  recipeChanged = new Subject<Recipe[]>();

   private recipes:Recipe[] = [
        new Recipe('ChickenTandoori', 
        'Tandoori', 
        'https://upload.wikimedia.org/wikipedia/commons/d/dc/A_piece_of_a_tandoori_chicken.JPG',
        [new Ingredient("Chicken", 2), new Ingredient("Curd", 4) ]),
        new Recipe('Rasagulla', 
        'Milk', 
        'https://www.dosatopizza.com/wp-content/uploads/2016/02/DSC08480.jpg',
        [new Ingredient("Milk", 4), new Ingredient("Rasagul", 7) ])
    
      ];

      getRecipe(){
          return this.recipes.slice();
      }

      getRecipeById(index:number) {
        return this.recipes[index];
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      editRecipe(index:number, recipe:Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      };
}