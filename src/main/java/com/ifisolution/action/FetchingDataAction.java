package com.ifisolution.action;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ifisolution.model.Record;
import com.ifisolution.model.Sheet;
import com.ifisolution.service.DataService;
import com.opensymphony.xwork2.ActionSupport;

public class FetchingDataAction extends ActionSupport{
	
	private DataService data;
	
	private List<Sheet> listSheet;
	
	public FetchingDataAction() {
		listSheet=new ArrayList<Sheet>();
		/*listPa.add(10);
		listPa.add(100);
		listPa.add(40);
		listPa.add(20);
		listPa.add(80);
		listPa.add(50);
		listPa.add(85);
		*/
	}

	public List<Sheet> getListSheet() {
		return listSheet;
	}

	public void setListSheet(List<Sheet> listPa) {
		this.listSheet = listPa;
	}
	
	
	public DataService getData() {
		return data;
	}

	public void setData(DataService data) {
		this.data = data;
	}

	public String execute() {
		System.out.println("run execute()");
		listSheet= data.getSheet();
		return "success";
	}
}
