package com.user.todo.JPARepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.todo.model.userData;

public interface todoListRepository extends JpaRepository<userData,Long> {

}
