package com.qa.todo.business;

import java.util.List;
import java.util.Optional;

import com.qa.todo.domain.Todo;

public interface ITodoService {

	List<Todo> getTodo();

	void deleteTodo(Long id);

	Todo addTodo(Todo todo);

	Optional<Todo> findById(long id);

}