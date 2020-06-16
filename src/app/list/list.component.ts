import { Component, OnInit } from '@angular/core';
import { ServerServService } from '../server-serv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  mId;
  display=false;
  stud;
  constructor(public ser: ServerServService, private router: Router) {

  }

  ngOnInit(): void {}
  change(id,bool){
    this.mId=id;
    this.display=bool;
    // console.log(id);
    this.ser.listStudents({mentorId:id}).subscribe((data)=>{
      this.stud=data;
    },(err)=>{
      console.log(err);
    })
  }

}
