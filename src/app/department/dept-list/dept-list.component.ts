import { Component , OnInit , OnChanges } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: '`app-dept-list`',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  allDeptsList:Department[] = [];
  constructor(public dService:DepartmentService)
  {

  }

  ngOnInit()
  {
    this.allDeptsList = this.dService.getAllDepts() ;
  }

  ngOnChanges()
  {
    this.allDeptsList = this.dService.getAllDepts() ;
  }

  sendToDelete(id:number)
  {
    this.dService.deleteDepartment(id) ;
    // this.allDeptsList = this.dService.getAllDepts() ;
    this.ngOnChanges() ;
  }

}
