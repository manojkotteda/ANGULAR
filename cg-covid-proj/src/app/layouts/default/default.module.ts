import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatSidenavModule, MatIconModule, MatSnackBarModule, MatSelectModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GeolocationService } from 'src/app/shared/geolocation.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { CountupComponent } from 'src/app/shared/components/countup/countup.component';
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCaJvfDdInKBSovwMHauoHMVblQpTGRBKk",
//   authDomain: "cg-covid-proj.firebaseapp.com",
//   databaseURL: "https://cg-covid-proj.firebaseio.com",
//   projectId: "cg-covid-proj",
//   storageBucket: "cg-covid-proj.appspot.com",
//   messagingSenderId: "1072715413899",
//   appId: "1:1072715413899:web:de82fb1cbaa0f956cd178e"
// };

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    CountupComponent,
    ArticlesComponent,
    ContactsComponent

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NgMatSearchBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatSnackBarModule,
    ModalModule.forRoot(),
    PerfectScrollbarModule,



  ],
  providers: [
    GeolocationService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class DefaultModule { }
