// Esercizio Email
// Creo un array con all'interno delle e-mail

const email = [`sergio@boolean.it`, `dinosauro@libero.it`, `diobuonoegeneroso@gmail.com`, `aspettoilpranzo@hofame.it`]

// credo una variabile e-mail per l'utente

useremail = prompt(`Inserisci la tua e-mail per la verifica`)

//genero un ciclo for per controllare che l'email inserita dall'utente è presente all'interno della lista degli invitati 

let verify

for (let i = 0; i < email.length; i++) {
  if (useremail === email[i]) {
    verify = true
  }
  else {
    verify = false
  }
}

console.log(verify)









//Esercizo Dadi
//Credo due variabili dove andranno inseriti i valori casuali generati 

const randomPcNumber = Math.floor(Math.random() * 6 + 1);
const randomUserNumber = Math.floor(Math.random() * 6 + 1);

console.log(randomPcNumber)
console.log(randomUserNumber)
