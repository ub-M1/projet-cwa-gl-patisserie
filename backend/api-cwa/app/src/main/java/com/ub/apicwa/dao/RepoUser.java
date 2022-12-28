package com.ub.apicwa.dao;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ub.apicwa.models.User;

public interface RepoUser extends CrudRepository<User, Integer>{
	List<User> findByUsername(String username, String password);
	User findByUsernamePassword(String username, String password);	
}
