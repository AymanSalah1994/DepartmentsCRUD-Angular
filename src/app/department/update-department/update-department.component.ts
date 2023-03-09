import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {

  constructor(public dService:DepartmentService)
  {
    
  }

  updateSingleDepartment = this.dService.getDepartmentToUpdate() ;
  ngOnChanges()
  {

  }

  save(id:number)
  {
    this.dService.toggleUpdateFlag(id) ;
  }
}
