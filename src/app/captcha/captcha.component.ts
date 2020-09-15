import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'qrtests-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  constructor() { }

  @Output()
  captchaSolved: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

  resolved(result: string) {
    console.log(result);
    this.captchaSolved.emit(true);
  }

}
