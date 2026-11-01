import LanguageExperiment from '@/components/LanguageExperiment';
export default function GermanBusinessEmail() {
 return <LanguageExperiment lang="de" title="Geschäftliche E-Mail mit eigener Domain | Venmail" description="Geschäftliche E-Mail mit eigener Domain: Tarife für Teams und Schritte zur Einrichtung bei Venmail." heading="Geschäftliche E-Mail mit eigener Domain" intro="Erstellen Sie Adressen wie name@ihrefirma.de für Ihr Team, mit Kalender, Kontakten und gemeinsamem Speicher." cta="Konto erstellen" languageNotice="Registrierung und Anwendung sind auf Englisch und Französisch verfügbar." facts={[
 {title:'Ihre Domain',body:'Nutzen Sie Ihre eigene Domain für die E-Mail-Adressen Ihres Teams.'},
 {title:'Standard-Tarif',body:'1 US-Dollar pro Monat für bis zu 5 Postfächer. Jedes weitere Postfach kostet 1 US-Dollar pro Monat.'},
 {title:'Kalender und Kontakte',body:'Verwalten Sie Termine und Kontakte zusammen mit Ihrer geschäftlichen E-Mail.'}
 ]} steps={{title:'Einrichtung',items:['Erstellen Sie ein Konto und wählen Sie einen Geschäftstarif.','Fügen Sie Ihre Domain hinzu und bestätigen Sie sie.','Richten Sie die angegebenen DNS-Einträge ein und erstellen Sie Postfächer.']}} questions={{title:'Häufige Fragen',items:[
 {q:'Benötige ich eine Domain?',a:'Ja. Für die Aktivierung der Postfächer benötigen Sie eine bestätigte Domain und einen kostenpflichtigen Tarif.'},
 {q:'Kann ich meine Adresse beim Anbieterwechsel behalten?',a:'In der Regel ja. Sie müssen die Domain verwalten und die E-Mail-Einträge anpassen. Planen Sie die Übertragung vorhandener Nachrichten vor der Änderung der MX-Einträge.'},
 {q:'Ist die Anwendung auf Deutsch verfügbar?',a:'Registrierung und Anwendung sind derzeit auf Englisch und Französisch verfügbar; Deutsch ist in der Anwendung noch nicht verfügbar.'}
 ]}} />;
}
