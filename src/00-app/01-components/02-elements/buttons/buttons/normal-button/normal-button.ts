import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-normal-button',
  imports: [],
  templateUrl: './normal-button.html',
  styleUrl: './normal-button.scss',
})
export class ArrowButton {
  // Wenn der Nutzer kein Bild angibt, ist es leer
  @Input() iconPath: string = '';
}
