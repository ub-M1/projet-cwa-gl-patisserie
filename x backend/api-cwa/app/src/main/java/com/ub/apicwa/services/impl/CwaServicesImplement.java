package com.ub.apicwa.services.impl;


import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;


import com.ub.apicwa.dao.*;
import com.ub.apicwa.models.*;
import com.ub.apicwa.services.CwaServices;

@Service
public class CwaServicesImplement implements CwaServices {
	@Autowired
	private RepoCategory reCategory;
	@Autowired
	private RepoProduit reProduit;
	@Autowired
	private RepoUser reUser;
	@Autowired
	private RepoCommande reCom;
	@Autowired
	private RepoClient reCli;
	@Autowired
	private LigCommande relig;
	@Override
	public List<Categorie> getCategory() {
		// TODO Auto-generated method stub
		List<Categorie> liste = new ArrayList<Categorie>();
		reCategory.findAll().forEach(liste::add);
		return liste;
	}

	@Override
	public int addCategory(Categorie categorie) {
		// TODO Auto-generated method stub
		return reCategory.save(categorie).getIdCategorie();
	}

	@Override
	public void deleteCategory(int id) {
		// TODO Auto-generated method stub
		reCategory.deleteById(id);
	}

	@Override
	public int addProduit(Produit produit) {
		// TODO Auto-generated method stub
		return reProduit.save(produit).getIdProduit();
	}

	@Override
	public List<Produit> getProduit(String fil, String lib) {
		// TODO Auto-generated method stub
		if(fil.equals("all")) {
			return reProduit.getProduit();
		}else if(fil.equals("byCategory")) {
		    return reProduit.getProduit(lib);
		}else if(fil.equals("byProduit")) {
		    return reProduit.byProduit(lib);
		}else{
		    return reProduit.getProId(Integer.parseInt(lib));
		}
		
	}

	@Override
	public void deleteProduit(int id) {
		// TODO Auto-generated method stub
		reProduit.deleteById(id);
	}

	@Override
	public void updateProduit(int id, Map<String, Object> updates) {
		// TODO Auto-generated method stub
		Produit upd = reProduit.findById(id).get();
		reProduit.save(upd);
	}

	@Override
	public int addUser(User user) {
		// TODO Auto-generated method stub
		return reUser.save(user).getIdUser();
	}

	@Override
	public void updateUser(int id, Map<String, Object> updates) {
		// TODO Auto-generated method stub
		User upd = reUser.findById(id).get();
		reUser.save(upd);
	}

	@Override
	public List<User> getUser() {
		// TODO Auto-generated method stub
		List<User> liste = new ArrayList<User>();
		reUser.findAll().forEach(liste::add);
		return liste;
	}

	@Override
	public int addClient(Client client) {
		// TODO Auto-generated method stub
		return reCli.save(client).getIdClient();
	}

	@Override
	public List<Client> getClient() {
		// TODO Auto-generated method stub
		List<Client> liste = new ArrayList<Client>();
		reCli.findAll().forEach(liste::add);
		return liste;
	}

	@Override
	public List<Client> getClient(int id) {
		// TODO Auto-generated method stub
		return reCli.findByIdC(id);
	}

	@Override
	public int addCommande(Commande commande) {
		// TODO Auto-generated method stub
		return reCom.save(commande).getIdCommande();
	}

	@Override
	public List<Commande> getComande(String fil, String lib) {
		// TODO Auto-generated method stub
		if(fil.equals("all")) {
			return reCom.getComande();
		}else if(fil.equals("byIdClient")) {
		    return reCom.byIdClient(Integer.parseInt(lib));
		}else {
		    return reCom.getComande(Integer.parseInt(lib));
		}
	}

	@Override
	public int addLigCommande(ligneCommande lig) {
		// TODO Auto-generated method stub
		return relig.save(lig).getIdLcom();
	}

	@Override
	public List<ligneCommande> getLigCommande() {
		// TODO Auto-generated method stub
		List<ligneCommande> liste = new ArrayList<ligneCommande>();
		relig.findAll().forEach(liste::add);
		return liste;
	}

	@Override
	public List<User> authentification(String username, String password) {
		if(username.isEmpty() && !password.isBlank()) {
		   return reUser.findByUsername(username, password);
		}else {
		    return reUser.findByUsername(username, password);
		}
	}

	@Override
	public User login(String username, String password) {
		// TODO Auto-generated method stub
		return reUser.findByUsernamePassword(username, password);
		
	}

	@Override
	public List<ligneCommande> getByIdlig(int id) {
		// TODO Auto-generated method stub
		return relig.getByIdlig(id);
	}

	@Override
	public List<Client> getClientByUser(int id) {
		// TODO Auto-generated method stub
		return reCli.getClientByUser(id);
	}

	@Override
	public void updateClient(int id, Map<String, Object> updates) {
		// TODO Auto-generated method stub
		Client upd = reCli.findById(id).get();
		reCli.save(upd);
	}

	@Override
	public void deleteClient(int id) {
		// TODO Auto-generated method stub
		reCli.deleteById(id);		
	}

	@Override
	public void updateEtatCommande(int id, Map<String, Object> updates) {
		// TODO Auto-generated method stub
		Commande upd = reCom.findById(id).get();
		reCom.save(upd);
	}

	@Override
	public void deleteCommande(int id) {
		// TODO Auto-generated method stub
		reCom.deleteById(id);		
	}

	@Override
	public void deleteLigCommande(int id) {
		// TODO Auto-generated method stub
		relig.deleteById(id);  
	}


	
	
 
}
