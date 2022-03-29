import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { PatientModel } from './patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public formValue!: FormGroup;
  patientObj: PatientModel = new PatientModel();
  docterObj: any;
  patientData!: any;
  doctersData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  filterTerm!: string;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      patientName: [''],
      mobile: [''],
      appointmentDate: [''],
      appointmentTime: [''],
      selectedDocter: ['', Validators.required]
    })
    this.getAllDocters();
    
     this.getAllPatients();
  }
  getAllDocters() {
    this.api.getDocter().subscribe(res => {
      this.docterObj = res;
    });
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.patientObj.id = row.id;
    this.formValue.controls['patientName'].setValue(row.patientName)
    this.formValue.controls['mobile'].setValue(row.mobile)
    this.formValue.controls['appointmentDate'].setValue(row.appointmentDate)
    this.formValue.controls['appointmentTime'].setValue(row.appointmentTime)
    this.formValue.controls['selectedDocter'].setValue(row.selectedDocter);
  }

  updatePatientDetails() {
    this.patientObj.patientName = this.formValue.value.patientName;
    this.patientObj.mobile = this.formValue.value.mobile;
    this.patientObj.appointmentDate = this.formValue.value.appointmentDate;
    this.patientObj.appointmentTime = this.formValue.value.appointmentTime;
    this.patientObj.selectedDocter = this.formValue.value.selectedDocter;

    this.api.updatePatient(this.patientObj, this.patientObj.id)
      .subscribe(res => {
        alert("patient updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllPatients();
      },
        err => {
          alert("something went wrong")
        })
  }
 // getDocterNames() {
   // this.api.getDocterName()
     // .subscribe(res => {
       // this.doctersData = res;
        //this.selectedDocter.push(res);
      //})
  //}
  getAllPatients() {
    this.api.getPatient()
      .subscribe(res => {
        this.patientData = res;
      })
  }
  deletePatient(row: any) {
    this.api.deletePatient(row.id)
      .subscribe(res => {
        alert(" Deleted successfully");
        this.getAllPatients();

      })
  }
  //getAllDoctors() {
    //this.selectedDoctor = this.api.getDocter();
  //}
  

}
