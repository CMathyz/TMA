import {Component, OnInit} from '@angular/core';
import {Produit} from "../../models/produit/produit.model";
import {ApiService} from "../../services/api/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {PopinProductComponent} from "../popin-product/popin-product.component";


@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css']
})
export class StockManagementComponent implements OnInit{

  products : Array<Produit> = [];
  isLoading: boolean = true;
  addElement: string = 'ajouter un produit';
  minusElement: string = 'retirer un produit';

  constructor(private apiService : ApiService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit() {
      this.apiService.getallProduct().subscribe(data => {
        this.products = data;
        this.isLoading = false;
      },
        error => {
              this.openSnackBar('erreur HTTP.','ok');
        })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 8000, verticalPosition: 'bottom', panelClass: ['snackbar-error'] });
  }

  removeOneProduct(product: Produit) {
    product.quantity = product.quantity - 1;
    if (product.quantity == 0) {
      this.products = this.products.filter((p) => p.id !== product.id);
      this.apiService.removeProduct(product);
    } else {
      this.apiService.modifyProduct(product);
    }
  }



  openPopin() {
    const dialogRef = this.dialog.open(PopinProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.products.push(result);
        this.apiService.getallProduct().subscribe(data => {
          this.products = data;
        })
      }
    });
  }

  addProduct(product: Produit) {
    const existingProduct = this.products.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      this.apiService.modifyProduct(existingProduct);
    } else {
      product.quantity = 1;
      this.products.push(product);
      this.apiService.createProduct(product);
    }
  }
}
