import { Component } from '@angular/core';
import 'flowbite';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component"; 

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class LoginComponent {

}
