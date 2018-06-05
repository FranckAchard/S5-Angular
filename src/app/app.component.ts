import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'promo';
  welcomeMsg = 'Bonjour tout le monde';
  user = {
    id: 0,
    name: 'Michel François',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
    jobTitle: 'Customer Division Assistant'
  };

  testClick() {
    console.log('coucou user : ', this.user);
  }

  testMouseOver() {
    console.log('je vole!');
  }
  changeText(text) {
    console.log('coucou : ', text);
    this.user.name = text;
  }
  logInputValue(val) {
    console.log('la valeur saisie est : ', val);
  }
}
