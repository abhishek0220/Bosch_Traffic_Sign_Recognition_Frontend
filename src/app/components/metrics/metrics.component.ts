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
    //this.makeGraph('/graphPCF', 'graphPCF')
    //this.makeGraph('/graphPCF', 'graph2')
    this.getHistory();
    this.makeAccGraph();
    this.makeTestAccGraph();
  }
  makeAccGraph(){
    this.http.get(this.serverURL + '/static/accuracy.json').subscribe((response : any)=>{
      var acc = parseFloat(response['accuracy']);
      var rem = 1 - acc;
      let chart = new CanvasJS.Chart("graphAcc", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Accuracy"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: {y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: [
            { y: acc, name: "Correct" },
            { y: rem, name: "Incorrect" }
          ]
        }]
      }); 
      chart.render();
    },error=>{
      console.log('error')
    })
    
  }
  makeTestAccGraph(){
    this.http.get(this.serverURL + '/static/test_accuracy.json').subscribe((response : any)=>{
      var acc = parseFloat(response['accuracy']);
      var rem = 1 - acc;
      let chart = new CanvasJS.Chart("graphTestAcc", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Test Accuracy"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: {y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: [
            { y: acc, name: "Correct" },
            { y: rem, name: "Incorrect" }
          ]
        }]
      }); 
      chart.render();
    },error=>{
      console.log('error')
    })
    
  }

  getHistory(){
    this.http.get(this.serverURL + '/static/history.json').subscribe((response : any)=>{
      var loss = [];
      var acc = [];
      var vloss = [];
      var vacc = [];
      for(var i in response['loss']){
        loss.push({x:parseInt(i)+1, y:response['loss'][i]})
        console.log()
      }
      for(var i in response['accuracy']){
        acc.push({x:parseInt(i)+1, y:response['accuracy'][i]})
      }
      for(var i in response['val_loss']){
        vloss.push({x:parseInt(i)+1, y:response['val_loss'][i]})
      }
      for(var i in response['val_accuracy']){
        vacc.push({x:parseInt(i)+1, y:response['val_accuracy'][i]})
      }
      this.history(loss, acc, vloss, vacc);

    },error=>{
      console.log('error')
    })
  }

  async history(loss : {x:any ,y:any}[], acc : {x:any ,y:any}[], vloss : {x:any ,y:any}[], vacc : {x:any ,y:any}[]){
    let chart = new CanvasJS.Chart("graph2", {
      animationEnabled: true,
      title:{
        text: "History"
      },
      axisX: {
        title: "No of Epoch",
      },
      axisY: {
        maximum: 1,
      },
      legend:{
        cursor: "pointer",
        fontSize: 16
      },
      toolTip:{
        shared: true
      },
      data: [{
        name: "loss",
        type: "spline",
        showInLegend: true,
        dataPoints: loss
      },
      {
        name: "accuracy",
        type: "spline",
        showInLegend: true,
        dataPoints: acc
      },
      {
        name: "val_loss",
        type: "spline",
        showInLegend: true,
        dataPoints: vloss
      },
      {
        name: "val_accuracy",
        type: "spline",
        showInLegend: true,
        dataPoints: vacc
      },]
    });
    chart.render();
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
