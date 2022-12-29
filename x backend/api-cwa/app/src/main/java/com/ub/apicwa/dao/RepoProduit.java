package com.ub.apicwa.dao;

import java.util.*;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


//import com.ub.apicwa.models.Categorie;
import com.ub.apicwa.models.Produit;

public interface RepoProduit extends CrudRepository<Produit, Integer>{
	List<Produit> getProduit();
	List<Produit> getProduit(String lib);
	List<Produit> byProduit(String lib);
	List<Produit> getProId(int parseInt);
}
