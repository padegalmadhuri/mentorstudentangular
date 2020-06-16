import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServerServService {

  students;
    mentor;
    constructor(private http: HttpClient) {
      this.listOfMentors();
      this.listOfStudents();
    }

    createMentor(data): Observable<any> {
      // console.log(data);
      return this.http.post('https://mentorstudent.herokuapp.com/mentor', data);
    }
    createStudent(data): Observable<any> {
      return this.http.post('https://mentorstudent.herokuapp.com/students', data);
    }
    assignStudent(data): Observable<any> {
      return this.http.post('https://mentorstudent.herokuapp.com/assignstudent', data);
    }

    listStudents(data): Observable<any> {
      return this.http.post('https://mentorstudent.herokuapp.com/liststudents', data);
    }
    listOfStudents() {
      this.http.get('https://mentorstudent.herokuapp.com/listofstudents').subscribe(
        (data) => {
          this.students = data;
          return of(true);
          //  console.log(this.students);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    listOfMentors() {
      this.http.get('https://mentorstudent.herokuapp.com/listofmentors').subscribe(
        (data) => {
          this.mentor = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }}
