({
	onBoatSelected : function(component, event, helper) {
		console.log("onBoatSelected firing");
		var selectedBoat = event.getParam("boat");
		console.log("boatSelectedEvent boat", selectedBoat);
		component.set("v.Id", selectedBoat.Id);
		component.find("service").reloadRecord();
	},
	onRecordUpdated : function(component, event, helper) {
		var boatReviewComp = component.find("boatReviewComp");
		console.log('boatReviewComp', boatReviewComp);
		if(boatReviewComp)
		boatReviewComp.refresh();
	},
	onBoatReviewAdded : function(component, event, helper) {
		var boatReviewComp = component.find("boatReviewComp");
		boatReviewComp.refresh();
		component.find("details").set("v.selectedTabId", 'boatreviewtab');
	}
})