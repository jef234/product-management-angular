import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: String = 'Product List View';
  showImage: Boolean = false;
  listFilter: String = '';
  products: IProduct[];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    console.log('Inside Product list Oninit method');
    // this.products = this._productService.getProducts();
    this._productService.getProducts().subscribe((data) => this.products = data);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    console.log(`The Event data received ${message}`);
    this.pageTitle = message;
  }
}
