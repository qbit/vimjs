function setOpt( inp ) {
	console.log( inp );
}

(function() {
	var inputs = document.getElementsByTagName( 'input' ), i, l;
	for ( i = 0, l = inputs.length; i < l; i++ ) {
		if ( localStorage[inputs[i].name] ) {
			inputs[i].value = localStorage[inputs[i].name];
		}

		inputs[i].onblur = function() {
			localStorage[this.name] = this.value;
		}
	}
})()
