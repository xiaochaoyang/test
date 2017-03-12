$(document).ready(function(){
	switchtabs();
})
var isPoll = true;
function switchtabs (){
	var indicater = $("#indicater");
	var tabs = $(".navigation li");
	tabs.mouseover(function(){
		for(var i=0;i<tabs.length;i++){
			if(tabs[i]==this){
				indicater.animate({left:String(i*120)+'px'},'fast');
			}
		}
	})
	tabs.parent().mouseleave(function(){
		indicater.animate({left:0+'px'},'fast');
	})
}
