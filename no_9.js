function getApartmentByFacility(facility) {
    const apartementFacilities = [
        {
            cluster: "A",
            facilities: {mosque: true, park: false, gym: true}
        },
        {
            cluster: "B",
            facilities: {mosque: false, park: false, gym: true}
        },
        {
            cluster: "C",
            facilities: {mosque: true, park: true, gym: false}
        },
        {
            cluster: "D",
            facilities: {mosque: false, park: true, gym: false}
        },
        {
            cluster: "E",
            facilities: {mosque: false, park: true, gym: true}
        }
    ];
 
    const result = [];
    apartementFacilities.forEach((item) => {
        if (item.facilities[facility]){
            result.push(item.cluster)
        }
    })
  
console.log(result);

}
getApartmentByFacility("park");