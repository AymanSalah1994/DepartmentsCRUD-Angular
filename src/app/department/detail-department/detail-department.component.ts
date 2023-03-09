import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-detail-department',
  templateUrl: './detail-department.component.html',
  styleUrls: ['./detail-department.component.css']
})
export class DetailDepartmentComponent {

  constructor(public dService:DepartmentService)
  {
  }

  public deptToView:Department =this.dService.getDepartmentToView() ;

  

}
