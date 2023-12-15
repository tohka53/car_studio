import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

