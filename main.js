
// WORK IN PROGRESS!
// function distance (start, end, decimals) {
//         var earthRadius = 6371000; // km
//         var lat1 = parseFloat(start[0]);
//         var lat2 = parseFloat(end[0]);
//         var lon1 = parseFloat(start[1]);
//         var lon2 = parseFloat(end[1]);
//         decimals = decimals || 2;

//         var dLat = (lat2 - lat1).toRad();
//         var dLon = (lon2 - lon1).toRad();
//         lat1 = lat1.toRad();
//         lat2 = lat2.toRad();

//         var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//                         Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         var d = earthRadius * c;
//         return Math.round(d * Math.pow(10, decimals)) / Math.pow(10, decimals);
// }

function comparePath (path1, path2) {
	var longerPath = path1, shorterPath = path2;
	if (path2.length > path1.length) {
		longerPath = path2;
		shorterPath = path1;
	}

	for (var i = longerPath.length - 1; i >= 0; i--) {
	}
}

module.exports = {
	comparePath: comparePath
};