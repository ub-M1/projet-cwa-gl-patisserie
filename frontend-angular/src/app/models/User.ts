export class User {

    id!: number;
    idClient!: number;
    nom!: string;
    prenom!: string;
    email!: string;
    username!: string;
    role!: string; // ADMIN | CLIENT
    token!: string;
    tel : string = ""
}