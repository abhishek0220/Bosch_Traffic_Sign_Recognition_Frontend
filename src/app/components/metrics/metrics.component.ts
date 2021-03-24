import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  imgPCF = ""
  serverURL : string;
  constructor(
    private http: HttpClient,
  ) {
    this.serverURL = environment.serverUrl;
    this.getAllClasses()
  }

  ngOnInit(): void {
  }
  getAllClasses(){
    this.http.get(this.serverURL + '/graphPCF').subscribe((response : any)=>{
      this.imgPCF = response['imgLink']
      console.log(response)
    },error=>{
      console.log('error')
    })
  }

}
