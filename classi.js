//modulo dotenv
const dotenv = require("dotenv");
dotenv.config();

//modulo server
const http = require("http");
const port = process.env.P0RT || 9999;
const host = process.env.HOST || localhost;

http.createServer((req, res ) => {
    res.writeHead(200, {
        "Content-type": "text/html; charset=utf-8"
    })
    res.end("<h1>sono classi js</h1>");
})
.listen(port, host, () => {
    console.log(`server avviato su http://${host}:${port}`);
});

//CLASSI
// creare una classe in js chiamata "Veicolo" con proprietà e metodi. La classe "Veicolo" dovrebbe 
// avere le seguenti caratteristiche:
//proprietà private : 
// - `marca`: stringa
// - `anno`: numero
// - `colore`: stringa
//Metodi: 
// - `informazioni()` : metodo che restituisce una stringa con tutte le info del veicolo sopra elencate
// - `annoAttuale()` : metodo che restituisce l'anno corrente / puoi utilizzare la classe `Date di js per  ottenre l'anno corrente`
// - `calcolaEta()`: metodo che calcola e restituisce l'età del veicolo in anni / differenza tra anno corrente e anno di fabbricazione


class Veicolo {
    #marca;
    #anno;
    #colore;

    //costruttore
    constructor(marca_, anno_, colore_) {
        this.#marca = marca_;
        this.#anno = anno_;
        this.#colore = colore_;
    }

    informazioni() {
        return `Il veicolo è della marca ${this.#marca} dell'anno ${this.#anno} e il suo colore è  ${this.#colore}`;
    }

    annoAttuale() {
        const dataCorrente = new Date();
        return dataCorrente.getFullYear();
    }
}

//istanza
const auto1 = new Veicolo('Fiat', 2000, 'red');

console.log(auto1.annoAttuale());