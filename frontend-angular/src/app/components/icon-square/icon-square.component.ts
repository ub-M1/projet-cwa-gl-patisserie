import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-square',
  templateUrl: './icon-square.component.html',
  styleUrls: ['./icon-square.component.scss']
})
export class IconSquareComponent implements OnInit {

  //revisar si es mejor aqui inicializar o en el constructor
  @Input() icon: string = "";
  @Input() height: number = 80;
  @Input() width: number = 80;

  constructor() { }

  ngOnInit(): void {
  }

}
