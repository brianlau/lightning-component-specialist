({
    doInit: function(component, event, helper) {
        var action = component.get("c.getBoatTypes");
        var renderNewButton = $A.get("e.force:createRecord");
        console.log("renderNewButton", renderNewButton);
        if(renderNewButton) {
        	component.set("v.renderNew", true);
        } else {
            component.set("v.renderNew", false);
        }
        action.setCallback(this, function(response) {
           var state = response.getState();
            if(component.isValid() && state === 'SUCCESS') {
                console.log("response", response.getReturnValue());
                component.set("v.boatTypes", response.getReturnValue());
            } else {
                console.log("Failed with state", state);
            }
        });
        $A.enqueueAction(action);
    },
    createNewBoat: function(component, event, helper) {
        var createBoatEvent = $A.get("e.force:createRecord");
        if(createBoatEvent) {
            var typeName = component.find("selectedType").get("v.value");
            createBoatEvent.setParams({
                "entityApiName": "Boat__c",
                "defaultFieldValues": {
                    "BoatType__c": typeName
                }
            });
            createBoatEvent.fire();
        }
    },
    onFormSubmit: function(component, event, helper) {
        var boatTypeId = component.get("v.selectedType");
        console.log('onFormSubmit boatTypeId', boatTypeId);
        var action = component.getEvent("formsubmit");
        action.setParams({
            "formData" : {
                "boatTypeId": boatTypeId
            }
        });
        action.fire();
    },
    handleChange: function(component, event, helper) {
        var selectType = component.find("boatTypes").get("v.value");
        console.log("selectedType", selectType);
        component.set("v.selectedType", selectType);
    }
})