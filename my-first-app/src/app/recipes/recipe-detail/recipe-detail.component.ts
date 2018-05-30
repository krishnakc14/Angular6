import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient-model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeToDisplay:Recipe;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  }

  toShoppingList(){

    this.shoppingService.addIngredients(this.recipeToDisplay.ingredients);
    
  }
}
