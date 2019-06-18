package com.qa.todo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.qa.todo.business.ITodoService;
import com.qa.todo.constants.Constants;
import com.qa.todo.domain.Todo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

	@Autowired
	private ITodoService todoService;

	@GetMapping(path = Constants.TODO)
	public ResponseEntity<List<Todo>> getTodo() {
		return ResponseEntity.ok(todoService.getTodo());
	}
	
	@RequestMapping(value = Constants.TODO, method = RequestMethod.POST)
	public ResponseEntity<Todo> postTodo(@RequestBody Todo todo) {
		return ResponseEntity.ok(todoService.addTodo(todo));
	}

	@RequestMapping(value = Constants.TODO_WITH_PARAM, method = RequestMethod.DELETE)
	public ResponseEntity<List<Todo>> deleteTodo(@PathVariable("id") long id) {
		if (!todoService.findById(id).isPresent()) {
			return ResponseEntity.badRequest().build();
		}
		todoService.deleteTodo(id);
		return ResponseEntity.ok(todoService.getTodo());
	}



}