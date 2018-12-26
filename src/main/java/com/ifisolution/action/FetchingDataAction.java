package com.ifisolution.action;

import java.util.ArrayList;
import java.util.List;

import com.ifisolution.model.Record;
import com.ifisolution.service.DataService;
import com.opensymphony.xwork2.ActionSupport;

public class FetchingDataAction extends ActionSupport{
	private List<Integer> listPa;
	
	public FetchingDataAction() {
		listPa=new ArrayList<Integer>();
		listPa.add(10);
		listPa.add(100);
		listPa.add(40);
		listPa.add(20);
		listPa.add(80);
		listPa.add(50);
		listPa.add(85);
		
	}

	public List<Integer> getListPa() {
		return listPa;
	}

	public void setListPa(List<Integer> listPa) {
		this.listPa = listPa;
	}
	
	public String execute() {
		System.out.println("run execute()");
		List<Record> list=new DataService().getRecords("ENR062A3", "2016-10-24");
		return "success";
	}
}
