import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients:Ingredient[];

  subscription:Subscription

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();

    this.subscription = this.shoppingService.newIngredient.subscribe(
      (ingredient:Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
    
  }

  onIngredientSelection(index:number){
    this.shoppingService.editIngredient.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
