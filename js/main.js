// JavaScript Document
var gs;
var matrix = new Array(16);

function restart() {
	gs = 1;
}　　

document.onkeydown = function (e) {
	var keyNum = window.event ? e.keyCode : e.which;
	if (keyNum === 37) {
		moveLeft();
	}
	if (keyNum === 38) {
		moveUp();
	}
	if (keyNum === 39) {
		moveRight();
	}
	if (keyNum === 40) {
		moveDown();
	}
};

function init() {
	gs = 0;
	for (var i = 1; i < 17; i++) {
		matrix[i - 1] = 0;
	}
	randomInsert();
}

function randomInsert() {
	var spaceId = getSpaceId();
	var insN = 0;
	if(spaceId.length>=3){
		insN = randomIntS1EnNIn(5);
	}else	{
		insN = randomIntS1EnNIn(3);
	}
	insN++;
	for(;insN>spaceId.length;)	{
		insN--;
	}
	var insId = new Array(insN);
	for(var i=0;i<insN;i++)	{
		insId[i]=spaceId[randomIntS1EnNIn(spaceId.length)-1];
	}
	for(i=0;i<insId.length;i++){
		updMatrix(arrayIdtoDOMId(insId[i]),randomIntS1EnNIn(2));
	}
}

function getSpaceId()	{
	var insM = checkArray();
	var insML = insM[0];
	var spaceId = new Array(insML);
	var repInd1 = 0;
	for (var i = 1; i < 17; i++) {
		if (insM === 0) {
			spaceId[repInd1] = i - 1;
			repInd1++;
		}
	}
	return spaceId;
}

function checkArray() {
	var insM = new Array(17);
	var spaceCount = 0;
	for (var i = 1; i < 17; i++) {
		if (matrix[i] === 0) {
			insM[i] = 0;
			spaceCount++;
		} else {
			insM[i] = 1;
		}
	}
	insM[0] = spaceCount;
	return insM;
}

function updMatrix(id, num) {
	matrix[DOMIdtoArrayId(id)] = num;
	document.getElementById("imgArray" + id).src = 'img-svg/PWR' + num + '.svg';
}

function randomIntS1EnNIn(max)	{
	return Math.floor(Math.random()*max);
}

function arrayIdtoDOMId(mtxid)	{
	var id = mtxid+1;
	return 10*Math.floor(id/4)+id%4;
}

function DOMIdtoArrayId(DOMId)	{
	return Math.floor(DOMId/10)*4+DOMId%10-1;
}