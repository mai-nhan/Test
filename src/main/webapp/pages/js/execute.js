$(document).ready(function(){
	alert("Xin chao!");
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
		                    pointClick.date = getDate(new Date(this.category));
		                    pointClick.value = this.y;
	                        alert('Category: ' + pointClick.date);
	                        $.getJSON("getPa.action?sheetName="+pointClick.series+"&date="+pointClick.date, function(dl){
	                        	//alert(dl.listPaPerDay.length);
	                        	drawContainer2(dl);
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
function drawContainer2(dl){	
	var datas = [] = dl.listPsPerDay;
	var dataa = [] = dl.listPaPerDay;

	var t = 0;
	  function setDt(inputData) {
	            // generate an array of random data
	            var data = [],
	                time = (new Date(dl.date+"T00:00:00")).getTime(),
	                i;

	            for (i = 0; i < 144; i++) {
	                data.push({
	                    x: time + i*600000,
	                    y: inputData[i]
	                });
	                t+=inputData[i];
	            }	            
	            return data;
	        };
	  Highcharts.chart('container2', {
	    chart:{
	      //animation: Highcharts.svg, // don't animate in old IE
	    	marginRight: 100, 
	    },
	    time: {
	        useUTC: false
	    },
	    title: {
	      text: 'Hourly chart'
	    },	    
	    legend:{
	    	align: 'right',
	        verticalAlign: 'top',
	        layout: 'vertical',
	        x: 0,
	        y: 100
	    },
	    xAxis: {	      
	      type: 'datetime',
	      tickInterval: 36e5,
	      labels:{
	        format: '{value:%H}'
	      }
	    },
	    yAxis: {
	      title: {
	        text: 'Puissance (kW)'
	      },
	      labels: {
	        
	      }
	    },
	    tooltip: {
	      pointFormat: '{series.name} is <b>{point.y:,.0f}</b>'
	    },
	    plotOptions: {
	      area: {                  
	        marker: {
	          enabled: false,          
	          symbol: 'circle',
	          radius: 4,
	          states: {
	            hover: {
	              enabled: true
	            }
	          }
	        }
	      },
	      spline: {                
	        marker: {
	            enabled: false
	        },
	        lineWidth: 4,
	        states: {
	            hover: {
	                lineWidth: 5
	            }
	        }                        
	      }
	    },
	    series: [{
	      type: 'area',
	      name: 'PA',
	      data: setDt(dataa)
	    }, {
	      type: 'spline',
	      name: 'PS',
	      data: setDt(datas)
	    }]
	  });
}
function getDate(date){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var d = date.getDate();
	if(month<10) month="0"+month;
	if(d<10) d="0"+d;
	return year+"-"+month+"-"+d;
}