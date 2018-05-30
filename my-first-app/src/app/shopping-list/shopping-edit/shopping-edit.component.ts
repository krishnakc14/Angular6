import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") name:ElementRef;
  @ViewChild("amountInput") amount:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    this.shoppingService.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }


}
