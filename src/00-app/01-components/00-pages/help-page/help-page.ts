import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ArrowButton } from '../../02-elements/buttons/buttons/normal-button/normal-button';

@Component({
  selector: 'app-help-page',
  imports: [ArrowButton, ArrowButton],
  templateUrl: './help-page.html',
  styleUrl: './help-page.scss',
})
/**
 * HelpPage component
 *
 * Represents the help and support page of the application.
 * Provides navigation functionality to return to the
 * previous route.
 */
export class HelpPage {
  location = inject(Location);

  /**
   * Navigates back to the previous page.
   *
   * Uses the Angular Location service to
   * return to the last route in history.
   *
   * @returns void
   */
  back(): void {
    this.location.back();
  }
}
