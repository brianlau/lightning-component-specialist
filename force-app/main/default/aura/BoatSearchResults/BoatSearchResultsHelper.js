({
	onSearch : function(component, event) {
        var boatType = component.get("v.boatTypeId");
        console.log("boatType", boatType);
        var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId": boatType
        });
        action.setCallback(this, function(response){
           var state = response.getState();
            if(component.isValid() && state === "SUCCESS") {
                component.set("v.boats", response.getReturnValue());
            } else {
                console.log("onSearch Failure", state);
            }
        });
        $A.enqueueAction(action);
	}
})