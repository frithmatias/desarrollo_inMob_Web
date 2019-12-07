import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Módulos personalizados
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

// Componentes

// Saco PagesComponent de PAGES.MODULE.TS y lo agrego en APP.MODULE.TS
// Saco PagesModule de APP.MODULE.TS y lo agrego junto a PagesComponent
// en APP-ROUTING.MODULE para cargarlo con LazyLoad.

//  const appRoutes: Routes = [
//     { path: 'login', component: LoginComponent },
//     { path: 'register', component: RegisterComponent },
//     { path: '**', component: NopagefoundComponent },
//     {
//       path: '',
// ->    canActivate: [LoginGuard],
// ->    component: PagesComponent,
// ->    loadChildren: './pages/pages.module#PagesModule'
//     }
//   ];
// import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { PropiedadComponent } from './propiedades/propiedad.component';
import { InmobiliariasComponent } from './inmobiliarias/inmobiliarias.component';
import { BuscarComponent } from './buscar/buscar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgDropFilesDirective } from '../directives/ng-drop-files.directive';
import { UploaderComponent } from '../components/uploader/uploader.component';

@NgModule({
  declarations: [
    // PagesComponent,
    DashboardComponent,
    ProgressComponent,
    IncrementadorComponent,
    AccountSettingsComponent,
    ProfileComponent,
    UsuariosComponent,
    PropiedadesComponent,
    PropiedadComponent,
    InmobiliariasComponent,
    BuscarComponent,
    InicioComponent,
    NgDropFilesDirective,
    UploaderComponent
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    PipesModule]
})
export class PagesModule { }
