function mnemoized(num){

    let lastValue = null;
    let lastResult = null;
    
    return function(num){   
    if(num === lastValue){
        return lastResult;
}
    else{
        lastValue = num;
        lastResult = { value: num};
        return lastResult;     
    } 
    };
}
const memoized = mnemoized();

  console.log(memoized(1) === memoized(1)); // true
  console.log(memoized(3) === memoized(4)); // false


/* Funkcja mnemoized nie przyjmuje żadnych argumentów, 
ale zwraca funkcję, która przyjmuje numer jako argument. 
Ta zwrócona funkcja sprawdza, czy podany numer jest taki 
sam jak ostatnio zapamiętany. Jeśli jest taki sam, zwraca 
wcześniej zapamiętany wynik. Jeśli numer jest inny, aktualizuje 
zapamiętany wynik i zwraca nowy obiekt. Na końcu tworzymy instancję 
tej funkcji, przypisując ją do stałej, która może być używana do dalszych wywołań. */