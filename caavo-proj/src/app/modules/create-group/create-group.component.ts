import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  constructor(private apiCAlls:ApiCallsService) { }

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  userList:Array<any>;

  ngOnInit() {
    this.apiCAlls.getAllData().subscribe(data =>{

      this.userList = data;

    })
  }

  name = 'Angular';
  fileToUpload: any;
  imageUrl: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

}
