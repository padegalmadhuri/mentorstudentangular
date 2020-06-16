import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServerServService } from '../server-serv.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student;
  constructor(private fb: FormBuilder, private ser: ServerServService) {
    this.student = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      batchNo: this.fb.control('',[Validators.required]),
      course: this.fb.control(''),
      phoneNo: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  addStudent() {
    // console.log(this.mentor.value);
    this.ser.createStudent(this.student.value).subscribe(
      (data) => {
        alert(data.msg);
        this.ser.listOfMentors();
        this.ser.listOfStudents();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
