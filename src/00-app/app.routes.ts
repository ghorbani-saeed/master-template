import { Routes } from '@angular/router';
import { HelpPage } from './01-components/00-pages/help-page/help-page';
import { LegalNotice } from './01-components/00-pages/legal-page/legal-notice';

export const routes: Routes = [
  { path: 'help', component: HelpPage },
  { path: 'imprint', component: LegalNotice },
  // Falls du möchtest, dass beim Start direkt eine Seite angezeigt wird:
  { path: '', redirectTo: 'help', pathMatch: 'full' },
];
