"use strict";
class Viewer_Node_Render_PrintArea_Only {
	static Run() {
		var fileName = "with-overflowed-text.xlsx";
		var folderName = "viewerdocs";
		var cellsOptions = new groupdocs_viewer_cloud_1.CellsOptions();
		cellsOptions.RenderPrintAreaOnly = true;
		cellsOptions.RenderGridLines = true;
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.cellsOptions = cellsOptions;
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePagesCacheRequest(fileName);
		request.folder = folderName;
		request.htmlOptions = htmlOptions;
		viewerApi.htmlCreatePagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Render_PrintArea_Only;