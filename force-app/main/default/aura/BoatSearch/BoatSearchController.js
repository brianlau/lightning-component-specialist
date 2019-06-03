({
	onFormSubmit : function(component, event, helper) {
		var formData = event.getParam("formData");
		var boatTypeId = formData.boatTypeId;
		console.log("captured form Submit Id", boatTypeId);
		var boatSearchComponent = component.find("boatSearchResults");
		boatSearchComponent.search(boatTypeId);
	}
})