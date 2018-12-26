package com.ifisolution.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.client.RestTemplate;

import com.ifisolution.common.DataUri;
import com.ifisolution.model.Record;

public class DataService {
	RestTemplate restTemplate=new RestTemplate();
	
	public DataService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Record> getRecords(String sheetName,String date){
		System.out.println("getRecords");
		//Record[] list = restTemplate.getForObject(DataUri.URI_DATA+"/records/"+sheetName+"?date="+date, Record[].class);
		Record[] list = restTemplate.getForObject("http://localhost:9090/services/records/ENR062A3?date=2016-10-24", Record[].class);
		System.out.println(list.length);
		return Arrays.asList(list);
	}
	
}
