/* eslint-disable */


// Tipos Básicos (aqui ocorre inferência de tipos)

let nome: string = 'Luiz'; // Qualquer tipo de string
let idade: number = 0b1010; // 10, 1.57, -5.55 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol

// let big: bigint = 10n; // bigint


// Arrays

let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeString: Array<string> = ['a','b'];
let arrayDeString2: string[] = ['a','b'];

// Objetos

let pessoa: {nome:string, idade: number, adulto?: boolean} = {
    idade: 38,
    nome : 'Dimitris'
};

// Functions

function soma(x:number,y:number) : number{
    return x + y;
}

const soma2: (x: number, y : number ) => number = (x,y) => x+y;