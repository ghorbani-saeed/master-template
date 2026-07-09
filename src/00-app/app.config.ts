// Importiert den Konfigurationstyp, um die App-Einstellungen zu definieren
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// Importiert den Router-Provider, um zwischen verschiedenen Seiten navigieren zu können
import { provideRouter } from '@angular/router';
// Importiert deine Routen-Tabelle (wo festgelegt ist, welche URL zu welcher Seite gehört)
import { routes } from './app.routes';

// 1. Hier die Firebase-Importe hinzufügen:
// Firebase-Kernfunktionen zum Starten der App-Verbindung
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// Firebase-Funktionen, um auf die Firestore-Datenbank zuzugreifen
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// Importiert dein zentrales Konfigurations-Objekt mit den API-Keys (dein "Ausweis" für Firebase)
import { environment } from '../02-environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // ---------------------------------------------------> Fehler-Überwachung
    // Registriert den Router im Angular-System, damit die Navigation funktioniert
    provideRouter(routes), //-------------------------------------------------------------------> Navigation
    // 1. Initialisierung der Firebase-App: 
    // Hier wird Firebase mit deinen spezifischen Daten (apiKey, projectId etc.) gestartet.
    // 'provideFirebaseApp' stellt sicher, dass Firebase sofort beim App-Start verfügbar ist.
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),  //--------------------> Firebase Start
    // 2. Initialisierung von Firestore:
    // Hier sagst du Angular, dass du die Firestore-Datenbank nutzen möchtest.
    // 'provideFirestore' injiziert den Datenbank-Dienst überall in deine App, 
    // wo du ihn später mit 'inject(Firestore)' abrufst.
    provideFirestore(() => getFirestore()) // --------------------------------------------------> Datenbank Start
  ]
};
