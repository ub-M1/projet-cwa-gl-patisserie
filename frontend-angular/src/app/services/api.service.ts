import { Injectable } from '@angular/core';
import { Product } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getProduct(id: any) {
    return new Product({
      id: id,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Palmeras_de_hojaldre_1.jpg/280px-Palmeras_de_hojaldre_1.jpg',
      categorie: "je"
    })
  }
}
