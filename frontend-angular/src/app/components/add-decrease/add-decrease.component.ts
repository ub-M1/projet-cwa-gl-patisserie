import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-decrease',
  templateUrl: './add-decrease.component.html',
  styleUrls: ['./add-decrease.component.scss']
})
export class AddDecreaseComponent implements OnInit {

  @Input() value: any = "";
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
}
