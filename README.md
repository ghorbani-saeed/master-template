# 🚀 Master-Template

Ein standardisiertes Angular-Template für saubere, skalierbare Projekte. Es bietet eine klare Ordnerstruktur, 
ein vorkonfiguriertes Asset-Management und eine strikte Trennung von Logik und statischen Inhalten.

> **⚠️ WICHTIG:** Führe in diesem Ordner **niemals** den Befehl `ng new projekt-name` aus,
 da dies dein gesamtes Template löschen oder beschädigen würde. Kopiere stattdessen einfach 
 den gesamten Ordner als Basis für neue Angular-Projekte!

---

## 🛠️ Verwendung des Templates

Wähle eine der folgenden Methoden, um ein neues Projekt zu starten:

### Methode 1: Der "Copy & Paste" Workflow (Für schnelle Projekte)
1. **Kopieren:** Kopiere den gesamten `master-template` Ordner und benenne ihn in deinen neuen Projektnamen um.
2. **Bereinigen:** Lösche den Ordner `node_modules` und die Datei `package-lock.json`.
3. **Installieren:** Öffne das Terminal im neuen Ordner und führe `npm install` aus.
4. **Git-Reset:** Lösche den versteckten `.git`-Ordner und 
initialisiere Git neu mit `git init`, `git add .` und `git commit -m "Init"`.

### Methode 2: Der GitHub-Template Workflow (Der professionelle Weg)
1. Lade den `master-template` Ordner in ein neues GitHub-Repository hoch.
2. Aktiviere in den **Repository Settings** die Option **"Template repository"**.
3. **Start:** Klicke bei zukünftigen Projekten auf GitHub einfach auf den Button **"Use this template"**. 
GitHub generiert automatisch ein neues Repository für dich.

### Methode 3: Die Wartungs-Regel (Goldstandard)
Dieses Template ist dein "Goldstandard". Wenn du während der Arbeit an einem Projekt merkst, dass eine Einstellung 
(z.B. in der `tsconfig` oder `angular.json`) verbessert werden kann, übertrage diese Änderung **zurück in das Master-Template**.
So bleiben all deine Projekte auf dem neuesten Stand.

---

## 📂 Struktur-Guide

* `/public`: Hier liegen alle statischen Assets (Bilder, Schriften, Favicons, JSON-Daten). Alles hier ist über `/` erreichbar.
* `/src/00-app`: Hier liegt die gesamte Angular-Logik.
* `/src/00-app/01-components`: Dein Hauptverzeichnis für UI-Komponenten.
    * Schema: `00-pages`, `01-blocks`, `02-elements`.
* `/public/api/sendMail.php`: Backend-Logik für Kontaktformulare (benötigt PHP-Server).

---

## 🚀 Installation & Start

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm start