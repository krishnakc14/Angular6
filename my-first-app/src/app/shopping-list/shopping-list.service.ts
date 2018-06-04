import { Ingredient } from "../shared/ingredient-model";
import { Subject } from "rxjs";


export class ShoppingListService{

    newIngredient = new Subject<Ingredient[]>();

    ingredients:Ingredient[] = 
        [ new Ingredient('Apples', 10), 
        new Ingredient('Oranges', 20)];

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.newIngredient.next(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
    }

   addIngredients(ingredientArray:Ingredient[]){
       this.ingredients.push(...ingredientArray);
       this.newIngredient.next(this.ingredients.slice());
   }

}