import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  ratioValue = 0;
  passKey = "";
  scolor = "grey";
  serverURL : string;
  modelRun = false;
  constructor(
    private http: HttpClient,
  ) {
    this.serverURL = environment.serverUrl;
  }

  ngOnInit(): void {
    interval(1000).subscribe(x => {
      this.getStatus();
    });
  }
  formatLabel(value: number) {
    return value;
  }
  trainModel(){
    this.http.get(this.serverURL + `/trainModel?pkey=${this.passKey}&per=${this.ratioValue}`).subscribe((response : any)=>{
      console.log(response)
    },error=>{
      console.log('error')
    })
  }
  getStatus(){
    this.http.get(this.serverURL + '/modelStatus').subscribe((response : any)=>{
      if(response['running'] == true){
        this.scolor = "green accent-3";
        this.modelRun = true;
      }
      else{
        this.scolor = "grey";
        this.modelRun = false;
      }
    },error=>{
      console.log('error')
    })
  }
}
