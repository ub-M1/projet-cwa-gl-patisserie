package com.ub.apicwa.services;



import java.util.List;
import java.util.Map;



import com.ub.apicwa.models.*;

public interface CwaServices {

	List<Categorie> getCategory();

	int addCategory(Categorie categorie);

	void deleteCategory(int id);

	int addProduit(Produit produit);

	List<Produit> getProduit(String fil, String lib);

	void deleteProduit(int id);

	void updateProduit(int id, Map<String, Object> updates);

	int addUser(User user);

	void updateUser(int id, Map<String, Object> updates);

	List<User> getUser();

	int addClient(Client client);

	List<Client> getClient();

	List<Client> getClient(int id);

	int addCommande(Commande commande);

	List<Commande> getComande(String fil, String lib);

	int addLigCommande(ligneCommande lig);

	List<ligneCommande> getLigCommande();

	List<User> authentification(String username, String password);

	User login(String username, String password);

	List<ligneCommande> getByIdlig(int id);

	List<Client> getClientByUser(int id);

	void updateClient(int id, Map<String, Object> updates);

	void deleteClient(int id);

	void updateEtatCommande(int id, Map<String, Object> updates);

	void deleteCommande(int id);

	void deleteLigCommande(int id);
	



	

	

	

	

}
