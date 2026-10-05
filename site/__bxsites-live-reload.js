(function () {
	var lastVersion = null;
	setInterval( function () {
		fetch( "/__bxsites/version", { cache : "no-store" } )
			.then( function ( res ) { return res.text(); } )
			.then( function ( version ) {
				if ( lastVersion === null ) {
					lastVersion = version;
					return;
				}
				if ( version !== lastVersion ) {
					location.reload();
				}
			} )
			.catch( function () {} );
	}, 1000 );
})();
