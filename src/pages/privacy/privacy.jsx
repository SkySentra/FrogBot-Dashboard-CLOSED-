import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function privacy() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 px-6 py-20 text-green-100">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl font-extrabold text-center text-green-50 mb-12">Datenschutzerklärung</h1>

          <div className="space-y-6">
            <p><strong>Version 1.0 – Letzte Änderung: 26. Juli 2025</strong></p>

            <h2 className="text-2xl font-semibold">1. Verantwortlicher</h2>
            <p>
              David Leon Engelmann<br />
              21 Giorgi Brtskinvale Street<br />
              0159 Tiflis, Georgien<br />
              Telefon: +995 592 113 721<br />
              E-Mail: systemapi.yt@gmail.com<br />
              Website: <a href="https://frogbot.app" className="underline hover:text-green-200">https://frogbot.app</a>
            </p>

            <h2 className="text-2xl font-semibold">2. Zweck der Datenverarbeitung</h2>
            <ul className="list-disc pl-6">
              <li>Bereitstellung von Botfunktionen</li>
              <li>Analyse und Verbesserung der Services</li>
              <li>Benutzerverwaltung im Dashboard</li>
              <li>Logging / Auditierung</li>
              <li>Sprachauswahl anhand der IP-Adresse (max. 60 Sekunden Verarbeitung)</li>
            </ul>

            <h2 className="text-2xl font-semibold">3. Erhobene Daten</h2>
            <ul className="list-disc pl-6">
              <li>Benutzer-IDs, Server-IDs, Nachrichteninhalte, Rolleninformationen</li>
              <li>OAuth2-Daten, IP-Adressen, Cookies & Sessions, Geräteinformationen</li>
            </ul>

            <h2 className="text-2xl font-semibold">4. Rechtsgrundlage der Verarbeitung</h2>
            <ul className="list-disc pl-6">
              <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung (z. B. Matomo)</li>
            </ul>

            <h2 className="text-2xl font-semibold">5. Datenweitergabe an Dritte</h2>
            <ul className="list-disc pl-6">
              <li>Hosting-Anbieter</li>
              <li>Logging- und Analysetools</li>
              <li>Discord Inc. (USA)</li>
            </ul>

            <h2 className="text-2xl font-semibold">6. Cookies und Tracking</h2>
            <p>Technisch notwendige Cookies, optionale Cookies mit Einwilligung, Matomo (self-hosted, anonymisiert)</p>

            <h2 className="text-2xl font-semibold">7. Speicherdauer</h2>
            <p>Daten werden gelöscht, sobald der Zweck entfällt oder gesetzliche Fristen ablaufen.</p>

            <h2 className="text-2xl font-semibold">8. Rechte der betroffenen Personen</h2>
            <ul className="list-disc pl-6">
              <li>Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit</li>
              <li>Beschwerde bei einer Aufsichtsbehörde: <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="underline hover:text-green-200">EDPB Mitglieder</a></li>
            </ul>

            <h2 className="text-2xl font-semibold">9. Datensicherheit</h2>
            <ul className="list-disc pl-6">
              <li>TLS-Verschlüsselung</li>
              <li>Rate Limiting, Logging-Kontrolle, Zugriffsbeschränkungen</li>
              <li>Regelmäßige Sicherheitsüberprüfungen</li>
            </ul>

            <h2 className="text-2xl font-semibold">10. Drittlandübermittlung</h2>
            <p>Datenübertragung an Discord Inc. (USA) gemäß Standardvertragsklauseln (Art. 46 DSGVO).</p>

            <h2 className="text-2xl font-semibold">11. Änderungen der Datenschutzerklärung</h2>
            <p>Diese Datenschutzerklärung kann bei Bedarf angepasst werden.<br />Letztes Änderungsdatum: 26. Juli 2025</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
