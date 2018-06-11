import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

   @Output() ingredientAdded = new EventEmitter<Ingredient>();

   @ViewChild('myForm') myForm:NgForm;

   editMode = false;
   myIndex:number;

   mySubscription:Subscription;

   editedIngredient:Ingredient;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.mySubscription = this.shoppingService.editIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.myIndex = index;
        console.log("My Ingredient Index is "+index);
        this.editedIngredient = this.shoppingService.getIngredient(index);
        this.myForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        })

      }
    )
  }

  onAdd(){
    const newIngred = new Ingredient(this.myForm.value.name, this.myForm.value.amount)
    if(this.editMode){
      this.shoppingService.updateIngredient(this.myIndex, newIngred);
    }else {
      this.shoppingService.addIngredient(newIngred);
    }
    this.editMode = false;
    this.myForm.reset();
  }

  onClear(){
    this.editMode = false;
    this.myForm.reset();
  }

  onDelete(){
    this.onClear();
    this.shoppingService.deleteIngredient(this.myIndex);
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe;
  }


}
