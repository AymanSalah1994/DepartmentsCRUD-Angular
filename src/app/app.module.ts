import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DeptListComponent } from './department/dept-list/dept-list.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './department/update-department/update-department.component';
import { DetailDepartmentComponent } from './department/detail-department/detail-department.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptListComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    DetailDepartmentComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
