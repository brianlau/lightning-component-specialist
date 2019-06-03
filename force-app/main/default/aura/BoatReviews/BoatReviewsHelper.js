({
  onInit : function(component, event, helper) {
    var action = component.get("c.getAll");
        var boat = component.get("v.boat");
        console.log("boat Reviews boat", boat);
        action.setParams({
            "boatId": boat.Id
        });
    action.setCallback(this, function(response) {
      var state = response.getState();
      if(component.isValid() && state === 'SUCCESS') {
                console.log("response", response.getReturnValue());
                component.set("v.boatReviews", response.getReturnValue());
            } else {
                console.log("Failed with state", state);
            }
        });
        $A.enqueueAction(action);
  }
})