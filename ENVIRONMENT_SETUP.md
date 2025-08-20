# Environment Setup für E-Mail-Funktionalität

## Problem: E-Mails werden nicht gesendet

Die Enterprise-Kontakt-Seite funktioniert, aber E-Mails werden nicht versendet, weil der `RESEND_API_KEY` nicht konfiguriert ist.

## Lösung

### 1. Resend API-Key erstellen

1. Gehe zu [resend.com](https://resend.com)
2. Erstelle einen Account oder logge dich ein
3. Gehe zu "API Keys" im Dashboard
4. Erstelle einen neuen API Key
5. Kopiere den Key (beginnt mit `re_`)

### 2. Umgebungsvariable setzen

#### Lokal (Development)

Erstelle eine `.env.local` Datei im Projektroot:

```env
RESEND_API_KEY=re_dein_echter_api_key_hier
```

#### Produktion (Vercel/Netlify/etc.)

Füge die Umgebungsvariable in deinem Hosting-Dashboard hinzu:

- **Name**: `RESEND_API_KEY`
- **Wert**: `re_dein_echter_api_key_hier`

### 3. Domain verifizieren (Resend)

Für Produktion musst du deine Domain bei Resend verifizieren:

1. Gehe zu "Domains" in Resend
2. Füge `sparkscale.de` hinzu
3. Folge den DNS-Anweisungen

### 4. Testen

1. Gehe zu `/api/test-env` um zu prüfen, ob der API-Key geladen wird
2. Teste das Enterprise-Formular auf `/enterprise-kontakt`
3. Prüfe die Server-Logs für Debugging-Informationen

## Debugging

### API-Key prüfen

Besuche: `https://deine-domain.com/api/test-env`

Erwartete Antwort:

```json
{
  "hasResendKey": true,
  "resendKeyLength": 32,
  "resendKeyPrefix": "re_xxxxx"
}
```

### Server-Logs prüfen

Die API-Route loggt detaillierte Informationen:

- Ob der API-Key vorhanden ist
- Länge des API-Keys
- E-Mail-Versand-Status

## Fallback-Verhalten

Auch ohne API-Key funktioniert das Formular:

- Daten werden in Server-Logs gespeichert
- User bekommt Erfolgs-Meldung
- Kein E-Mail-Versand

## Support

Bei Problemen prüfe:

1. `/api/test-env` für Umgebungsvariablen
2. Server-Logs für detaillierte Fehler
3. Resend Dashboard für API-Key Status
