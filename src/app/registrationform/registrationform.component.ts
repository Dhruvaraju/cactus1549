import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent implements OnInit {
  constructor() {}
isSubmitted: boolean ;
  ngOnInit(): void {}

 onSubmit(formData: any) {
    console.log(formData);
  }
}
