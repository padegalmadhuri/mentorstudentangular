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
    constructor(public ser: ServerServService, private router: Router) {}

    ngOnInit(): void {}
    change(id,bool){
      this.mId=id;
      this.display=bool;
    }

}
