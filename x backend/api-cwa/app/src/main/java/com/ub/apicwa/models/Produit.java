package com.ub.apicwa.models;



import javax.persistence.*;

@Entity
@Table(name="produit")
public class Produit {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idProduit;
	private String designation;
	private Double prixunitaire;
	@Column(name="image",columnDefinition="LONGTEXT")
	private String image;
	private int quantitemax;
	private String description;
	@OneToOne
    @JoinColumn(name="idCategorie", nullable=false)
	private Categorie idCategorie;
/*	@Lob
    @Column(name = "imageBlob", length = Integer.MAX_VALUE, nullable = true)
    private byte[] imageBlob; */
	public int getIdProduit() {
		return idProduit;
	}
	public void setIdProduit(int idProduit) {
		this.idProduit = idProduit;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public Double getPrixunitaire() {
		return prixunitaire;
	}
	public void setPrixunitaire(Double prixunitaire) {
		this.prixunitaire = prixunitaire;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getQuantitemax() {
		return quantitemax;
	}
	public void setQuantitemax(int quantitemax) {
		this.quantitemax = quantitemax;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Categorie getIdCategorie() {
		return idCategorie;
	}
	public void setIdCategorie(Categorie idCategorie) {
		this.idCategorie = idCategorie;
	}
	
	
	
	
	
	

}
