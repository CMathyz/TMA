import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Produit} from "../../models/produit/produit.model";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-popin-product',
  templateUrl: './popin-product.component.html',
  styleUrls: ['./popin-product.component.css']
})
export class PopinProductComponent{


  public produit : Produit;
  private mode: string = '';

  constructor(public dialogRef: MatDialogRef<PopinProductComponent>,
              private apiService: ApiService,
              @Inject(MAT_DIALOG_DATA) private data : any) {

    if (data?.produit) {
      this.produit = data.produit;
    }
    else {
      let productSample = {
        id: 0,
        name: '',
        price: 0.0,
        quantity: 0
      }
      this.produit = new Produit(productSample);
    }
    if(data?.mode){
      switch (data.mode){
        case Mode.CREATE:
          this.mode = 'CREATE'
          break;
        case Mode.EDIT:
          this.mode = 'EDIT'
          break;
      }
    }
  }

  submit() {
    this.apiService.createProduct(this.produit);
    this.dialogRef.close(this.produit);
  }

  statePopin() {

  }

  onNoClick() {
    this.dialogRef.close();
  }

  preventFloat(event: KeyboardEvent) {
    if (event.key === '.' || event.key === ',') {
      event.preventDefault();
    }
  }
}

export enum Mode{
  'CREATE',
  'EDIT'
}
