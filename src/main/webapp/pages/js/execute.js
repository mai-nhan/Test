$(document).ready(function(){
	$(document).ready(function(){
		var paData=[];
		var chart1,pointClick={};
		$.getJSON("fetch.action", function(data){
			$.each(data.listSheet,function(index){
				paData[index]={name:this.name,date: this.date,data:this.listPa};
			}); 
			//alert("huhu");
			var chart={type: 'column'};
			var title={text: 'Weekly PA'};
			var subtitle={text: 'Source: WorldClimate.com'};
			var xAxis={
			    type:'datetime',			   
		    	dateTimeLabelFormats: {
		            day: '%a'
		        }
			   ,
			    
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
			var temp = new Date(paData[0].date[0]);
			var poinstart = Date.UTC(temp.getFullYear(),temp.getMonth(),temp.getDate());
			var plotOptions={
				series: {
					point: {
		                events: {
		                    click: function () {
			                    pointClick.cate = this.category;
			                    pointClick.value = this.y;
		                        alert('Category: ' + pointClick.cate);
		                        $.getJSON("getPa.action?sheetName="+pointClick.series+"&date=2016-10-24", function(dl){
		                        	alert(dl.listPaPerDay.length);
		                        });
		                    }
		                }
		            },		          
			        events: {
			            legendItemClick: function () {
			                var visibility = this.visible ? 'visible' : 'hidden';
			                var name = this.name;                  
			                document.getElementById(''+name).checked = this.visible;
			            },
			            click: function (event) {
		                    pointClick.series = this.name;
			            }
			        },
			        pointInterval: 24 * 3600 * 1000,
			        pointStart: poinstart
			      },
			    
				column: {pointPadding: 0.2, borderWidth: 0}
			};
			
			$(function(){
				chart1=Highcharts.chart('container', {
				  chart: chart,
				  title: title,				  
				  subtitle: subtitle,
				  xAxis: xAxis,
				  yAxis: yAxis,
				  tooltip: tooltip,
				  plotOptions: plotOptions,
				  series: [
					  {
						  name: paData[0].name,
						  data: paData[0].data,
						  
					  },
					  {
						  name: paData[1].name,
						  data: paData[1].data
					  },
					  {
						  name: paData[2].name,
						  data: paData[2].data
					  }
				  ]
				});
			});
			
			$('#ENR062A3').click (function(e){	
		        if (this.checked){           
		            chart1.series[0].hide();
		           
		        }
		        else{
		            chart1.series[0].show();
		        }
		    });
			$('#ENR04CA0').click (function(e){		
		        if (this.checked){           
		            chart1.series[1].hide(); 
		        }
		        else{
		            chart1.series[1].show();
		        }
		    });
			$('#ENR077A9').click (function(e){		
		        if (this.checked){           
		            chart1.series[2].hide();
		        }
		        else{
		            chart1.series[2].show();
		        }
		    });
		});
	});
});