import { Injectable, OnInit } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})

export class CartService implements OnInit {

  trainings: Training[] = [];

  getCart(){
    return this.trainings;
  }

  addTraining(training:Training){
    this.trainings.push(training);
    localStorage.setItem('cart', JSON.stringify(this.trainings));
  }

  delTraining(training:Training){

  }

  
  ngOnInit(): void {
  }

  constructor() {
    let cart:Training[];
   }
}
