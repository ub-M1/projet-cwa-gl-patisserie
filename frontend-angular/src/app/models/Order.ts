import { User } from "./User";
import { Injectable } from "@angular/core";
import { Adapter } from "./Adapter";

export class Order{
    id: number | undefined;
    date: Date | undefined
    address: string| undefined;
    state!: string;
    idClient!: User;

    constructor(order: any){
        this.id = order.idCommande;
        this.date = order.datecommande;
        this.address = order.adresseLivraison;
        this.state = order.etat;
        this.idClient = order.idClient;
    }
}

@Injectable({
    providedIn: "root",
})
export class OrderAdapter implements Adapter<Order> {
    adapt(item: any): Order {
      return new Order(item);
    }
}