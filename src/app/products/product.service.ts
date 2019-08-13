import { OnInit, Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService implements OnInit {
    // getProducts(): IProduct[] {
    //     return [{
    //         "productId": 1,
    //         "productName": "Chair",
    //         "productCode": "ABC-1001",
    //         "releaseDate": "March 1 2019",
    //         "description": "",
    //         "price": 30.89,
    //         "rating": 5,
    //         "imageUrl": "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
    //     }, {
    //         "productId": 2,
    //         "productName": "Fan",
    //         "productCode": "ABC-1001",
    //         "releaseDate": "March 1 2019",
    //         "description": "",
    //         "price": 10.80,
    //         "rating": 2.5,
    //         "imageUrl": "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
    //     }, {
    //         "productId": 3,
    //         "productName": "Table",
    //         "productCode": "ABC-1001",
    //         "releaseDate": "March 1 2019",
    //         "description": "",
    //         "price": 20.89,
    //         "rating": 1.2,
    //         "imageUrl": "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
    //     }];
    // }

    private productURL = 'https://ngapi4.herokuapp.com/api/getProducts';

    constructor(private _http: HttpClient) { }

    ngOnInit(): void { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this.productURL);
    }
}
