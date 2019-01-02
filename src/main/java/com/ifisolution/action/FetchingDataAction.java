package com.ifisolution.action;

import java.util.ArrayList;
import java.util.List;

import com.ifisolution.model.Sheet;
import com.ifisolution.service.DataService;
import com.opensymphony.xwork2.ActionSupport;

public class FetchingDataAction extends ActionSupport{
	
	private DataService dataService;
	
	private List<Sheet> listSheet;
	
	public FetchingDataAction() {
		listSheet=new ArrayList<Sheet>();
		System.out.println("fetching contructor");		
		
	}

	public List<Sheet> getListSheet() {
		return listSheet;
	}

	public void setListSheet(List<Sheet> listPa) {
		this.listSheet = listPa;
	}
	
	
	public DataService getData() {
		return dataService;
	}

	public void setData(DataService data) {
		this.dataService = data;
	}

	public String execute() {
		System.out.println("run execute()");	
		setListSheet(dataService.getSheet());
		return "success";
	}
}
