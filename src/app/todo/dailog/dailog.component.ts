import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {
  @Input() value: string;
  @Input() showPrompt: boolean;
  @Input() placeholder: string;
  @Input() title: string;
  @Input() template: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();

  constructor() { 
    this.okText = 'OK';
    this.cancelText = 'Cancel';

  }

  ngOnInit() {
  }
  
  emitValue(value) {
    this.valueEmitted.emit(value);
  }

}
