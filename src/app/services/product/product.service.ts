import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
