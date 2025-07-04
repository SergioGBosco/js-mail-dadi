// Esercizio Email
// Creo un array con all'interno delle e-mail

const email = [`sergio@boolean.it`, `dinosauro@libero.it`, `diobuonoegeneroso@gmail.com`, `aspettoilpranzo@hofame.it`]

// credo una variabile e-mail per l'utente

useremail = prompt(`Inserisci la tua e-mail per la verifica`)

//genero un ciclo for per controllare che l'email inserita dall'utente è presente all'interno della lista degli invitati 

let verify = false

for (let i = 0; i < email.length; i++) {
  if (useremail === email[i]) {
    verify = true
  }
}
if (verify === true) {
  verify = (`La tua e-mail corrisponde, puoi entrare`)
}

if (verify === false) {
  verify = (`La tua E-mail non è stata trovata, Riprova`)
}



console.log(verify)

//Esercizo Dadi
//Credo due variabili dove andranno inseriti i valori casuali generati 

const randomPcNumber = Math.floor(Math.random() * 6 + 1);
const randomUserNumber = Math.floor(Math.random() * 6 + 1);

//Credo la condizione di vittoria per uno del due partecipanti o nel caso di valori uguali di un pareggio

if (randomPcNumber > randomUserNumber) {
  console.log(`Il valore generato per il PC è di ${randomPcNumber}, il numero generato dall'USER è di ${randomUserNumber} \n IL VINCITORE è IL PC `);
}
else if (randomPcNumber < randomUserNumber) {
  console.log(`Il valore generato per il PC è di ${randomPcNumber}, il numero generato dall'USER è di ${randomUserNumber} \n IL VINCITORE è L'USER `);
}
else {
  console.log(`Il valore generato per il PC è di ${randomPcNumber}, il numero generato dall'USER è di ${randomUserNumber} \n Il risultato è un pareggio`);
}

