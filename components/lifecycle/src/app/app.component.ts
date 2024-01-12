import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle';

  inputText: string = "";

  onSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }
}
