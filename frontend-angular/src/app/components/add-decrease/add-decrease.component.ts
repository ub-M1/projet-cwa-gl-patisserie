import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-add-decrease',
  templateUrl: './add-decrease.component.html',
  styleUrls: ['./add-decrease.component.scss']
})
export class AddDecreaseComponent implements OnInit {

  @Input() item!: CartItem | null;
  @Output() onInc = new EventEmitter<void>();
  @Output() onDec = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDecrease(){
    this.onDec.emit();
  }
  onIncrease(){
    this.onInc.emit();
  }

  getCount(){
    if (this.item){
      return this.item.quantite
    }
    return 0
  }
}
