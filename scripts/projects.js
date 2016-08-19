$(function() {
	var itemElement;
	
	$.get("https://api.github.com/orgs/coders-for-corbyn/repos", function(data) {
		console.log(data);
		populate(data);
		$("#repositories-loader").hide();
		$("#repositories-list").show();
	});
	
	function populate(data) {
		itemElement = $("#repositories-list .list-group a.list-group-item:first").remove().clone();
		
		$(data).each(function() {
			if (this.name == "coders-for-corbyn.github.io")
				return true;
			
			createItem(this);
		});
	}
	
	function createItem(itemData) {
		var item = itemElement.clone();
		$(item).attr("href", itemData.html_url);
		$(".list-group-item-heading", item).html(itemData.name);
		$(".list-group-item-text", item).html(itemData.description);
		$("#repositories-list .list-group").append(item);
	}
});