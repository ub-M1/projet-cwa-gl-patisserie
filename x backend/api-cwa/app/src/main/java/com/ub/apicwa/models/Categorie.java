package com.ub.apicwa.models;

import java.util.*;

import javax.persistence.*;

@Entity
@Table(name="categorie")
public class Categorie {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idCategorie;
	private String nomcategorie;
	
	public int getIdCategorie() {
		return idCategorie;
	}
	public void setIdCategorie(int idCategorie) {
		this.idCategorie = idCategorie;
	}
	public String getNomcategorie() {
		return nomcategorie;
	}
	public void setNomcategorie(String nomcategorie) {
		this.nomcategorie = nomcategorie;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(nomcategorie);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Categorie other = (Categorie) obj;
		return Objects.equals(nomcategorie, other.nomcategorie);
	} 
	

}
