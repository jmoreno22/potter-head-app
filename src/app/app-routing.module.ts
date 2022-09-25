import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/views/home.component';
import { StaffComponent } from './modules/staff/views/staff.component';
import { StudentsComponent } from './modules/students/views/students.component';
import { HouseComponent } from './modules/house/views/house.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'staff',
    component: StaffComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'house',
    component: HouseComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
