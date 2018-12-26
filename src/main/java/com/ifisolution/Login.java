package com.ifisolution;

public class Login {
	private String userName,message;
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String execute()throws Exception{
		return "success";
	}
}