var ispoll = true;
var index = 0;
function rotate(index){
	if(index>4){
		
	}
	if(isPoll){
		var pictures = $("#pictureRotate li");
		for (var i=0;i<pictures.length;i++) {
			var li = $('#pic'+i);
			if(i==index){
				li.animate({opacity:1},1000);
			}else{
				li.animate({opacity:0},1000);
			}
		}
	}
}
function pollPlay(){
  	index++;
	rotate(index%4);

}
$(document).ready(function(){
	setInterval('pollPlay()',5000);
   
});
