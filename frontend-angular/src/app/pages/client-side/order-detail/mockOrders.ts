import { OrderLine } from "src/app/models/OrderLine";

export const mockOrders: OrderLine[] = [{
  id: 1,
  quantity: 540,
  price: 11.5,
  order: {
    id: 1,
    date: new Date("2022-11-14"),
    address: "25 rue albert dijon",
    state: "en cours",
    idClient: {
      id: 1,
      nom: '',
      prenom: '',
      email: '',
      username: '',
      role: '',
      token: '',
      tel: '',
      idClient:0

    }
  },
  product: {
    _id: 5,
    designation: "Cheese Burger",
    prixunitaire: 8.5,
    image: "img-cheese",
    quantitemax: 10,
    description: "Cheese Burger",
    categorie: ''
  }
}];
