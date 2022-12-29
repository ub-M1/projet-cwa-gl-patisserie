package com.ub.apicwa.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ub.apicwa.models.Client;

public interface RepoClient  extends CrudRepository<Client, Integer>{
	List<Client> findByIdC(int id);
	List<Client> getClientByUser(int id);
}
