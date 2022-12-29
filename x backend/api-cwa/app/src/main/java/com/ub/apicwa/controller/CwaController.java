package com.ub.apicwa.controller;

import java.io.*;
import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.ub.apicwa.models.*;
import com.ub.apicwa.services.CwaServices;

public class CwaController {
	
	@Autowired
	private CwaServices cwServices;
	@RequestMapping(path = "/getCategory", method = RequestMethod.GET)
	public List<Categorie> getCategory() {
		return cwServices.getCategory();
	}
	@PostMapping("addCategory")
	public int addCategory(@RequestBody Categorie categorie) {
		return cwServices.addCategory(categorie);
	}
	@PostMapping("deleteCategory/{id}")
	public void deleteCategory(@PathVariable("id") int id) {
		cwServices.deleteCategory(id);
	}
	@PostMapping("addProduit")
	public int addProduit(@RequestBody Produit produit) {
		return cwServices.addProduit(produit);
	}
	@GetMapping("getProduit/{fil}/{lib}")
	public List<Produit> getProduit(@PathVariable("fil") String fil, @PathVariable("lib") String lib){
		List<Produit> liste = cwServices.getProduit(fil, lib);	
		return liste;
	}
	@PostMapping("updateProduit/{id}")
	public void updateProduit(@PathVariable("id") int id, @RequestBody Map<String, Object> updates) {	
		cwServices.updateProduit(id, updates);
	}
	@DeleteMapping("deleteProduit/{id}")
	public void deleteProduit(@PathVariable("id") int id) {
		cwServices.deleteProduit(id);
	}
	@PostMapping("addUser")
	public int addUser(@RequestBody User user) {
		return cwServices.addUser(user);
	}
	@PatchMapping("updateUser/{id}")
	public void updateUser(@PathVariable("id") int id, @RequestBody Map<String, Object> updates) {	
		cwServices.updateUser(id, updates);
	}
	@GetMapping("authentification/{username}/auth/{password}")
	public List<User> authentification(@PathVariable("username") String username, @PathVariable("password") String password){
		List<User> liste = cwServices.authentification(username, password);	
		return liste;
	}
	@GetMapping("login/{username}/auth/{password}")
	public User login(@PathVariable("username") String username, @PathVariable("password") String password) {
		User reponse = cwServices.login(username, password);	
		if(reponse==null) {
			 throw new ResourceNotFoundException();
		}
		return reponse;
	}
	@RequestMapping(path = "/getUser", method = RequestMethod.GET)
	public List<User> getUser() {
		return cwServices.getUser();
	}
	@PostMapping("addCommande")
	public int addCommande(@RequestBody Commande commande) {
		return cwServices.addCommande(commande);
	}
	@GetMapping("getComande/{fil}/{lib}")
	public List<Commande> getComande(@PathVariable("fil") String fil, @PathVariable("lib") String lib){
		List<Commande> liste = cwServices.getComande(fil, lib);	
		return liste;
	}
	@PostMapping("updateEtatCommande/{id}")
	public void updateEtatCommande(@PathVariable("id") int id, @RequestBody Map<String, Object> updates) {	
		cwServices.updateEtatCommande(id, updates);
	}
	@DeleteMapping("deleteCommande/{id}")
	public void deleteCommande(@PathVariable("id") int id) {
		cwServices.deleteCommande(id);
	}
	@PostMapping("addClient")
	public int addClient(@RequestBody Client client) {
		return cwServices.addClient(client);
	}
	@RequestMapping(path = "/getClient", method = RequestMethod.GET)
	public List<Client> getClient() {
		return cwServices.getClient();
	}
	@RequestMapping(path = "/getClient/{id}", method = RequestMethod.GET)
	public List<Client> getClient(@PathVariable("id") int id) {
		return cwServices.getClient(id);
	}
	@RequestMapping(path = "/getClientByUser/{id}", method = RequestMethod.GET)
	public List<Client> getClientByUser(@PathVariable("id") int id) {
		return cwServices.getClientByUser(id);
	}
	@PostMapping("updateClient/{id}")
	public void updateClient(@PathVariable("id") int id, @RequestBody Map<String, Object> updates) {	
		cwServices.updateClient(id, updates);
	}
	@DeleteMapping("deleteClient/{id}")
	public void deleteClient(@PathVariable("id") int id) {
		cwServices.deleteClient(id);
	}
	@PostMapping("addLigCommande")
	public int addLigCommande(@RequestBody ligneCommande lig) {
		return cwServices.addLigCommande(lig);
	}
	@RequestMapping(path = "/getLigCommande", method = RequestMethod.GET)
	public List<ligneCommande> getLigCommande() {
		return cwServices.getLigCommande();
	}
	@RequestMapping(path = "/getligneByIdcom/{id}", method = RequestMethod.GET)
	public List<ligneCommande> getByIdlig(@PathVariable("id") int id) {
		return cwServices.getByIdlig(id);
	}
	@RequestMapping("deleteLigCommande/{id}")
	public void deleteLigCommande(@PathVariable("id") int id) {
		cwServices.deleteLigCommande(id);
	}
	
}
