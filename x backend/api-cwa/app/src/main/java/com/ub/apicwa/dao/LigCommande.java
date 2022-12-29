package com.ub.apicwa.dao;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ub.apicwa.models.ligneCommande;

public interface LigCommande extends CrudRepository<ligneCommande, Integer>{
	List<ligneCommande> getByIdlig(int id);
}
