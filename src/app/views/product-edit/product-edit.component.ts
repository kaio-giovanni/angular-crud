import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {
    id: undefined,
    name: '',
    price: 0
  };

  constructor(private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.findById(Number(productId)).subscribe(product => {
      this.product = product;
    });
  }

  editProduct(): void {
    this.productService.update(this.product).subscribe(product => {
      this.productService.showMessage(`Product ${product.name} has been updated!`);
      this.navigateToProducts();
    })
  }

  navigateToProducts(): void {
    this.router.navigate(['/product']);
  }

}
