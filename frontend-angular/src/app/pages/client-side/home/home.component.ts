import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Propriété pour stocker les données du menu
  menu: any[] = [
    {
      name: 'Tarte aux pommes',
      description: 'Description de la tarte aux pommes',
      price: 10
    },
    {
      name: 'Gâteau au chocolat',
      description: 'Description du gâteau au chocolat',
      price: 10
    },
    {
      name: 'Tarte aux fruits rouges',
      description: 'Description de la tarte aux fruits rouges',
      price: 10
    },
    {
      name: 'Gâteau à la vanille',
      description: 'Description du gâteau à la vanille',
      price: 15
    },
    {
      name: 'Tarte au citron',
      description: 'Description de la tarte au citron',
      price: 10
    },
    {
      name: 'Gâteau  au chocolat blanc',
      description: 'Description du gâteau  au chocolat blanc',
      price: 10
    }
  ];

  // Méthode pour soumettre le formulaire de contact
  submitForm(form: any): void {
    console.log(form.value);
  }
}
