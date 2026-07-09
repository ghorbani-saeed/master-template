// Importiert die zentrale Konfiguration (Provider für Firebase, Router, etc.)
import { bootstrapApplication } from '@angular/platform-browser';
// Importiert die Haupt-Komponente (Root-Component), die als Startpunkt der UI dient
import { appConfig } from './app.config';

// Importiert die Root-Komponente (Startpunkt der App-Oberfläche)
// root-komponente aus src/00-app/app.routes.ts:
//      { path: 'help', component: HelpPage },
//      { path: 'imprint', component: LegalNotice },
import { App } from './app';


/**
 * Der Einstiegspunkt der Anwendung:
 * bootstrapApplication lädt die Root-Komponente (App) unter 
 * Verwendung der globalen Konfiguration (appConfig).
 * Fehler beim Start werden in der Konsole geloggt.
 */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
