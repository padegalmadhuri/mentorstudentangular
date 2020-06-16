import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ServerServService } from '../server-serv.service';
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  mentor;
  constructor(private fb:FormBuilder,private ser:ServerServService) {
    this.mentor=this.fb.group({
      name:this.fb.control('',[Validators.required]),
      age:this.fb.control(''),
      role:this.fb.control(''),
      phoneNo:this.fb.control('',[Validators.required])
    })
   }

  ngOnInit(): void {
  }
  addMentor(){
    // console.log(this.mentor.value);
    this.ser.createMentor(this.mentor.value).subscribe((data)=>{
      alert(data.msg)
      this.ser.listOfMentors();
        this.ser.listOfStudents();
    },(err)=>{
      console.log(err);
    })
  }

}
