import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare const CanvasJS: any;

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
    //this.imgPCF = this.serverURL + '/graphPCF';
  }

  ngOnInit(): void {
    this.makeGraph('/graphPCF', 'graphPCF')
    this.makeGraph('/graphPCF', 'graph2')
  }

  async makeGraph(endpoint: string, canvasID : string){
    this.http.get(this.serverURL + endpoint).subscribe((response : any)=>{
      let chart = new CanvasJS.Chart(canvasID, {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: response['title']
        },
        data: [{
          type: "column",
          dataPoints: response['coords']
        }]
      });
      chart.render();
    },error=>{
      console.log('error')
    })
  }
}
