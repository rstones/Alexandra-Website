var aocPagingNS = (function() {

	var ns = {};
	
	/*
		Converts author string from Google Scholar format to nicer looking format
		by removing semi-colons between authors and swapping order of surnames and initals.
	*/
	ns.formatAuthorsString = function(authorsOrig) {
		var authorsArray = authorsOrig.replace(/;/g, "").split(" ");
		var result = [];
		$.each(authorsArray, function(index, value) {
			if (index % 2 === 0) {
				result[index+1] = value;
			} else {
				result[index-1] = value;
			}
		});
		return $.trim(result.join(" ")).replace(/,$/, "");
	}

	/*
		Constructs 2D array required by DataTable from publications JSON object while also
		concatenating required fields to display reference in standard form.
	*/
	ns.constructDataTableArray = function(pubsJSON) {
		dataTableArray = []
		$.each(pubsJSON, function() {
			var authors = ns.formatAuthorsString(this.Authors);
			var entry = ["<b>" +  this.Title + "</b><br>"
								+ authors + "<br>"
								+ (this.Link ? ("<a href=\"" + this.Link + "\">") : "") + (this.Publication ? this.Publication : "")
								+ (this.Volume ? (", " + this.Volume) : "")
								+ (this.Number ? (", " + this.Number) : "")
								+ (this.Pages ? (", " + this.Pages) : "")
								+ " (" + this.Year + ")" + (this.Link ? "</a>" : "")
								,this.Year];
			dataTableArray.push(entry);
		});
		return dataTableArray;
	}

	/*
		Construct table to display publications data sorting by the hidden Year column
	*/
	ns.constructDataTable = function(data) {
		$('#pubs-table').dataTable({
			"aaData": data,
			"aoColumns": [
						{"sTitle":"Publications"},
						{"sTitle":"Year", "bVisible": false}
						],
			"aaSorting": [[1,'desc']]
		});
	}

	return ns;
})();

/*
	Script run after page load
*/
$(document).ready(function() {
	//AJAX call to retrieve publications data from server
	// this is the file path for the live file "scripts/publications.json"
	$.getJSON("scripts/publications.json", function(data) {
		aocPagingNS.constructDataTable(aocPagingNS.constructDataTableArray(data));
	});
});
