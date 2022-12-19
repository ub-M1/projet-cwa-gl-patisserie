import { User } from "./User";

export class Order{
    idCommande: number | undefined;
    datecommande: Date | undefined
    adresseLivraison: string| undefined;
    etat!: string;
    idClient!: User;
}