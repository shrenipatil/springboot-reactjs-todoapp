package com.user.todo.service;

import org.springframework.stereotype.Service;

import com.user.todo.model.userData;
@Service
public class toDoService {

	public userData save(userData changeData) {
		userData postData=new userData();
		  if (changeData.getId() == -1 || changeData.getId() == 0) {
			  System.out.println("service");
			  postData.setDescription(changeData.getDescription());
			  postData.setTargetDate(changeData.getTargetDate());
			  postData.setUsername(changeData.getUsername());
			  postData.setIsDone(changeData.getIsDone());
		  }
		  return postData;
		}
}
