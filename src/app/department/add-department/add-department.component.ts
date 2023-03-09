import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  newAddDepartment:Department = new Department(0,"",0) ;

  constructor(public dService:DepartmentService)
  {

  }
  addnewDepartment()
  {
    this.dService.addNewDepartment(new Department(this.newAddDepartment.deptId,this.newAddDepartment.deptName,this.newAddDepartment.deptCap)) ;
  }
}
