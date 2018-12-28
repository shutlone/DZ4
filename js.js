function P1() { 
	var a;//высота 
	var b;//площадь 
	var c;//основание 
	a = document.querySelector('input[id=textH]').value; 
	console.log('Высота ='+ ' '+ a); 
	c = document.querySelector('input[id=textA]').value; 
	console.log('Основание ='+ ' '+ c); 
	b = c * a; 
	console.log('Площадь = '+' '+b); 
	if ( (!a) || (isNaN(a)==true) || (!b) || (isNaN(b)==true)) { 
		alert("Покажите ваши числа!!!"); 
	}
	else { 
		alert('Площадь ='+' '+b); 
	} 
} 

function P2() {
	var s,q,qn,x;
	s1 = 0;
	s2 = 0;
	q = 0;
	qn = 0;
	x = document.querySelector('input[id=inputX]').value; 
	console.log('X ='+ ' '+ x);
	if ( (!x) || (isNaN(x)==true)) { 
		alert("А число!?"); 
	}
	else {  
        q = Math.pow(x,4);
        q = q/4;
        x = Math.pow(x,9);
        x = x/8;
        x = Math.abs(x);
        qn = Math.pow(q,13);
        s = (x*(1-qn))/(1-q);//сумма геометрической прогрессии 
        console.log('Сумма прогрессии равняется '+s);
	    alert('Сумма прогрессии равняется '+s);
        }  	
}

function P3() {

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min)) + min;// Возвращает случайное целое число между min (включительно) и max (не включая max)
}
//Math.random возвращает число между 0(вкл.) и 1(не вкл.)
function Increase(a, b) {//Функция для сортировки массива по возрастанию
	return a - b;
}

function CreateAnArray(rows,columns){ //создаёт двумерный массив
	var arr = new Array();
	for(var i=0; i<rows; i++){
		arr[i] = new Array();

		for(var j=0; j<columns; j++){
			arr[i][j] = getRandomInt(0, 230);
		}
	}
	return arr;
}

var Matrix = CreateAnArray(8,8);
Matrix.forEach(columns => columns.sort(Increase));//сортирует массив по colums

var elemOne = document.querySelector('#elemOne');//присваем селектор
createTable(elemOne, 5, 7);

function createTable(parent, rows, columns){ //вывод массива на странницу
	var table = document.createElement('table');
	for (var i = 0; i < rows; i++) {
		var tr = document.createElement('tr');
		for(var j = 0; j < columns; j++){
			var td = document.createElement('td');
			td.innerHTML= Matrix[j][i]; 
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
}
}
