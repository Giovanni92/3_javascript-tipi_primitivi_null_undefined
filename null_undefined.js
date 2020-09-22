

//Null e undefined

var cognome;
//il risultato è undefined siccome non abbiamo specificato la var
console.log(typeof(cognome));

//la console da true come comparazione
console.log(null==undefined);

//confronto dello stesso tipo da false perchè null è type object e Undefined è type undefined
console.log(null===undefined);

//la comparazione di uguaglianza fa si che non esca ok, in quanto null risulta uguale a undefined (ma non come tipo)
if (cognome!=null) {
    console.log('ok');
}

//in questo caso con la comparazione del tipo l'output è 'ok'
if (cognome!==null) {
    console.log('ok');
}

