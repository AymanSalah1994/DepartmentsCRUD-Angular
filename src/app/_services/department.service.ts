import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public updateFlagStatus =  false  ;
  public detailFlagStatus  = false  ;

  departmentToUpdate = new Department(0,"",0) ;
  departmentToView = new Department(0,"",0) ;
  private departments:Department[] = [
    new Department(1,"OS" , 35) ,
    new Department(2,"PD" , 100),
    new Department(3,"AI" , 15)
  ] ;

  getAllDepts(){
    return this.departments;
  }

  addNewDepartment(dept:Department)
  {
    this.departments.push(dept) ;
  }

  deleteDepartment(id:number)
  {
  let toDeleteDept = new Department(0,"",0) ;
    for (let index = 0; index < this.departments.length; index++) {
      if (id == this.departments[index].deptId)
      {
        toDeleteDept = this.departments[index] ;
      }
    } // End of For
    this.departments = this.departments.filter(function name(eachItem) {
      return eachItem != toDeleteDept ;
    }) ;
  }

  toggleUpdateFlag(id:number)
  {
    this.justToggle() ;
    this.prepareForUpdate(id) ;
  }

  toggleViewFlag(id:number)
  {
    this.detailFlagStatus = !this.detailFlagStatus ;
    this.prepareForView(id) ;
  }

  justToggle()
  {
    this.updateFlagStatus = !this.updateFlagStatus;
  }

  getFlagStatus()
  {
    return this.updateFlagStatus ;
  }

  prepareForUpdate(id:number)
  {
    for (let index = 0; index < this.departments.length; index++) {
      if (id == this.departments[index].deptId)
      {
        this.departmentToUpdate = this.departments[index] ;
      }
    } // End of For
  }

  prepareForView(id:number)
  {
    for (let index = 0; index < this.departments.length; index++) {
      if (id == this.departments[index].deptId)
      {
        this.departmentToView = this.departments[index] ;
      }
    } // End of For
  }

  getDepartmentToUpdate()
  {
    return this.departmentToUpdate  ;
  }

  getDepartmentToView()
  {
    return this.departmentToView  ;
  }

  constructor() { }
}
