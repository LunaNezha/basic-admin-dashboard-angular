import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsSmall() {
    return this.http.get<any>('assets/jsons/products-small.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }

  getProducts() {
    return this.http.get<any>('assets/jsons/products.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }

  getProductsMixed() {
    return this.http.get<any>('assets/jsons/products-mixed.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }

  getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/jsons/products-orders-small.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }
}
