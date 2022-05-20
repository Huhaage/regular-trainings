import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Training[] | undefined;
  constructor(private cartService : CartService) { }

  onDelToCart(training:Training){
    this.cartService.delTraining(training);
  }

  ngOnInit(): void {
    this.cart=this.cartService.getCart();
    let cart = localStorage.getItem('training');    

    if(cart) {
      this.cart = JSON.parse(cart);
    }
  }

}
