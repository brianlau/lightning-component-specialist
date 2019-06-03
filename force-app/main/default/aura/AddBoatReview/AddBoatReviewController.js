({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},
	onSave : function(component, event, helper) {
		var boat = component.get('v.boat');
		component.set('v.boatReview.Boat__c', boat.Id);
		component.find("service").saveRecord($A.getCallback(function(saveResult) {
            // NOTE: If you want a specific behavior(an action or UI behavior) when this action is successful 
            // then handle that in a callback (generic logic when record is changed should be handled in recordUpdated event handler)
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
               var showToast = $A.get("e.force:showToast"); 
               if(showToast) {
	               showToast.setParams({ 
	               'title' : 'Save Successful!', 
	               'message' : 'Boat Review successfully saved.' 
	               }); 
	               showToast.fire(); 
	            } else {
	            	alert('Boat Review successfully saved.');
	            }
	            var boatReviewAdded = component.getEvent("boatReviewAdded");
		        boatReviewAdded.fire();
	            helper.onInit(component, event, helper);
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
	},
	onRecordUpdated : function(component, event, helper) {
		// var changeType = event.getParams().changeType;

	 //    if (changeType === "ERROR") { /* handle error; do this first! */ }
	 //    else if (changeType === "LOADED") { /* handle record load */ }
	 //    else if (changeType === "REMOVED") { /* handle record removal */ }
	 //    else if (changeType === "CHANGED") { 
	 //       handle record change; reloadRecord will cause you to lose your current record, including any changes you’ve made  
	 //      component.find("service").reloadRecord();
	 //      var showToast = $A.get("e.force:showToast"); 
	 //        if(showToast) {
	 //            showToast.setParams({ 
	 //            'title' : 'Save Successful!', 
	 //            'message' : 'Boat Review successfully updated.' 
	 //            }); 
	 //            showToast.fire(); 
	 //        } else {
	 //        	alert('Boat Review successfully updated.');
	 //        }
	 //  	}
	}
})