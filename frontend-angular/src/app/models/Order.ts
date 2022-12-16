import { User } from "./User";

export class Order{
    _id: string | undefined;
    datecommande: Date | undefined
    adresse_livraison: string| undefined;
    etat!: boolean;
    client!: User;
    ligne_commande!: {
        prixachat: number 
    }
}