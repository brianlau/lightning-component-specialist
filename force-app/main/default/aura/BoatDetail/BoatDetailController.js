({
	doInit : function(component, event, helper) {
		var navigate = $A.get("e.force:navigateToSObject");
		if(navigate) {
			component.get("v.canNavigate", true);
		} else {
			component.get("v.canNavigate", false);
		}
	},
	onFullDetails : function(component, event, helper) {
		var navigate = $A.get("e.force:navigateToSObject");
		navigate.setParams({
			"recordId": component.get("v.boat.Id")
		});
		navigate.fire();
	}
})