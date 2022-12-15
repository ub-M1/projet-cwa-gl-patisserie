import { User } from "./User";

export class Order{
    _id: number | undefined;
    datecommande: Date | undefined
    adresse_livraison: string| undefined;
    etat!: boolean;
    client!: User;
    ligne_commande!: any[]
}