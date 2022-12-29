package com.ub.apicwa.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="ligneCommande")
public class ligneCommande {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idLcom;
	private int quantite;
	private Double prixachat;
	@OneToOne
    @JoinColumn(name="idCommande", nullable=false)
	private Commande idCommande;
	@OneToOne
    @JoinColumn(name="idProduit", nullable=false)
	private Produit idProduit;
	public int getIdLcom() {
		return idLcom;
	}
	public void setIdLcom(int idLcom) {
		this.idLcom = idLcom;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public Double getPrixachat() {
		return prixachat;
	}
	public void setPrixachat(Double prixachat) {
		this.prixachat = prixachat;
	}
	public Commande getIdCommande() {
		return idCommande;
	}
	public void setIdCommande(Commande idCommande) {
		this.idCommande = idCommande;
	}
	public Produit getIdProduit() {
		return idProduit;
	}
	public void setIdProduit(Produit idProduit) {
		this.idProduit = idProduit;
	}
	
	
	

}
