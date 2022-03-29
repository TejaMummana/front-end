import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctersComponent } from './docters/docters.component';
import { PatientsComponent } from './patients/patients.component';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './admin/admin.component';
import { UserNavForPatientInfoComponent } from './user-nav-for-patient-info/user-nav-for-patient-info.component';
import { UserNavForDocterInfoComponent } from './user-nav-for-docter-info/user-nav-for-docter-info.component';
import { ShowDocterInfoComponent } from './show-docter-info/show-docter-info.component';
import { ShowPatientInfoComponent } from './show-patient-info/show-patient-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctersComponent,
    PatientsComponent,
    BookingAppointmentComponent,
    PatientSignupComponent,
    PatientLoginComponent,
    AdminComponent,
    UserNavForPatientInfoComponent,
    UserNavForDocterInfoComponent,
    ShowDocterInfoComponent,
    ShowPatientInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
