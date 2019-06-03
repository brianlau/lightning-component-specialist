public class BoatSearchResults {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        return [Select Id, Name from BoatType__c];
    }
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        List<Boat__c> searchBoats = new List<Boat__c>();
        if(String.isNotBlank(boatTypeId)) {
            searchBoats = [Select Id, BoatType__c, Picture__c, Name, Contact__r.Name,
                          		  Geolocation__Latitude__s, Geolocation__Longitude__s
                          from Boat__c
                          where BoatType__c =: boatTypeId];
        } else {
            searchBoats = [Select Id, BoatType__c, Picture__c, Name, Contact__r.Name,
                          		  Geolocation__Latitude__s, Geolocation__Longitude__s
                          from Boat__c];
        }
        return searchBoats;
    }
}