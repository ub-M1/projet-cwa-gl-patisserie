package com.ub.apicwa.models;

import java.sql.Date;
import java.util.Objects;

import javax.persistence.*;

@Entity
@Table(name="commande")
public class Commande {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idCommande;
	private Date datecommande;
	private String adresseLivraison;
	private String etat;
	@OneToOne
    @JoinColumn(name="idClient", nullable=false)
	private Client idClient;
	public int getIdCommande() {
		return idCommande;
	}
	public void setIdCommande(int idCommande) {
		this.idCommande = idCommande;
	}
	public Date getDatecommande() {
		return datecommande;
	}
	public void setDatecommande(Date datecommande) {
		this.datecommande = datecommande;
	}
	public String getAdresseLivraison() {
		return adresseLivraison;
	}
	public void setAdresseLivraison(String adresseLivraison) {
		this.adresseLivraison = adresseLivraison;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	public Client getIdClient() {
		return idClient;
	}
	public void setIdClient(Client idClient) {
		this.idClient = idClient;
	}
	@Override
	public int hashCode() {
		return Objects.hash(idClient, idCommande);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Commande other = (Commande) obj;
		return Objects.equals(idClient, other.idClient) && idCommande == other.idCommande;
	}
	
	
	
	

}
