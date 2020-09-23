import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {


  path ="https://localhost:44348/api/products";
  products :any;
  productss :Product[];

constructor(private httpClient: HttpClient) { }


getAllProducts(){
  return this.httpClient.get(this.path + "/getall");
}



}
