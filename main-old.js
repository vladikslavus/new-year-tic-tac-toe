var area  = document.getElementById('area'),
	boxes = document.getElementsByClassName('box'),
	lines = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			],
	game_over = line_closed = false;

area.addEventListener('click', function(event) {
	var box = event.target;
	if (box.innerHTML == '') {
		box.innerHTML = 'X';
		box.style.color = 'green';
		check();		
   		if(game_over==false) {
   			fill();
   			check();
   	    }
    }    
});

function fill() {
	// проходимся по массиву линий и, если в первой попавшейся линии есть два икса, 
	// заполняем пустой бокс нулём и прерываем цикл		
	for (var i = 0; i < lines.length; i++) {
		// console.log('Линии: ' + boxes[lines[i][0]].innerHTML + ' - ' + boxes[lines[i][1]].innerHTML + ' - ' + boxes[lines[i][2]].innerHTML);
		if (boxes[lines[i][0]].innerHTML === 'X' && boxes[lines[i][1]].innerHTML === 'X' && boxes[lines[i][2]].innerHTML === '') {
				boxes[lines[i][2]].innerHTML = '0';
				boxes[lines[i][2]].style.color = 'brown';
				line_closed = true;
				// console.log('XX- ' + boxes[lines[i][2]].innerHTML);
				break;
		} 
		if (boxes[lines[i][1]].innerHTML === 'X' && boxes[lines[i][2]].innerHTML === 'X' && boxes[lines[i][0]].innerHTML === '') {
				boxes[lines[i][0]].innerHTML = '0';
				boxes[lines[i][0]].style.color = 'brown';
				line_closed = true;
				// console.log('-XX ' + boxes[lines[i][0]].innerHTML);
				break;
		} 
		if (boxes[lines[i][0]].innerHTML === 'X' && boxes[lines[i][2]].innerHTML === 'X' && boxes[lines[i][1]].innerHTML === '') {
				boxes[lines[i][1]].innerHTML = '0';
				boxes[lines[i][1]].style.color = 'brown';
				line_closed = true;
				// console.log('X-X ' + boxes[lines[i][1]].innerHTML);
				break;
		}
	}
	var empty_boxes = return_empty_boxes();
	if(line_closed===false) {		
		var rand = empty_boxes[Math.floor(Math.random() * empty_boxes.length)];
		boxes[rand].innerHTML = '0';
		boxes[rand].style.color = 'brown';
	}
	// console.log('Оставшиеся пустые боксы (' + return_empty_boxes().length + '):' + return_empty_boxes());
}

function return_empty_boxes() {
	var empty_boxes = [];
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].innerHTML == '') empty_boxes.push(i);		 
	}	
	return empty_boxes;	
}

function check() {		
	for (var i = 0; i < lines.length; i++) {
		if (boxes[lines[i][0]].innerHTML === 'X' && boxes[lines[i][1]].innerHTML === 'X' && boxes[lines[i][2]].innerHTML === 'X') {
			alert ('Победили крестики!');
			game_over = true;
			location.reload();
		} else if (boxes[lines[i][0]].innerHTML === '0' && boxes[lines[i][1]].innerHTML === '0' && boxes[lines[i][2]].innerHTML === '0') {
			alert ('Победили нолики!');
			game_over = true;
			location.reload();
		}	
	}	
	if (return_empty_boxes().length===0 && game_over===false) {
		alert ('Ничья!');
		game_over = true;
		location.reload();
	}	
}