({
	doSearch : function(component, event, helper) {
		var params = event.getParam('arguments');
		console.log("searchParams", params.boatTypeId);
		component.set("v.boatTypeId", params.boatTypeId);
		helper.onSearch(component, event);
	},
	onBoatSelect : function(component, event, helper) {
		var selectedBoatId = event.getParam("boatId");
		console.log("selectedBoatId", selectedBoatId);
		component.set("v.selectedBoatId", selectedBoatId);
	}
})