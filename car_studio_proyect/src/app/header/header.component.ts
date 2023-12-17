import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {
  isBurgerOpen = false;
  isMenuOpen = false;
  session =0;
  theme:any = 'ligth';
  bar=0;

  toggleMenu()
  {
      this.isBurgerOpen = !this.isBurgerOpen;
      this.isMenuOpen =!this.isMenuOpen;  

    
  }
  changeTheme ()
  {


  }
  logout ()
  {
    this.session = 0;
  }

}
