var shooter = document.getElementById('shooter');
var ctx = shooter.getContext('2d');

ctx.beginPath();
ctx.arc(65,65,40,1.7*Math.PI,1.3*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(65,65,30,0,2*Math.PI);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth = 7;
ctx.moveTo(65, 30);
ctx.lineTo(65, 0);
ctx.stroke();


function canvasAsteroid(id){
	var asteroid = document.getElementById(id);
	var ctx = asteroid.getContext('2d');

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.moveTo(0, 0);
	ctx.lineTo(40, 40);
	ctx.moveTo(0, 40);
	ctx.lineTo(40, 0);
	ctx.moveTo(0, 20);
	ctx.lineTo(40, 20);
	ctx.moveTo(20, 0);
	ctx.lineTo(20, 40);
	ctx.strokeStyle = '#89beff';
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = "#e8f706";
	ctx.arc(20,20,4,0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
}
canvasAsteroid('asteroid');

function miniAsteroid(id){
	canvasAsteroid('asteroid');
	var asteroid = document.getElementById(id);
	var ctx = asteroid.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(20, 0);
	ctx.lineTo(0, 10);
	ctx.lineTo(10, 15);
	ctx.lineTo(0, 15);
	ctx.lineTo(0, 25);
	ctx.lineTo(20, 30);
	ctx.lineTo(28, 25);
	ctx.lineTo(30, 15);
	ctx.lineTo(25, 10);
	ctx.lineTo(20, 0);
	ctx.strokeStyle = "#FFF";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

function mediumAsteroid(id){
	var asteroid = document.getElementById(id);
	var ctx = asteroid.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(15, 0);
	ctx.lineTo(0, 20);
	ctx.lineTo(10, 23);
	ctx.lineTo(2, 30);
	ctx.lineTo(15, 50);
	ctx.lineTo(25, 35);
	ctx.lineTo(30, 45);
	ctx.lineTo(40, 45);
	ctx.lineTo(49, 30);
	ctx.lineTo(49, 25);
	ctx.lineTo(35, 8);
	ctx.lineTo(15, 0);

	ctx.strokeStyle = "#FFF";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}
function largeAsteroid(id){
	var asteroid = document.getElementById(id);
	var ctx = asteroid.getContext('2d');

	ctx.moveTo(25, 1);
	ctx.lineTo(1, 15);
	ctx.lineTo(1, 60);
	ctx.lineTo(25, 69);
	ctx.lineTo(50, 69);
	ctx.lineTo(69, 50);
	ctx.lineTo(55, 35);
	ctx.lineTo(65, 20);
	ctx.lineTo(50, 1);
	ctx.lineTo(35, 15);
	ctx.lineTo(25, 1);

	ctx.strokeStyle = "#FFF";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

var starRotateDeg = 0;
var asteroidRotateDeg = 0;

function rotator(){
	asteroidRotateDeg += 3;
	$('.comet').css('transform', "rotate("+asteroidRotateDeg+"deg)");
	$('.asteroid').css('transform', "rotate("+asteroidRotateDeg+"deg)");
	if(asteroidRotateDeg > 360){
		asteroidRotateDeg = 0;
	}
}

setInterval(rotator, 50);

var shooter = $('#shooter');
var center_x = 0;
var center_y = 0;
var degree = 0;
function shooterRotator(){
	if(shooter.length > 0){
	    var offset = shooter.offset();
	    function mouse(ev){
	        center_x = (offset.left) + (shooter.width()/2);
	        center_y = (offset.top) + (shooter.height()/2);
	        var mouse_x = ev.pageX;
	        var mouse_y = ev.pageY;
	        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);

	        degree = (radians * (180 / Math.PI) * -1) + 180; 
	        shooter.css('-moz-transform', 'rotate('+degree +'deg)');
	        shooter.css('-webkit-transform', 'rotate('+degree+'deg)');
	        shooter.css('-o-transform', 'rotate('+degree+'deg)');
	        shooter.css('-ms-transform', 'rotate('+degree+'deg)');
	    }
	    $(document).mousemove(mouse);
	}
}
shooterRotator();

var bullet_x = 0;
var bullet_y = 0;
var bulletDegree = 0;
var bulletDegree2 = 0;
var bulletDegree3 = 0;
var bulletDegree4 = 0;
var shootInterval = null;
var shoot2Interval = null;
var shoot3Interval = null;
var shoot4Interval = null;

function addBullet(){
	$(document).mousedown(function(){
		if($('.bullets div').length == 0 && start == true){
			$('.bullets').append('<div class="bullet"></div>');
		
			var radians = Math.PI * bulletDegree / 180;
			bulletDegree = degree+90;
			
			bulletShoot();
			shootInterval = setInterval(bulletShoot, 15);
		}else if($('.bullet3').length == 1 && $('.bullet4').length == 0){
			$('.bullets').append('<div class="bullet4"></div>');
		
			var radians = Math.PI * bulletDegree4 / 180;
			bulletDegree4 = degree+90;
			
			bulletShoot4();
			shoot4Interval = setInterval(bulletShoot4, 15);
		}
		else if($('.bullet2').length == 1 && $('.bullet4').length == 0){
			$('.bullets').append('<div class="bullet3"></div>');
		
			var radians = Math.PI * bulletDegree3 / 180;
			bulletDegree3 = degree+90;
			
			bulletShoot3();
			shoot3Interval = setInterval(bulletShoot3, 15);
		}else if($('.bullet').length == 1 && $('.bullet3').length == 0 && $('.bullet4').length == 0 ){
			$('.bullets').append('<div class="bullet2"></div>');
		
			var radians = Math.PI * bulletDegree2 / 180;
			bulletDegree2 = degree+90;
			
			bulletShoot2();
			shoot2Interval = setInterval(bulletShoot2, 15);
		}
	});
}
addBullet();

var radius = 70;
var radius2 = 70;
var radius3 = 70;
var radius4 = 70;
var bgWidth = $('.bg').width() / 2;
var bgHeight = $('.bg').height() / 2;
var bgDiagonal = Math.sqrt(Math.pow(bgWidth,2) + Math.pow(bgHeight, 2));

function bulletShoot(){
	var radians = Math.PI * bulletDegree / 180;

	radius += 5;
	bullet_x = center_x-radius*Math.cos(radians);
	bullet_y = 78-radius * Math.sin(radians);
	$('.bullet').css({left: bullet_x+'px',top: bullet_y+'px'});
	if(radius > bgDiagonal){
		radius = 70;
		$('.bullet').remove();
		clearInterval(shootInterval);
	}
	catcherCombo('.bullet');
	
}

function bulletShoot2(){
	var radians = Math.PI * bulletDegree2 / 180;

	radius2 += 5;
	bullet_x = center_x-radius2*Math.cos(radians);
	bullet_y = 78-radius2 * Math.sin(radians);
	$('.bullet2').css({left: bullet_x+'px',top: bullet_y+'px'});
	if(radius2 > bgDiagonal){
		radius2 = 70;
		$('.bullet2').remove();
		clearInterval(shoot2Interval);
	}
	catcherCombo('.bullet2');
	
}
function bulletShoot3(){
	var radians = Math.PI * bulletDegree3 / 180;

	radius3 += 5;
	bullet_x = center_x-radius3*Math.cos(radians);
	bullet_y = 78-radius3 * Math.sin(radians);
	$('.bullet3').css({left: bullet_x+'px',top: bullet_y+'px'});
	if(radius3 > bgDiagonal){
		radius3 = 70;
		$('.bullet3').remove();
		clearInterval(shoot3Interval);
	}
	catcherCombo('.bullet3');
}
function bulletShoot4(){
	var radians = Math.PI * bulletDegree4 / 180;

	radius4 += 5;
	bullet_x = center_x-radius4*Math.cos(radians);
	bullet_y = 78-radius4 * Math.sin(radians);
	$('.bullet4').css({left: bullet_x+'px',top: bullet_y+'px'});
	if(radius4 > bgDiagonal){
		radius4 = 70;
		$('.bullet4').remove();
		clearInterval(shoot4Interval);
	}
	catcherCombo('.bullet4');
}
var scoreboard = 0;
var round = 1;
var counter = 0;
$('body').mousedown(function(e){ e.preventDefault(); });
$('body').css({'cursor': 'url(img/sight.png), default'});
function catcher(bullet, streoidType){
	for(var i = 0; i < $(streoidType).length; i++){
		var asteroid = $(streoidType).eq(i);
		var asteroidWidth = asteroid.width();
		var asteroidOffset = asteroid.offset();
		var bulletOffset = $(bullet).offset();

		if($(bullet).length != 0){
			if(bulletOffset.left >= asteroidOffset.left && bulletOffset.left <= asteroidOffset.left + asteroidWidth && bulletOffset.top+9 >= asteroidOffset.top && bulletOffset.top <= asteroidOffset.top+asteroidWidth){
				
				if(streoidType == '.large'){
					var id = asteroid.attr('id');
					asteroidSplitter(bullet, streoidType,id);
					scoreboard++;
				}else if(streoidType == '.medium'){
					var id = asteroid.attr('id');
					asteroidSplitter(bullet, streoidType, id);
					scoreboard++;
					
				}else if(streoidType == '.mini'){
					bullet == '.bullet4' ? '':$(bullet).hide(); 
					$('#'+asteroid.attr('id')).remove();
					scoreboard++;
				}
				$('.scoreboard div').html(scoreboard);
				if($('.comet').length == 0){
					round++;
					$('.round span').html(round);
					$('.round').fadeIn();
					$('.round').fadeOut(1500);

					startGame();
				}
			}
		}
	}
}

function catcherCombo(bullet){
	if($('.mini').length != 0)
		catcher(bullet, '.mini');
	if($('.medium').length != 0)
		catcher(bullet, '.medium');
	if($('.large').length != 0)
		catcher(bullet, '.large');
}
function asteroidSplitter(bullet,asteroidType, id){
	
	if(asteroidType == '.large'){
		var offset_x = $('#'+id).offset().left;
		var offset_y = $('#'+id).offset().top;
		counter++;
		$('.bg').append($('<canvas id="medium_asteroid'+counter+'" class="comet medium" width="50" height="50" style="left: '+(offset_x+20)+'px; top: '+(offset_y-20)+'px;"></canvas>'));
		mediumAsteroid('medium_asteroid'+counter);
		counter++;
		$('.bg').append($('<canvas id="medium_asteroid'+counter+'" class="comet medium" width="50" height="50" style="left: '+(offset_x-20)+'px; top: '+(offset_y+20)+'px;"></canvas>'))
		mediumAsteroid('medium_asteroid'+counter);
		$('#'+id).remove();
		bullet == '.bullet4' ? '':$(bullet).hide(); 
	}else if(asteroidType == '.medium'){
		var offset_x = $('#'+id).offset().left;
		var offset_y = $('#'+id).offset().top;
		counter++;
		$('.bg').append($('<canvas id="mini_asteroid'+counter+'" class="comet mini" width="30" height="30" style="left: '+(offset_x+20)+'px; top: '+(offset_y-20)+'px;"></canvas>'));
		miniAsteroid('mini_asteroid'+counter);
		counter++;
		$('.bg').append($('<canvas id="mini_asteroid'+counter+'" class="comet mini" width="30" height="30" style="left: '+(offset_x-20)+'px; top: '+(offset_y+20)+'px;"></canvas>'))
		miniAsteroid('mini_asteroid'+counter);
		
		$('#'+id).remove();
		bullet == '.bullet4' ? '':$(bullet).hide(); 
	}
	
}
var stop = true;
function asteroidMovement(){
	if(stop == true){
		return;
	}else{
		for(var i = 0; i < $('.comet').length; i++){
			var asteroid = $('.comet').eq(i);
			var asteroidOffset =  asteroid.offset();
			var shooterOffset = $('.bullet_controller').offset();
			
			if(asteroidOffset.left < bgWidth && asteroidOffset.top < bgHeight-50)
				asteroid.css({left: '+=1', top: '+=1'});
			else if(asteroidOffset.left > bgWidth && asteroidOffset.top < bgHeight-50)
				asteroid.css({left: '-=1', top: '+=1'});
			else if(asteroidOffset.left <= bgWidth && asteroidOffset.top >= bgHeight-50)
				asteroid.css({left: '+=1', top: '-=1'});
			else if(asteroidOffset.left >= bgWidth && asteroidOffset.top > bgHeight-50)
				asteroid.css({left: '-=1', top: '-=1'});
			
			if(asteroidOffset.left > shooterOffset.left && asteroidOffset.left < shooterOffset.left+100 && asteroidOffset.top+asteroid.height() > shooterOffset.top+30 && asteroidOffset.top < shooterOffset.top+90){
				stop = true;
				playAgain();
			}
		}
	}
}
var asteroidMovementInterval = setInterval(asteroidMovement, 50);

var direction = false;
function addMiniAsteroid(){
	var randHeight = Math.floor((Math.random() * bgHeight*2) + 0);
	if(direction == false){
		var maxWidth = bgWidth*2;
		var minWidth = bgWidth*1.5;
		var randLeft =  Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
		direction = true;
	}else{
		var randLeft =  Math.floor((Math.random() * bgWidth/2) + 0);
		direction = false;
	}
	counter++
	$('.bg').append($('<canvas id="mini_asteroid'+counter+'" class="comet mini" width="30" height="30" style="left: '+randLeft+'px; top: '+randHeight+'px;"></canvas>'))
	miniAsteroid('mini_asteroid'+counter);
}
function addMediumAsteroid(){
	var randLeft  = Math.floor((Math.random() * bgWidth*2) + 0);
	if(direction == false){
		var maxHeight = bgHeight*2;
		var minHeight = bgHeight*1.5;
		var randHeight = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
		direction = true;
	}else{
		var randHeight = Math.floor((Math.random() * bgHeight/2.5) + 0);
		direction = false;
	}
	Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
	counter++
	$('.bg').append($('<canvas id="medium_asteroid'+counter+'" class="comet medium" width="50" height="50" style="left: '+randLeft+'px; top: '+randHeight+'px;"></canvas>'))
	mediumAsteroid('medium_asteroid'+counter);
}
function addLargeAsteroid(){
	var randLeft  = Math.floor((Math.random() * bgWidth*2) + 0);
	if(direction == false){
		var maxHeight = bgHeight*2;
		var minHeight = bgHeight*1.5;
		var randHeight = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
		direction = true;
	}else{
		var randHeight = Math.floor((Math.random() * bgHeight/2.5) + 0);
		direction = false;
	}
	counter++
	$('.bg').append($('<canvas id="large_asteroid'+counter+'" class="comet large" width="70" height="70" style="left: '+randLeft+'px; top: '+randHeight+'px;"></canvas>'))
	largeAsteroid('large_asteroid'+counter);
}


var mini = 1;
var medium = 0;
var large = 0;
function startGame(){

	if(round % 10 == 0){
		large++;
		medium = 1;
		mini = 0;
	}else if(round % 5 == 0){
		medium++;
		mini = 1;
	}else{
		mini++;
	}
	
	for(var i = 0; i < mini;i++)
		addMiniAsteroid();
	
	for(var i = 0;i < medium;i++)
		addMediumAsteroid();

	for(var i = 0;i < large;i++)
		addLargeAsteroid();
}
addMiniAsteroid();

function playAgain(){
	$('.game_over').fadeIn(1000);
	$('.game_over span').html(scoreboard);
	$('.play_again').click(function(){
		$('.comet').remove();
		$('.game_over').fadeOut(700);
		$('.scoreboard div').html('0');
		$('.round span').html('1');
		round = 1;
		scoreboard = 0;
		counter = 0;
		mini = 1;
		medium = 0;
		large = 0;
		addMiniAsteroid();
		stop = false;
	});
}
var start = false;
$('.comet').hide();
$('#play').click(function (){
	$('.start_playing').fadeOut(700);
	$('.scoreboard').fadeIn(1000);
	$('.bullets').show();
	$('.comet').fadeIn(1000);
	$('.round').fadeIn();
	$('.round').fadeOut(1500);
	stop = false;
	start = true;
	scoreboard = 0;
});

$('#instructions').click(function(){
	$('.playing').hide();
	$('.info').fadeIn(1000);
	
	$('#back').click(function(){
		$('.info').hide();
		$('.playing').fadeIn(1000);
	});
});