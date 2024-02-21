import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import 'flowbite';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './header.component.html'
  
})
export class HeaderComponent {

}
