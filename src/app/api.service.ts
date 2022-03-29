import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DocterModel } from './docters/docters.model';
import { pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  docterObj: DocterModel = new DocterModel();
  constructor(private http: HttpClient) { }
  postDocter(data: any) {
    return this.http.post<any>("http://localhost:8082/doctors", data)
     // .pipe(map((res: any) =>{
      //  return res;
     // }))
  }
  postPatient(data: any) {
    return this.http.post<any>("http://localhost:8081/patients/", data)
      //.pipe(map((res: any) => {
      //  return res;
    //  }))
  }

  getPatient() {
    return this.http.get<any>("http://localhost:8081/patients/");
     //.pipe(map((res: any) => {
        //return res;
     // }))

  }
  getDocter() {
    return this.http.get<any>("http://localhost:8082/doctors/")
     .pipe(map((res: any) => {
       console.log(res);
        return res;
      }))
  }
  updatePatient(data: any, id: number) {
    return this.http.put<any>("http://localhost:8081/patients/" + id, data)
      //.pipe(map((res: any) => {
       // return res;
     // }))
  }
  deletePatient(id: number) {
    return this.http.delete<any>("http://localhost:8081/patients/"+id)
      //.pipe(map((res: any) => {
      //  return res;
     // }))
  }
  deleteDocter(id: number) {
    return this.http.delete<any>("http://localhost:8082/doctors/" + id)
     // .pipe(map((res: any) => {
      //  return res;
     // }))
  }
  updateDocter(data: any, id: number) {
    return this.http.put<any>("http://localhost:8082/docters/" + id, data)
      //.pipe(map((res: any) => {
       // return res;
     // }))
  }
 
}
