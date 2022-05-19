import { Injectable, OnInit } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})

export class CartService implements OnInit {

  ngOnInit(): void {
    if(localStorage.getItem('training')!=null) {
      localStorage.getItem('training')
    }
  }

  trainings: Training[] = [];

  addTraining(training:Training){
    this.trainings.push(training);
    localStorage.setItem('training', JSON.stringify(this.trainings));
  }

  constructor() { }
}
