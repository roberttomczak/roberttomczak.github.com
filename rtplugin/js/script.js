$(document).ready(function(){

	$("#example").jqval({
		text:'HI',
		regexp: /[A-Z]+/
	});
	$("#example1").jqval({
		email:true
	});
	$("#example2").jqval({
		passcomplex:true
	});
	$("#example3").jqval({
		zipcode:true
	});
});