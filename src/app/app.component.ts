import { Component } from '@angular/core';
import { ProductosService } from './productos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect-angular-django';

  products: any[] = [];

  constructor(private productService: ProductosService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    })
  }
}
