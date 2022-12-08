export class Product {
    _id: number | undefined;
    nom: string| undefined;
    prix!: number;
    description: string| undefined;
    img: string| undefined;
    categorie: any;
    annee: number | string | undefined;
    createdAt: Date | string | undefined;
    updatedAt: Date | string | undefined;
}