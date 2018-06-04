import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient-model";

export class RecipeService{

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
}