import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards = [
    {
      image: 'assets/images/watch.jpg',
      title: 'Wrist Watch',
      category: 'ACCESSORIES, MEN',
      price: '$299.00',
    },
    {
      image: 'assets/images/belt.jpg',
      title: 'Belt',
      category: 'ACCESSORIES, BABY',
      price: '$25.00',
    },
    {
      image: 'assets/images/Warm_jacket.jpg',
      title: 'Man Shaggy Coat',
      category: 'MEN',
      price: '$229.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/shirt.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/underwear.jpg',
      title: 'Lingerie',
      category: 'UNDERWEAR, WOMEN',
      price: '$39.00',
    },
    {
      image: 'assets/images/handbag.jpg',
      title: 'Black Handbag',
      category: 'WOMEN',
      price: '$79.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
    {
      image: 'assets/images/sports_shoes.jpg',
      title: 'Blue T-shirt',
      category: 'BOYS, MEN',
      price: '$119.00',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
