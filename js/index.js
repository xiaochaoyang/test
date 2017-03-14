var ispoll = true;
var index = 0;
function rotate(currentIndex){
	if(ispoll){
		var pictures = $("#tab_body li");
		var indicater = $("#tab_head .indicater");
		for (var i=0;i<pictures.length;i++) {
			var li = $('#pic'+i);
			if(i==currentIndex){
				li.animate({opacity:1},1000);
				indicater.animate({left:String(80*i)+'px'},1000);
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
    selectTab();
});
function selectTab(){
	var tabs = $('#tab_head li');
	tabs.mouseover(function(){
		for (var i=0;i<tabs.length;i++) {
			if(tabs[i]==this){
				index = i;
				rotate(index);
				ispoll = false;
			}
		}
	}).parent().mouseleave(function(){
		ispoll = true;
	})
}
