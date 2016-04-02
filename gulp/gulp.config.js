module.exports = function() {
	var config = {
		base: {
			source: './src'
			,temp: './tmp'
			,distro: './dst'
			,maps: './dst/maps'
		}, 
		unit: {
			source: './tests/unit'
		}, 
		e2e: {
			source: './tests/e2e',
			servedir: './',
			servecfg: {
				port: 3000
				// livereload: true,
				,directoryListing: true
				// ,open: true				
			}
		}
	}
	// console.log("Exporting config");	
	return config;
}