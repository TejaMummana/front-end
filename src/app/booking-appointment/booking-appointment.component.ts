import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { ApiService } from '../api.service';
import { DocterModel } from '../docters/docters.model';
@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrls: ['./booking-appointment.component.css']
})
export class BookingAppointmentComponent implements OnInit {

  public submitForm!: FormGroup
  docterObj: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      patientName: [''],
      mobile: [''],
      appointmentDate: [''],
      appointmentTime: [''],
      selectedDocter: ['', Validators.required]

    })
    this.getAllDocters();
  }

  submit() {
    this.http.post<any>("http://localhost:8081/patients/", this.submitForm.value)
      .subscribe(res => {
        alert("submitted successfully");
        this.submitForm.reset();
        this.router.navigate(["patient-info"]);
      }, err => {
        alert("something went wrong")
      })
  }


  getAllDocters() {
    this.api.getDocter().subscribe(res => {
      this.docterObj = res;
    });
  }
}
 
