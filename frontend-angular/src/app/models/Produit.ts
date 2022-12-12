export class Product {
    _id: number | undefined;
    designation: string| undefined;
    nom: string| undefined;
    prixunitaire!: number;
    image: string| undefined;
    quantitemax: any;
    description: string| undefined;
    categorie: string | undefined;
}