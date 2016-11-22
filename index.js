var drawing = document.getElementById('canvas');
if (drawing.getContext) {
	var ctx = drawing.getContext('2d');
	var light_green = 'rgba(0, 0, 255, 0.5)';
	var light_blue = 'rgba(0, 255, 0, 0.5)';
	var createLinear = function createLinear(ctx, a, b, width, height) {
		return ctx.createLinearGradient(a, b, a + width, b + height);
	};
	var gradient = createLinear(ctx, 100, 100, 150, 150);
	var gradCircle = ctx.createRadialGradient(95, 95, 50, 95, 95, 60);
	gradient.addColorStop(0, light_green);
	gradient.addColorStop(1, light_blue);
	gradCircle.addColorStop(0, light_green);
	gradCircle.addColorStop(1, light_blue);
	ctx.fillStyle = gradCircle;
	ctx.fillRect(20, 20, 150, 150);
	ctx.fillStyle = gradient;
	ctx.fillRect(100, 100, 150, 150);
	ctx.strokeStyle = light_blue;
	ctx.strokeRect(260, 20, 150, 150);
	ctx.strokeStyle = light_green;
	ctx.strokeRect(340, 100, 150, 150);
	ctx.clearRect(110, 110, 50, 50);
}

var drawing2 = document.getElementsByClassName('canvas2');
if (drawing2[0].getContext) {
	var daw = drawing2[0].getContext('2d');
	daw.strokeStyle = 'rgba(0, 0, 255, 0.5)';
	daw.shadowOffsetX = 5;
	daw.shadowOffsetY = 5;
	daw.shadowBlur = 4;
	daw.shadowColor = 'rgba(0, 0, 0, 0.5)';
	daw.beginPath();
	daw.arc(250, 250, 200, 0, 2 * Math.PI, false);
	daw.moveTo(440, 250);
	daw.arc(250, 250, 190, 0, 2 * Math.PI, false);
	daw.translate(250, 250);
	daw.moveTo(0, 0);
	daw.lineTo(0, -160);
	daw.moveTo(0, 0);
	daw.lineTo(-120, 0);
	daw.stroke();
	daw.font = 'bold 14px Arial';
	daw.textAlign = 'center';
	daw.textBaseline = 'middle';
	daw.fillText('12', 0, -180);
	daw.fillText('6', 0, 180);
	daw.fillText('9', -180, 0);
	daw.fillText('3', 180, 0);
	daw.rotate(180);
	console.log(daw);
	daw.stroke();
}
