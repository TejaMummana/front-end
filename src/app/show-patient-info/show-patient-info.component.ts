import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PatientModel } from '../patients/patient.model';

@Component({
  selector: 'app-show-patient-info',
  templateUrl: './show-patient-info.component.html',
  styleUrls: ['./show-patient-info.component.css']
})
export class ShowPatientInfoComponent implements OnInit {

  patientObj: PatientModel[] = [];
  patientId!: number;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPatient()
      .subscribe(res => {
        this.patientObj = res;
      })
  }
  Search() {
    this.ngOnInit();
    if (this.patientId != 0) {
      this.patientObj = this.patientObj.filter(res => {
        if (res.id==this.patientId){
          return true;
        }
        else{
          alert("NO Such Patient Is There In The Database");
          return false;
        }
      });
    }    
  }


}
