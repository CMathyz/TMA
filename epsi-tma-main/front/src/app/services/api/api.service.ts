import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../../models/produit/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = 'http://localhost:8000/api/product/';

  constructor(private http : HttpClient) { }

  removeProduct(product: Produit) {
    this.http.delete(this.url + product.id).subscribe();
    
  }

  modifyProduct(product: Produit) {
    this.http.put<Produit>(this.url + product.id,product).subscribe();
  }

  getallProduct(){
    return this.http.get<Produit[]>(this.url);
  }

  createProduct(produit : Produit){
    this.http.post<Produit>(this.url,produit.serialize()).subscribe();
  }
}
