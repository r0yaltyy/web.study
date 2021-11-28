//Общее задание
{
	{
		let ha = document.createElement ('haha');
		ha.textContent = "joke";
		let elem = document.body;
		elem.appendChild(ha);

		elem.removeChild(ha);

		for (let i = 0; i < document.body.childNodes.length; i++) {
      			console.log(document.body.childNodes[i]);
      			console.log(document.body.childNodes[i].attributes);
    		}

		function Hi() {
			for (var i = 0; i < arguments.length; i++) {
				console.log( "Привет, " + arguments[i] );
			}
		}

		Hi("John Doe", "Jane Doe");
	}

}
//Индивидуальное задание
{
	//Последний потомок
	{
		console.log("последниц потомок", document.body.lastElementChild);
	}

	//первый узел
	{
		console.log("Первый узел", document.body.firstChild);
	}

	//Предыдущий элемент
	{
		console.log(document.getElementById("123").previousElementSibling);
	}

	//вставка перед элементом
	{
		elem = document.createElement("div");
		elem.innerHTML = "Вставили";
		document.body.insertBefore(elem,document.body.childNodes[0]);
	}

	//поиск элемента по селектору
	{
		console.log(document.querySelectorAll('p'));
	}

	//переключение класса
	{
		let element = document.getElementById('h1');
		elem.classList.toggle("qwertyuiop");
	}

	//прокрутка
	{
		window.addEventListener('scroll',(event) => {
   		console.log('Scrolling...');
		});
	}
	//remove event
	{
		let listener = function(event) {
			alert("Не надо.");
		}
		document.body.addEventListener('click', listener, false);
		document.body.removeEventListener('click', listener, false); //comment this
	}

	//отмена стандартного действия
	{
		document.getElementById('fakelink').addEventListener('click', function(e) {
   		e.preventDefault();
   		alert('Ссылка не работает');
		}, false)
	}

	//предотвращение распространения события
	{
		function showAlert(event) {
			alert("You clicked: "+ this.tagName);
			event.stopPropagation();
    		}
		var elems = document.querySelectorAll("div, p, a");
		for(let elem of elems) {
			elem.addEventListener("click", showAlert);
    		}
	}

	//погружение/всплытие
	{
		for(let elem of document.querySelectorAll('*')) {
			elem.addEventListener("click", e => console.log(`Погружение: ${elem.tagName}`), true);
    			elem.addEventListener("click", e => console.log(`Всплытие: ${elem.tagName}`));
 		 }
	}

	//разные target
	{
		let ul = document.createElement('ul');
		document.body.appendChild(ul);
		let li1 = document.createElement('li');
		let li2 = document.createElement('li');
		ul.appendChild(li1);
		ul.appendChild(li2);
		function hide(e){
  			e.target.style.visibility = 'hidden';
		}
		ul.addEventListener('click', hide, false);
	}
}


