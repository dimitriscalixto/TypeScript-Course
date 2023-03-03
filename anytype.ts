// Any é um tipo em que a gente não quer utilizar
// Utilize apenas em último caso


function showMessage(msg: any){
    return msg;
}
console.log(showMessage([0,1,2,3]));
console.log(showMessage('Dimitris'));
console.log(showMessage(2));
console.log(showMessage({'Dimitris':1, 'Gregori':2}));