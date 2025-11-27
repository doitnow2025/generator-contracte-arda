// ===============================
// STORAGE MANAGER
// ===============================

// Cheia sub care se salvează tot CRM-ul
const STORAGE_KEY = "arda_contracte_db";

// Structura bazei de date
function getDefaultDB() {
    return {
        clienti: [],        // fiecare client = {id, nume, cui, rc, cnp, adresa, telefon, email}
        contracte: [],      // fiecare contract = {id, clientId, nr, data, tip, continut, accesorii, rate, total, avans, sold}
        aparate: [],        // fiecare aparat = {id, nume, accesorii}
    };
}

// ===============================
// LOAD / SAVE
// ===============================

export function loadDB() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        const defaultDB = getDefaultDB();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDB));
        return defaultDB;
    }

    try {
        return JSON.parse(raw);
    } catch (e) {
        console.error("Eroare la citirea bazei locale:", e);
        const defaultDB = getDefaultDB();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDB));
        return defaultDB;
    }
}

export function saveDB(db) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

// ===============================
// OPERATIUNI PE CLIENTI
// ===============================

export function addClient(data) {
    const db = loadDB();

    const newClient = {
        id: crypto.randomUUID(),
        nume: data.nume,
        cui: data.cui,
        rc: data.rc,
        cnp: data.cnp,
        adresa: data.adresa,
        telefon: data.telefon || "",
        email: data.email || "",
    };

    db.clienti.push(newClient);
    saveDB(db);
    return newClient;
}

export function getClientById(id) {
    const db = loadDB();
    return db.clienti.find(c => c.id === id) || null;
}

export function listClients() {
    return loadDB().clienti;
}

// ===============================
// OPERATIUNI PE CONTRACTE
// ===============================

export function addContract(data) {
    const db = loadDB();

    const newContract = {
        id: crypto.randomUUID(),
        clientId: data.clientId,
        nrContract: data.nrContract,
        dataContract: data.dataContract,
        tip: data.tip, // "contract", "pv", "garantie", etc.
        continut: data.continut,
        accesorii: data.accesorii || [],
        rate: data.rate || [],
        total: data.total || 0,
        avans: data.avans || 0,
        sold: data.sold || 0
    };

    db.contracte.push(newContract);
    saveDB(db);

    return newContract;
}

export function listContracts() {
    const db = loadDB();
    return db.contracte;
}

export function getContractsByClient(clientId) {
    return listContracts().filter(c => c.clientId === clientId);
}

// ===============================
// OPERATIUNI PE APARATE
// ===============================

export function addAparat(data) {
    const db = loadDB();

    const newAparat = {
        id: crypto.randomUUID(),
        nume: data.nume,
        accesorii: data.accesorii || []
    };

    db.aparate.push(newAparat);
    saveDB(db);

    return newAparat;
}

export function listAparate() {
    return loadDB().aparate;
}

