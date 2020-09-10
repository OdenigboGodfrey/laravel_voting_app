// IE9 fix
if(!window.console) {
	var console = {
		log : function(){},
		warn : function(){},
		error : function(){},
		time : function(){},
		timeEnd : function(){}
	}
}