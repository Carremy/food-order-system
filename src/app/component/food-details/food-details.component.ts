import { Component, OnInit } from '@angular/core';
import { MEALS } from 'src/app/MEALS';
import { Meal } from 'src/app/Meal';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  meals : Meal[] = MEALS;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(meal: Meal){
    console.log(meal);

  }

}
