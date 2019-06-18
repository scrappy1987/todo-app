package com.qa.todo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Todo {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String todoName;
	
	public Todo() 
	{
		
	}
	
	public Todo(Long id, String todoName) 
	{
		this.id = id;
		this.todoName = todoName;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTodoName() {
		return todoName;
	}

	public void setTodoName(String todoName) {
		this.todoName = todoName;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", todoName=" + todoName + "]";
	}
}
