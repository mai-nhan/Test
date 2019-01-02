package com.ifisolution.action;

import java.util.ArrayList;
import java.util.List;

import com.ifisolution.service.DataService;
import com.opensymphony.xwork2.ActionSupport;

public class GetPaPerDay extends ActionSupport{
	private String sheetName, date;
	private List<Float> listPaPerDay;
	private float ps;
	private DataService service;
	public GetPaPerDay() {
		super();
		listPaPerDay= new ArrayList<Float>();
	}
	
	public DataService getService() {
		return service;
	}

	public void setService(DataService service) {
		this.service = service;
	}

	public String getSheetName() {
		return sheetName;
	}
	public void setSheetName(String sheetName) {
		this.sheetName = sheetName;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public List<Float> getListPaPerDay() {
		return listPaPerDay;
	}
	public void setListPaPerDay(List<Float> listPaPerDay) {
		this.listPaPerDay = listPaPerDay;
	}
	
	public float getPs() {
		return ps;
	}

	public void setPs(float ps) {
		this.ps = ps;
	}

	public String execute() {
		setListPaPerDay(new DataService().getPaPerDay(sheetName, date));
		return "success";
	}
	
}
