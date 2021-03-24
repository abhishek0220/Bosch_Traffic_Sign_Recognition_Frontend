import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent implements OnInit {

  classes : any[] = [];
  serverURL: string;
  selected = '1';
  imgLink = "";
  constructor(
    private http: HttpClient,
  ) {
    this.serverURL = environment.serverUrl;
    this.getGrid();
  }

  ngOnInit(): void {
    this.getAllClasses();
  }
  getAllClasses(){
    this.http.get(this.serverURL + '/allClasses').subscribe((response : any)=>{
      for(var i in response['classes']){
        this.classes.push(response['classes'][i])
      }
    },error=>{
      console.log('error')
    })
  }
  async getGrid(){
    this.imgLink = "";
    this.http.get(this.serverURL + `/imgGrid?class=${this.selected}`).subscribe((response : any)=>{
      this.imgLink = response['imgLink']
    },error=>{
      console.log('error')
    })
  }

}
