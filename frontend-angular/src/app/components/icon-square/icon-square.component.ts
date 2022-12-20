import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-square',
  templateUrl: './icon-square.component.html',
  styleUrls: ['./icon-square.component.scss']
})
export class IconSquareComponent implements OnInit {

  @Input() icon: string;
  @Input() height: number;
  @Input() width: number;
  @Input() borderRadius: number;

  constructor() {
    this.icon = "";
    this.height = 80;
    this.width = 80;
    this.borderRadius = 17;
  }

  ngOnInit(): void {
  }

}
