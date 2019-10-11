package com.user.todo.security;

public class authenticationBean {
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public authenticationBean(String message) {
		super();
		this.message = message;
	}

}
