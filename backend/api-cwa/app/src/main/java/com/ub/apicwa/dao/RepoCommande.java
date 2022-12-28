package com.ub.apicwa.dao;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;

import com.ub.apicwa.models.*;



public interface RepoCommande extends CrudRepository<Commande, Integer>{
	List<Commande> getComande(int i);
	List<Commande> byIdClient(int lib);
	List<Commande> getComande();

}
