var text = 'Variable globale !';

(function(){

	var text = 'variable locale !';
	alert(text);
	alert(window.text);
})();
