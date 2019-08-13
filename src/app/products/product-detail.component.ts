import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = 'Product Detail Page';
  productName: string;
  image: string;
  description: string;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];

    this._route.queryParams.subscribe((params) => {
      this.productName = params['name'];
      this.image = params['img'];
      this.description = params['desc'];
    });
    this.title += '>>>' + id;
  }

  onBackPress(): void {
    this._router.navigate(['./products']);
  }

}
