window.onload=function(){
	//window.setTimeout(function(){
		var sqimgs = document.querySelectorAll('.square-photo');
		for(i=0; i < sqimgs.length; i++){
		//console.log(sqimgs);
		//Array.prototype.forEach.call(sqimgs, function(sqimg){
			var width = sqimgs[i].clientWidth;
			console.log(width);
			sqimgs[i].style.height = width + "px";
			sqimgs[i].style.visibility = "visible";
		}
	//}, 2000);
};