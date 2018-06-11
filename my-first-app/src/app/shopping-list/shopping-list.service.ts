import { Ingredient } from "../shared/ingredient-model";
import { Subject } from "rxjs";


export class ShoppingListService{

    newIngredient = new Subject<Ingredient[]>();

    editIngredient = new Subject<number>();

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

    getIngredient(index : number){
        return this.ingredients[index];
    }

   addIngredients(ingredientArray:Ingredient[]){
       this.ingredients.push(...ingredientArray);
       this.newIngredient.next(this.ingredients.slice());
   }

   updateIngredient(index: number, ingred:Ingredient){
        this.ingredients[index] = ingred;
        this.newIngredient.next(this.ingredients.slice());
   }

   deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.newIngredient.next(this.ingredients.slice());
   }

}