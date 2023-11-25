import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppintEditComponent {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() onIngredientAdded = new EventEmitter<Ingredient>();


  onAddItem() {
    this.onIngredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value));
  }

}
