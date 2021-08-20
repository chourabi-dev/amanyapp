import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';


import { Color, Label, SingleDataSet } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {



/******************************************************************************** */


 
  constructor(private api:ApiService) { }

  ngOnInit(): void {
 
  }



}
