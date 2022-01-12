import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'lib-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css']
})
export class CopyButtonComponent implements OnInit {
  @Input() data = '';
  @Output() copied = new EventEmitter();
  constructor() { }

  onCopy() {
    this.copied.next(this.data);
  }

  ngOnInit(): void {
  }

}
