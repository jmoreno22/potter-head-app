import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { StaffModule } from './modules/staff/staff.module';
import { COMPONENTS } from './components/index';
import { StudentsModule } from './modules/students/students.module';
import { HouseModule } from './modules/house/house.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    HomeModule,
    StaffModule,
    StudentsModule,
    HouseModule,
    ...COMPONENTS,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
