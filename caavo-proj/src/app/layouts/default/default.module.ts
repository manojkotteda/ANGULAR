import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatSortModule, MatRippleModule, MatFormFieldModule, MatGridListModule, MatSpinner, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CreateGroupComponent } from 'src/app/modules/create-group/create-group.component';
import { FormsModule } from '@angular/forms';
import { ApiCallsService } from 'src/app/modules/api-calls.service';

@NgModule({
  declarations: [
    DefaultComponent,
    CreateGroupComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatRippleModule,
    MatFormFieldModule,
    FormsModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ApiCallsService
  ]
})
export class DefaultModule { }
