import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { LocationsComponent } from './components/locations/locations.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/*
 *   Definir las reglas de navegación mediante objetos JS.
 *   Se evalúan en orden de escritura
 */
const routes: Routes = [
  {
    // Indicar ruta de navegación (path) sin /
    path: 'locations',
    // Componente a cargar (component)
    component: LocationsComponent,
  },
  {
    // Indicar ruta de navegación (path) sin /
    path: 'departamentos',
    // Componente a cargar (component)
    component: DepartmentListComponent,
  },
  {
    // Indicar ruta de navegación (path) sin /
    path: 'empleados',
    // Componente a cargar (component)
    component: EmployeeListComponent,
  },
  {
    // Indicar ruta de navegación (path) sin /
    // Utilizacion de parametros con :xxx
    path: 'departamentos/:id',
    // Componente a cargar (component)
    component: DepartmentDetailComponent,
    // Indicar rutas de navagación para un componente hijo (children)
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent },
    ],
  },

  {
    // Indicar ruta de navegación (path) sin /
    // Utilizacion de parametros con :xxx
    path: 'locations/:id/:name/:type/:dimension/:residents',
    // Componente a cargar (component)
    component: LocationDetailComponent,
  },

  {
    // Peticion inicial /
    path: '',
    // Redireccionar a otro ruta (redirectTo) con /
    redirectTo: '/locations',
    // Hacer que la URL de navegacion y el atributo path sean IDENTICOS (pathMatch)
    pathMatch: 'full',
  },
  {
    // Cualquier otra peticion no contemplada en las reglas de navegación
    path: '**',
    // Mostrar página de error
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
