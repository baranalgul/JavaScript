
var cities = {
    turkey: ["Istanbul", "Ankara", "Izmir"],
    usa: ["New York", "Los Angeles", "Chicago"]
};

var districts = {
    istanbul: ["Kartal", "Maltepe", "Besiktas"],
    ankara: ["Cankaya", "Sincan", "Kecioren"],
    izmir: ["Konak", "Bornova", "Dikili"],
    newyork: ["Manhattan", "Brooklyn", "Queens"],
    losangeles: ["Hollywood", "Santa Monica", "Beverly Hills"],
    chicago: ["Downtown", "Lincoln Park", "Wicker Park"]
};


function populateCities() {
    var country = document.getElementById("country").value;
    var citySelect = document.getElementById("city");
    
    citySelect.innerHTML = "<option value=''>Select City</option>";
    
    if (country !== "") {
        var countryCities = cities[country];
        
        for (var i = 0; i < countryCities.length; i++) {
            var option = document.createElement("option");
            option.text = countryCities[i];
            option.value = countryCities[i].toLowerCase();
            citySelect.appendChild(option);
        }
    }
}

function populateDistricts() {
    var city = document.getElementById("city").value;
    var districtSelect = document.getElementById("district");

    districtSelect.innerHTML = "<option value=''>Select District</option>";
    
    if (city !== "") {
        var cityDistricts = districts[city];
        
        for (var i = 0; i < cityDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = cityDistricts[i];
            option.value = cityDistricts[i].toLowerCase().replace(/\s+/g, '');
            districtSelect.appendChild(option);
        }
    }
}