import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  letters = 'qwertzuiopasdfghjklyxcvbnmQWERTZUIOPASDFGHJKLYXCVBNM';
  numbers = '12345678901234567890';
  symbols = '!§$%&()?@#-*+~_';
  onChangeLength(event: Event) {
    const parsedValue = parseInt((<HTMLInputElement>event.target).value, 10);
    if (isNaN(parsedValue)) {
      this.length = 0;
    }
    this.length = parsedValue;
  }
  isGeneratePasswordDisabled() {
    return (
      !this.length || !(this.useLetters || this.useNumbers || this.useSymbols)
    );
  }
  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }
  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
  onGenerate() {
    let validCharacters = '';
    if (this.useLetters) validCharacters = validCharacters + this.letters;
    if (this.useNumbers) validCharacters = validCharacters + this.numbers;
    if (this.useSymbols) validCharacters = validCharacters + this.symbols;
    let generatedPassword = '';
    for (let i = 0; i < this.length; i += 1) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword = generatedPassword + validCharacters[index];
    }
    this.password = generatedPassword;
  }
}
