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
import { SuntekComponent } from "./component/suntek/suntek.component";
import { HexisComponent } from "./component/hexis/hexis.component";
import { TeckwrapComponent } from "./component/teckwrap/teckwrap.component";
import { SuntekecoComponent } from "./component/suntekeco/suntekeco.component";
import { HexisecoComponent } from "./component/hexiseco/hexiseco.component";
import { ErrorComponent } from "./component/error/error.component";
import { ListComponent } from "./component/list/list.component";
import { List2Component } from "./component/list2/list2.component";
import { ContanctComponent } from "./component/contanct/contanct.component";
import { List3Component } from "./component/list3/list3.component";
import { List4Component } from "./component/list4/list4.component";
import { List5Component } from "./component/list5/list5.component";
import { List6Component } from "./component/list6/list6.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent, LoginComponent, FooterComponent, Error404Component, MarcasComponent, ServiciosComponent, SuntekComponent, HexisComponent, TeckwrapComponent, SuntekecoComponent, HexisecoComponent, ErrorComponent, ListComponent, List2Component, ContanctComponent, List3Component, List4Component, List5Component, List6Component]
})
export class AppComponent {
  title = 'cse-comerce';
}
