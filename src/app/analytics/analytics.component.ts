import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js';
import {Config, Data, Layout} from 'plotly.js';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {


  currentChild = 'Brian';
  currentActivity = 'Sleep';
  currentMetric = 'Mood';
  
  data = {'Brian': 
	    {'Sleep': 
	       {'Mood': 
	          {x: [7, 3, 8, 5, 10, 9, 8, 4, 5, 6], y: [3, 1, 4, 3, 4, 3.5, 4.2, 1.2, 0.4, 2.1]}
		}
	     }
         };

  activityToLabel = {'Sleep': 'Hours of Sleep'};
  metricToLabel = {'Mood': 'Mood'};
  


  getPlotData(child, activity, metric) {
	var currentX = this.data[child][activity][metric].x;
	var currentY = this.data[child][activity][metric].y;
	var trace = {
		x: currentX,
		y: currentY,
		mode: 'markers',
		type: 'scatter',
		marker: {size: 16, color: 'purple'}
	};
	var data = [trace];
	return data;
  }

  getPlotLayout(child, activity, metric) {
  	var layout = {
		title: activity + ' vs. ' + metric + ' for ' + child,
		titlefont: { size: 18, color: 'purple'},
		xaxis: {title: this.activityToLabel[activity], titlefont: {size: 16, color: 'purple'}},
		yaxis: {title: this.metricToLabel[metric], titlefont: {size: 16, color: 'purple'}},	
	};
	return layout;
  }

  constructor() { }

  ngOnInit() {
	var data = this.getPlotData(this.currentChild, this.currentActivity, this.currentMetric);
	var layout = this.getPlotLayout(this.currentChild, this.currentActivity, this.currentMetric);
	Plotly.newPlot('myDiv', data, layout);
  }

}
