export class Product {
    _id: number;
    designation: string| undefined;
    prixunitaire!: number;
    image: string| undefined;
    quantitemax: any;
    description: string| undefined;
    categorie: string | undefined;

    constructor(p: any){ // p is a json
        this._id = p.idProduit || p.id;
        this.designation = p.designation;
        this.prixunitaire = p.prixunitaire;
        this.description = p.description;
        this.image = p.image;
        this.categorie = p.categorie;
        this.quantitemax = p.quantitemax
    }
  
}