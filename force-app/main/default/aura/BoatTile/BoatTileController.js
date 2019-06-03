({
	onBoatClick : function(component, event, helper) {
		var boatSelectEvent = component.getEvent("boatSelect");
		var boat = component.get("v.boat");
		boatSelectEvent.setParams({
            "boatId": boat.Id
        });
        boatSelectEvent.fire();

        var boatSelectedEvent = $A.get("e.c:BoatSelected");
        boatSelectedEvent.setParams({
        	"boat": boat
        });
        console.log("boatSelectedEvent will fire");
        boatSelectedEvent.fire();

        var plotMapMarker = $A.get("e.c:PlotMapMarker");
        plotMapMarker.setParams({
            "sObjectId" : boat.Id,
            "label" : boat.Name,
            "lat" : boat.Geolocation__Latitude__s,
            "long" : boat.Geolocation__Longitude__s
        });
        plotMapMarker.fire();
	}
})