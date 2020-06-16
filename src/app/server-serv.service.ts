import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
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
      return this.http.post(`${environment.urlprod}/mentor`, data);
    }
    createStudent(data): Observable<any> {
      return this.http.post(`${environment.urlprod}/students`, data);
    }
    assignStudent(data): Observable<any> {
      return this.http.post(`${environment.urlprod}/assignstudent`, data);
    }

    listStudents(data): Observable<any> {
      return this.http.post(`${environment.urlprod}/liststudents`, data);
    }
    listOfStudents() {
      this.http.get(`${environment.urlprod}/listofstudents`).subscribe(
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
      this.http.get(`${environment.urlprod}/listofmentors`).subscribe(
        (data) => {
          this.mentor = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
