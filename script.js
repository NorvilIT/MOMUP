const orologio = document.getElementById("orologio");

function aggiornaOra() {
    const adesso = new Date();
    const ore = String(adesso.getHours()).padStart(2, "0");
    const minuti = String(adesso.getMinutes()).padStart(2, "0");
    const secondi = String(adesso.getSeconds()).padStart(2, "0");

    orologio.textContent = `${ore}:${minuti}:${secondi}`;
}

// 1. Esegue subito la funzione all'avvio per evitare il "vuoto" iniziale
aggiornaOra();

// 2. Aggiorna l'orologio ogni secondo
setInterval(aggiornaOra, 1000);

// Dati di prova rimanenti: da sostituire con la risposta del backend
const biglietto = {
    costo: "1,80 €",
    codice: "27/4113765"
};

// Funzione per generare la data e l'ora intera attuale
function generaDataOraCorrente() {
    const adesso = new Date();
    const giorno = String(adesso.getDate()).padStart(2, "0");
    const mese = String(adesso.getMonth() + 1).padStart(2, "0");
    const anno = adesso.getFullYear();
    const oraIntera = String(adesso.getHours()).padStart(2, "0");

    return `${giorno}/${mese}/${anno} - ${oraIntera}:00`;
}

// Generiamo la stringa una sola volta (o separatamente se preferisci orari diversi)
const dataOraAttuale = generaDataOraCorrente();

// Assegnazione dei valori agli elementi HTML
document.getElementById("d-attivazione").textContent = dataOraAttuale;
document.getElementById("d-emissione").textContent = dataOraAttuale;
document.getElementById("d-costo").textContent = biglietto.costo;
document.getElementById("d-codice").textContent = biglietto.codice;