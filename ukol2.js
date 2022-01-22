console.log('ahoj');

/*Vstup
Přijměte jméno jako vstup od uživatele, dále nechte 
zadat jeho věk a vypište na základě věku jednu ze 
dvou vět ve tvaru:
a) Vaše jméno je Marian, je vám 30 let a tak máte 
právo řídit auto.
b) Vaše jméno je Marian, je vám 14 let a tak musíte 
počkat ještě 4 let, než budete moci řídit auto.*/

/*Zkuste si zadání rozebrat na jednoduché kroky, které
byste učinily uvnitř hlavy – jak porovnám 3 čísla a najdu
nejmenší?*/

let jmeno = prompt('Jak se jmenuješ?');
let vek = Number( prompt('Kolik je ti let?')); 
let ridicak = 18 - vek;

if (vek >= 18 ) {
  console.log( " Vase jmeno je " + jmeno + " je vám " + vek + " a tak máte právo řídit auto ")
} 

else {
  cosole.log( " Vaše jméno je " + jmeno + " je vám " + let + " a tak musíte počkat ještě " + ridicak + " než budete moci řídit auto. ")
}


/*2) Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu "Největší číslo je A: 37".*/

