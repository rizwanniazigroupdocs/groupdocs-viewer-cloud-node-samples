"use strict";
class Viewer_Node_Get_All_Supported_Formats {
	static Run() {
		// retrieve supported file-formats
		viewerApi.getSupportedFileFormats()
			.then(function (result) {
				console.log("Supported file-formats:");
				result.formats.forEach(function (format) {
					console.log(format.fileFormat + " (" + format.extension + ")");
				});
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_All_Supported_Formats;