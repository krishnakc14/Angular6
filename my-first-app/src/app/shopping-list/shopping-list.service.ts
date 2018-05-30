import { Ingredient } from "../shared/ingredient-model";
import { EventEmitter } from "@angular/core";


export class ShoppingListService{

    newIngredient = new EventEmitter<Ingredient[]>();

    ingredients:Ingredient[] = 
        [ new Ingredient('Apples', 10), 
        new Ingredient('Oranges', 20)];

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.newIngredient.emit(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
    }

   addIngredients(ingredientArray:Ingredient[]){
       this.ingredients.push(...ingredientArray);
       this.newIngredient.emit(this.ingredients.slice());
   }

}