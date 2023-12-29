import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { LoginComponent } from "./component/login/login.component";
import 'flowbite';
import { ProductsComponent } from "./component/products/products.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent, LoginComponent, ProductsComponent]
})
export class AppComponent {
  title = 'cse-comerce';
}
