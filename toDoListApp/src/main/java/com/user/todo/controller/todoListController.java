package com.user.todo.controller;

import java.net.URI;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.user.todo.JPARepo.todoListRepository;
import com.user.todo.model.Message;
import com.user.todo.model.userData;
import com.user.todo.service.toDoService;

@Controller
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class todoListController {

	private static final Logger logger = LogManager.getLogger(todoListController.class);
	@Autowired
	todoListRepository todoListRepo;
	@Autowired
	toDoService todoservice;
	
	@RequestMapping(value="/todo/createList",method=RequestMethod.POST)
	public ResponseEntity<Void> createList(@RequestBody userData createData)
	{
		userData saveData=todoservice.save(createData);
		todoListRepo.save(saveData);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(saveData.getId())
		        .toUri();
		logger.info("*******Create New To-Do List********");
		return ResponseEntity.created(uri).build();
	}
	
	@RequestMapping(value="/todo/getList",method=RequestMethod.GET)
	public List<userData> gettodoList()
	{
		List<userData> userData=new ArrayList<userData>();
		logger.info("********Get API called For fetch all List********");
		return userData=todoListRepo.findAll();
	}
	
	
	@RequestMapping(value="/todo/getListById/{id}",method=RequestMethod.GET)
	public ResponseEntity<userData> getListById(@PathVariable long id)
	{
		userData userListById=new userData();
		try
		{
		 userListById=todoListRepo.getOne(id);
		 logger.info("********Get API called For fetch One List********");
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(null, null, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<userData>(userListById,HttpStatus.OK);
	}
	
	
	@RequestMapping(value="/todo/deleteById/{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Void> deleteTodoList(@PathVariable long id)
	{	
		todoListRepo.deleteById(id);
		logger.info("********Get API called For fetch Delete One List********");
		return ResponseEntity.noContent().build();
	}
	
	
	@RequestMapping(value="/todo/updateList/{id}",method=RequestMethod.POST)
	public  ResponseEntity<userData> updateList(@PathVariable long id,@RequestBody userData updateData)
	{
		userData userById=new userData();
		userById=todoListRepo.getOne(id);
		userById.setDescription(updateData.getDescription());
		userById.setTargetDate(updateData.getTargetDate());
		userById.setIsDone(updateData.getIsDone());
		todoListRepo.save(userById);
		logger.info("********Post API called For Update One List********");
		return new ResponseEntity<userData>(userById, HttpStatus.OK);
		
	}
	
	
}
