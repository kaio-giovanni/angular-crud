import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct() {
    this.productService.create(this.product).subscribe(() => {
      this.productCreated(this.product.name);
      this.navigateToProducts();
    });
  }

  productCreated(productName: string): void {
    this.productService.showMessage(`Product "${productName}" has successfully inserted`);
  }

  navigateToProducts(): void {
    this.router.navigate(['/product']);
  }

}
