"use strict";

alert("здоровья погибшим!");

//1.Прототип
{
	let pistol = {
		 fire: true
	};
	let uspS = {
		silencer: true
	};
	uspS.__proto__ = pistol; //2.Установка прототипа
	console.log(uspS.fire);
	console.log(uspS.silencer);
	console.log(uspS.__proto__ === pistol) //2.Получение прототипа
}
//1.Сlass
{
	class pistol{
		constructor(name){
			this.pow = 0;
			this.name = name;
		}
		power(pow){
			this.pow = pow;
			console.log("Мощность пистолета равна", this.pow);
		}
	}

	class USP extends pistol{
		uspS(silencer){
			if(silencer == 1){
				console.log(this.name, " имеет глушитель");
			}
			else{
				console.log(this.name," не имеет глушитель");
			}
		}
	}
	let uspik = new USP("Silencer");
	uspik.uspS(1);
	uspik.power(228);

}
//3.super
{
	class Drug{
		constructor(name) {
			this.name = name;
		}
		hi() {
			console.log("Я наркотик: ", this.name);
		}
	}

	class Alcohol extends Drug{
		hi() {
			super.hi();
	    		console.log("И я разрешен...");
		}
	}

	new Alcohol("Vodka").hi();
}
//4
{
	let spasite = {
		i: true,
		j: true,
		k: true,
	};

	for (let key in spasite) {
		console.log(key); //перечисляемые свойства
	}

	console.log("свойство toString - неперечисляемое свойство:", spasite.toString);

	Object.defineProperty(spasite, "OBAMA",{
		set: function(){
			this.i = false;
		}
	});
	console.log(spasite.i);
	spasite.OBAMA = 228;
	console.log(spasite.i);
}

//5
{
	function Method() {
		let pumpum = [].join.call(arguments,' ');
		console.log(pumpum);
	}
	Method("pum","pum","tu", "tu", "tu","gryaaaa");
}
//6
{
	String.prototype.meth = function() {
		if(this.indexOf('zilla') === -1){
			console.log("Не мазила(((")
		}
		else{
		console.log("ХАХА МАЗИЛА!");
		}
	}
	let str = "Godzilla";
	let str2 = "Zillakami";
	str.meth();
	str2.meth()
}
