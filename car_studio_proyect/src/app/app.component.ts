import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { LoginComponent } from "./component/login/login.component";
import 'flowbite';
import { FooterComponent } from "./component/footer/footer.component";
import { Error404Component } from "./component/error404/error404.component";
import { MarcasComponent } from "./component/marcas/marcas.component";
import { ServiciosComponent } from "./component/servicios/servicios.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent, LoginComponent, FooterComponent, Error404Component, MarcasComponent, ServiciosComponent]
})
export class AppComponent {
  title = 'cse-comerce';
}
