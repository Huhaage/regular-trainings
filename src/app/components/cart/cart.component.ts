import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Training[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
