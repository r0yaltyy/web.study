"use strict";

alert("Сегодня мы поиграем с вами в игру! я загадал число от 0 до 9, а вы попробуете его угадать. Если ваше число меньше моего, я подскажу и выведу сумму наших чисел, а если ваше число больше - разность");

function boo(temp){
	var useless = "i am useless";
	let y = Math.floor(Math.random() * 10); ;
	console.log(x);
	if(y > x)
		return Number(x) + Number(y);
	if(y < x)
		return Number(x) - Number(y);
	if(x == y)
		return true;
}
//console.log(useless); выдаст ошибку
//console.log(y); тоже выдаст ошибку 
var x = prompt("Угадайте мое число!");

{
	let tmp = boo();
	var temepe = "А я глобальная переменная!";
	if(tmp === true){
		document.write("<br>Вот это да! Вы победили!!!");
	}
	else{
		document.write("<br>Не повезло, но держи подсказку:",  tmp);
	}
}
//console.log(tmp); опять выдаст ошибку, т.к. мы вышли за скобки
document.write("<br>"+temepe+"<br>");

{
	let a = 10
	let b="10";
	if(a == b){
		document.write("хм, будет ли это работать?");
	}
	if(a === b){
	document.write("А вот это????");
	}

	console.log(typeof a);
	console.log(typeof b);
}

{
	let hihi = [123, 456, 789];
	for (const bryaaa of hihi) {
		console.log(bryaaa);
	}
}

{
	const lmao = (a,b) => a + b;
	console.log (lmao(5,8));
}
{
	var first, second, tail;
	[first, second, ...tail] = [1, 2, 3, 4, 5, 6, 7];

	console.log(first);
	console.log(second);
	console.log(tail);
}

{
let tmpi = Math.PI;
document.write("<br>Округлим число PI(хаха): ",  Math.floor(tmpi),"<br>");
}

var globalelite = ['privet', 'poka'];

function globus() {
for(let i = 0; i < 2; i++){
	console.log(globalelite[i]);
	delete globalelite[i];
	}
}
globus();
console.log(globalelite[0],globalelite[1]);
