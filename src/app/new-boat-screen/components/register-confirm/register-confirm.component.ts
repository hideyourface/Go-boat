import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.scss']
})
export class RegisterConfirmComponent implements OnInit {
  @Input() data : NgForm;
  public form : object;
  constructor() { }

  ngOnInit(): void {
    this.form = this.data.value;
  }

}
