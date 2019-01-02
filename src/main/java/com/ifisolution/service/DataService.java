package com.ifisolution.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import com.ifisolution.common.DataUri;
import com.ifisolution.model.Record;
import com.ifisolution.model.Sheet;

public class DataService {
	RestTemplate restTemplate;
	
	 
	 
	public DataService() {	
		
		super();
		restTemplate=new RestTemplate();
		System.out.println("contructor DataSevice");
		// TODO Auto-generated constructor stub
	}

	public List<Record> getRecords(String sheetName,String date){
		System.out.println("getRecords");
		//Record[] list = restTemplate.getForObject(DataUri.URI_DATA+"/records/"+sheetName+"?date="+date, Record[].class);
		Record[] list = restTemplate.getForObject("http://localhost:9090/services/records/ENR062A3?date=2016-10-24", Record[].class);
		System.out.println(list.length);
		List<Record> l=Arrays.asList(list);
		System.out.println("list.size="+l.size());
		return l;
	}
	public List<Float> getPaPerDay(String sheetName,String date){
		System.out.println("getRecords");
		//Record[] list = restTemplate.getForObject(DataUri.URI_DATA+"/records/"+sheetName+"?date="+date, Record[].class);
		Record[] list = restTemplate.getForObject("http://localhost:9090/services/records/ENR062A3?date=2016-10-24", Record[].class);
		System.out.println(list.length);
		List<Float> l=new ArrayList<Float>();
		String temp="";
		for(int i=0;i<list.length;i++) {
			temp=list[i].getDatetimepas().get(0).getPa();
			l.add(Float.parseFloat(temp.substring(0, temp.length()-2)));
		}
		System.out.println("size()="+l.size());
		return l;
	}
	public Sheet getPaWeekly(String sheetName){
		System.out.println("getPaWeekly");		
		Sheet sheet = restTemplate.getForObject(DataUri.URI_PA_WEEKLY+sheetName, Sheet.class);				
		return sheet;
	}
	public List<Sheet> getSheet(){
		System.out.println("get Sheet");
		List<Sheet> listSheet=new ArrayList<Sheet>();
		String[] listSheetName=restTemplate.getForObject(DataUri.URI_PA_WEEKLY, String[].class);
		for(int i=0;i<3;i++) {
			listSheet.add(getPaWeekly(listSheetName[i]));
		}
		System.out.println(listSheet.size());
		return listSheet;
	}
	
	/*public static void main(String[] args) {
		List<Record> list = DataService.getRecords("ENR062A3", "2016-10-24");
		for(Record re : list) {
			System.out.println(re);
		}
	} */
}
