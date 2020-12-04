import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { AuthService } from './services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCaJvfDdInKBSovwMHauoHMVblQpTGRBKk",
  authDomain: "cg-covid-proj.firebaseapp.com",
  databaseURL: "https://cg-covid-proj.firebaseio.com",
  projectId: "cg-covid-proj",
  storageBucket: "cg-covid-proj.appspot.com",
  messagingSenderId: "1072715413899",
  appId: "1:1072715413899:web:de82fb1cbaa0f956cd178e"
};

@NgModule({
  declarations: [ 
    AppComponent, LoginComponent, RegisterComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    PerfectScrollbarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
