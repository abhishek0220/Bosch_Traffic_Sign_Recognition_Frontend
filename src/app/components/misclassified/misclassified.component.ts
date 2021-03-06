import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-misclassified',
  templateUrl: './misclassified.component.html',
  styleUrls: ['./misclassified.component.css']
})
export class MisclassifiedComponent implements OnInit {

  classes : any[] = [];
  serverURL: string;
  selected = '1';
  imgLinks = [];
  imgA = "";
  imgB = "";
  show = false;

  constructor(
    private http: HttpClient,
  ) {
    this.serverURL = environment.serverUrl;
  }

  ngOnInit(): void {
    this.getAllClasses();
    this.getImgs();
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
  async getImgs(){
    this.imgLinks = [];
    this.http.get(this.serverURL + `/misclassified?class=${this.selected}`).subscribe((response : any)=>{
      console.log(response['results'])
      this.imgLinks = response['results']
    },error=>{
      console.log('error')
    })
  }
  getImg(a : any, path :any){
    this.http.post(this.serverURL + '/compareSIFT', {
      'path':path,
      'per' : a
    }).subscribe((response : any) => {
      console.log(response)
      this.imgA = response['img1'];
      this.imgB = response['img2'];
      this.show = true;
    },error=>{
      console.log('error')
    })
  }
  close(){
    this.show = false;
  }

}
