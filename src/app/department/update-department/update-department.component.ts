import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {
  smallUpdateflag=this.dService.getFlagStatus() ;
  constructor(public dService:DepartmentService)
  {
  }
  
  public originalDept:Department =this.dService.getDepartmentToUpdate() ;

  updateSingleDepartment =  new Department(this.originalDept.deptId,this.originalDept.deptName,this.originalDept.deptCap);

  ngOnChanges()
  {
  }

  save()
  {
    this.originalDept.deptName = this.updateSingleDepartment.deptName ;
    this.originalDept.deptCap = this.updateSingleDepartment.deptCap ;
    // this.dService.toggleUpdateFlag(id) ;
    this.dService.justToggle() ;
  }

  clear()
  {
    this.dService.justToggle() ;
  }
}
