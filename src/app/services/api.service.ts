import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {

  }


  prodacts(){
    return this.http.get('https://fakestoreapi.com/products')
  }


  getProductsId(id : number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }



}
