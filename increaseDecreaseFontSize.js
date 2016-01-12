var unJsPorDia=(function(window,undefined){
	function increaseFontSize(idContainer){
		idContainer||(idContainer='body');		    	    
		container=document.querySelector(idContainer);
 		realSize=document.defaultView.getComputedStyle(container,null).fontSize;
		unitOfMeasure=realSize.match(/(pt|em|px|%)/ig)[0];
		realSize=parseInt(realSize.replace(/[^\d]/,""));
		newSize=realSize+5;
		container.style.fontSize=newSize+unitOfMeasure;
	}
	function decreaseFontSize(idContainer){
		idContainer||(idContainer='body');		    	    
		container=document.querySelector(idContainer);
 		realSize=document.defaultView.getComputedStyle(container,null).fontSize;
		unitOfMeasure=realSize.match(/(pt|em|px|%)/ig)[0];
		realSize=parseInt(realSize.replace(/[^\d]/,""));
		newSize=realSize-5;
		newSize=(newSize<=0)?1:newSize;
		container.style.fontSize=newSize+unitOfMeasure;
	}
	return{
		"increaseFontSize":increaseFontSize,
		"decreaseFontSize":decreaseFontSize
  };
})(window);
window.addEventListener("load",function(){
	var increase=document.getElementById('increase');
	var decrease=document.getElementById('decrease');
	increase.addEventListener("click",function(){
		unJsPorDia.increaseFontSize("#content");
	});
	decrease.addEventListener("click",function(){
		unJsPorDia.decreaseFontSize("#content");
	});
});


