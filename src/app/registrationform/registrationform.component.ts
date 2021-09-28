import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

 onSubmit(formData: any) {
    console.log('entered here');
    console.log(formData);
  }
}
