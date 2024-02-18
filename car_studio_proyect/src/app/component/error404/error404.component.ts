import { Component, NgModule } from '@angular/core';
import { RouterModule,Routes }     from '@angular/router';  
import { ActivatedRoute, Params }   from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css'
})
export class Error404Component {

}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // otras rutas aquí
];
@NgModule({
  imports: [
    // otros módulos aquí
    RouterModule.forRoot(routes)
  ]
})
export class AppModule { }