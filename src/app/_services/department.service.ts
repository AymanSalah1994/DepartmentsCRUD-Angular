import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments:Department[] = [
    new Department(1,"OS" , 35) ,
    new Department(2,"PD" , 100),
    new Department(3,"AI" , 15)
  ] ;

  getAllDepts(){
    return this.departments;
  }

  constructor() { }
}
