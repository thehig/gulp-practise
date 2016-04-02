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
		}
	}
	// console.log("Exporting config");	
	return config;
}