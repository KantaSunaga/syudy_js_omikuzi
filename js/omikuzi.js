(function(){
	'use strict';
	
	var btn = document.getElementById('btn');
	
	btn.addEventListener('click', function(){
		var fortune_number =  Math.floor(Math.random() * 3);
		
		switch (fortune_number) {
			case 0:
				var fortune = "吉";
				break;
			case 1:
				var fortune = "中吉";
				break;
			case 2:
				var fortune = "大吉";
		}		
		
		this.textContent = fortune ;
	});
	
	btn.addEventListener('mousedown', function(){
		this.className = 'pushed' ;
	});
	
	btn.addEventListener('mouseup', function(){
		this.className = '' ;
	});

})();