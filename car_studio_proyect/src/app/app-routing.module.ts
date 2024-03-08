import { NgModule } from '@angular/core';
import { CommonModule ,Routes} from '@angular/common';


const routes: Routes =
[

  {
    path: 'suntek', 
    loadcompoment: () => import('./component/suntek/suntek.component').then(m => m.SuntekComponent)
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
