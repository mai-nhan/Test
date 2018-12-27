package com.ifisolution.model;

import java.util.ArrayList;
import java.util.List;

public class Sheet {
	private String name;
	private float[] listPa;
	
	public Sheet() {
		listPa=new float[7];
	}

	public Sheet(String name, float[] listPa) {		
		this.name = name;
		this.listPa = listPa;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float[] getListPa() {
		return listPa;
	}

	public void setListRecord(float[] listPa) {
		this.listPa = listPa;
	}
	
	
}
