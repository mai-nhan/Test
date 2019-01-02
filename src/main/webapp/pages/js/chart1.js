$(document).ready(function(){
			var paData=[];
			$.getJSON("fetch.action", function(data){
				$.each(data.listSheet,function(index){
					paData[index]={name:this.name,data:this.listPa};
				}); 
				
				var chart={type: 'column'};
				var title={text: 'Weekly PA'};
				var subtitle={text: 'Source: WorldClimate.com'};
				var xAxis={
				    categories: ['Mon','Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				    crosshair: true
				  };
				var yAxis={
				    min: 0,
				    title: {text: 'Puissance appelée (kW)'}
				};
				var tooltip={
				    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				      '<td style="padding:0"><b>{point.y:.1f} kW</b></td></tr>',
				    footerFormat: '</table>',
				    shared: true,
				    useHTML: true
				};
				var plotOptions={
				    column: {pointPadding: 0.2, borderWidth: 0}
				};
				
				$(function(){
					Highcharts.chart('container', {
					  chart: chart,
					  title: title,
					  subtitle: subtitle,
					  xAxis: xAxis,
					  yAxis: yAxis,
					  tooltip: tooltip,
					  plotOptions: plotOptions,
					  series: paData
					});
				});
			});
		});