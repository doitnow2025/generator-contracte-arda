// =============================================================
// MINI CRM LOCAL STORAGE
// Salvare și încărcare contracte + clienți
// =============================================================

// Chei în LocalStorage
const CLIENT_KEY = "crm_clienti_arda";
const CONTRACT_KEY = "crm_contracte_arda";

// =============================================================
// FUNCȚII – CLIENTI
// =============================================================

export function saveClient(client) {
    let clienti = JSON.parse(localStorage.getItem(CLIENT_KEY) || "[]");

    // Evită dublurile după CUI sau nume
    const exists = clienti.find(
        c => c.cui_cumparator === client.cui_cumparator
    );

    if (!exists) {
        clienti.push(client);
        localStorage.setItem(CLIENT_KEY, JSON.stringify(clienti));
    }
}

export function getClienti() {
    return JSON.parse(localStorage.getItem(CLIENT_KEY) || "[]");
}

// =============================================================
// FUNCȚII – CONTRACTE
// =============================================================

export function saveContract(contract) {
    let contracte = JSON.parse(localStorage.getItem(CONTRACT_KEY) || "[]");
    contracte.push(contract);
    localStorage.setItem(CONTRACT_KEY, JSON.stringify(contracte));
}

export function getContracte() {
    return JSON.parse(localStorage.getItem(CONTRACT_KEY) || "[]");
}
