import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare const CanvasJS: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  serverURL : string;

  constructor(
    private http: HttpClient,
  ) {
    this.serverURL = environment.serverUrl;
  }

  ngOnInit(): void {
    this.makeGraph('/graphPCF', 'graphPCF', "column")
    this.makeGraph('/static/f1_score.json', 'graphScore', "area")
    this.makeGraph('/static/precision.json', 'graphRecall', "line")
    this.makeGraph('/static/recall.json', 'graphPrecesion', "line")
  }

  async makeGraph(endpoint: string, canvasID : string, typeGrpah : string){
    this.http.get(this.serverURL + endpoint).subscribe((response : any)=>{
      let chart = new CanvasJS.Chart(canvasID, {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: response['title']
        },
        data: [{
          type: typeGrpah,
          dataPoints: response['coords']
        }]
      });
      chart.render();
    },error=>{
      console.log('error')
    })
  }

}
