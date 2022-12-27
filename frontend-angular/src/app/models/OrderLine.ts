import { Product } from "./Produit";
import { Order } from "./Order";

import { Injectable } from "@angular/core";
import { Adapter } from "./Adapter";

export class OrderLine{
    id: number | undefined;
    quantity: number | undefined
    price: number| undefined;
    order!: Order;
    product!: Product;

    constructor(order: any){
        this.id = order.idLcom;
        this.quantity = order.quantite;
        this.price = order.prixachat;
        this.order = order.idCommande;
        this.product = order.idProduit;
    }
}

@Injectable({
    providedIn: "root",
})
export class OrderLineAdapter implements Adapter<OrderLine> {
    adapt(item: any): OrderLine {
      return new OrderLine(item);
    }
}