const RecentPage = async() => {
    let {result} = await query({
        type:'recent_animal_locations',
        params:[sessionStorage.userId]
    });
    
    //console.log(animals);
}

const HomePage = async() => {
    let animals = await query({
        type:'dogs_by_user_id',
        params:[sessionStorage.userId]
    })
    if(animals.result < 1){
        $("#no-dogs-text").removeClass("hidden");
    } else {
        $("#no-dogs-text").addClass("hidden");
    }
    console.log(animals)
    
    $("#home-page .dog-list").html(makeAnimalList(animals.result));
}

const UserProfilePage = async() => {
    let {result:users} = await query({
        type:'user_by_id',
        params:[sessionStorage.userId]
    })
    
    let [user] = users;
    
    console.log(user.result);
    $("#user-profile-page-info [data-role='main']").html(makeUserProfilePage(user));
    $("#user-profile-page-info h1").html(user.name.substring(0, user.name.indexOf(' '))+"'s Profile");
    
}

const UserProfilePageRecent = async() => {
    let {result:users} = await query({
        type:'user_by_id',
        params:[sessionStorage.userId]
    })
    
    let [user] = users;
    
    console.log(user.result);
    $("#user-profile-page-recent h1").html(user.name.substring(0, user.name.indexOf(' '))+"'s Profile");
    
}

const UserProfilePageRecentPins = async() => {
    
    await checkData(()=>window.google);
    //console.log(window.google)
    let {result} = await query({
        type:'recent_animal_locations',
        params:[sessionStorage.userId]
    });
    //console.log(result);    
    let valid_animals = result.reduce((r,o)=>{
       o.icon = o.img 
       if(o.lat && o.lng) r.push(o);
       return r;
    },[]);
    
    let map_el = await makeMap("#user-profile-page-recent .map");
    console.log(map_el.data())
    makeMarkers(map_el, valid_animals);
    
    map_el.data("markers").forEach((m,i)=>{
        console.log(m)
        m.addListener("click", function(e){
            console.log(valid_animals[i]);
            let animal = valid_animals[i];
            //Just Navigate to Profile Page
            //sessionStorage.animalId = valid_animals[i].animal_id;
            //$.mobile.navigate("#animal-profile-page");
            
            // Open Google InfoWindow
            // map_el.data("infoWindow")
            //    .open(map_el.data("map"),m);
            // map_el.data("infoWindow")
            //    .setContent('<a href="#" id="marker_profile_link" class="js-animal-jump noclick-children" data-id='+valid_animals[i].animal_id+'">'+valid_animals[i].name+'</a>');
                        
            $("#map-drawer-user")
            .addClass("active")
            .find(".modal-body")
            .html(makeAnimalPopupBody({...animal, id:animal.animal_id}))
        })
    })

}


const EditUserPage = async() => {
    let {result:users} = await query({
        type:'user_by_id',
        params:[sessionStorage.userId]
    })
    
    let [user] = users;
    
    console.log(user.result);
    //$("#edit-user-page [data-role='main']").html(makeEditUserPage(user));
    $("#user-fullname").val(user.name);
    userAgeDropdown(user.age);
    $("#user-about").text(user.description)
    
}

const UserEditPhotoPage = async () => {
   let {result:users} = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   })
   let [user] = users;

   $("#user-edit-photo-page .imagepicker").css({
      "background-image":`url(${user.img})`
   })
}

const DogProfilePage = async() => {
    let {result:animals} = await query({
        type:'dog_by_id',
        params:[sessionStorage.animalId]
    })
    let [animal] = animals;
    
    console.log(animal);
    
    $("#dog-profile-page-info [data-role='main']").html(makeDogProfilePage(animal));
    $("#dog-profile-page-info h1").html(animal.name+"'s Profile");
    //Also call dropdown function in parts.js
    //dogBreedDropdown(animal.breed)
    
    
}
const DogProfilePageRecent = async() => {
    let {result:animals} = await query({
        type:'dog_by_id',
        params:[sessionStorage.animalId]
    })
    let [animal] = animals;
    
    console.log(animal);
    
    $("#dog-profile-page-recent h1").html(animal.name+"'s Profile");
    document.getElementById('map-filter-select').innerHTML = "";
    //Also call dropdown function in parts.js
    //dogBreedDropdown(animal.breed)
    
    $("#location-start").val("-2");
   let {result:locations} = await query({
      type:'locations_by_animal_id',
      params:[sessionStorage.animalId]
   })
   console.log(locations)

    let map_el = await makeMap("#dog-profile-page-recent .map");
    makeMarkers(map_el,locations);
    map_el.data("markers").forEach((m,i)=>{
        console.log(m)
        m.addListener("click", function(e){
            let location = locations[i];
            
            console.log(location)
            $("#map-drawer-dog-recent")
            .addClass("active")
            .find(".modal-body")
            .html(makeLocationPopupBody({...location}))
        })
    })   
    
}

const EditDogPage = async() => {

    let {result:animals} = await query({
        type:'dog_by_id',
        params:[sessionStorage.animalId]
    })
    let [animal] = animals;
    
    console.log(animal);
    $("#edit-dog-fullname").val(animal.name);
    dogBreedDropdown(animal.breed);
    $("#edit-dog-description").text(animal.description)    
}

const AnimalEditPhotoPage = async () => {
   let {result:animals} = await query({
      type:'dog_by_id',
      params:[sessionStorage.animalId]
   })
   let [animal] = animals;

   $("#animal-edit-photo-page .imagepicker").css({
      "background-image":`url(${animal.img})`
   })
}

const AddDogLocation = async() => {
    let map_el = await makeMap("#add-dog-location-page .map-container");
    $("#location-description").val("");
    map_el.data("map").addListener("click", function(e){
        console.log(e)
        $("#location-lat").val(e.latLng.lat())
        $("#location-lng").val(e.latLng.lng())
        makeRegularMarkers(map_el,[e.latLng])
    })
}

const EditDogLocation = async() => {
    let map_el = await makeMap("#edit-location-page .map");
    let {result:locations} = await query({
        type:'location_by_id',
        params:[sessionStorage.locationId]
    })
    
    let [location] = locations;
    console.log(location);
    
    makeMarkers(map_el,locations);
    
    $("#location-lat").val(location.lat)
    $("#location-lng").val(location.lng)
    let coordinates = location.lat+','+location.lng;
    $("#location-coordinates").val(coordinates)
    $("#edit-location-description").text(location.description) 
    
}

const EditDogMapLocation = async () => {
    let map_el = await makeMap("#edit-dog-location-page .map-container");
    map_el.data("map").addListener("click", function(e){
        console.log(e)
        $("#edit-location-lat").val(e.latLng.lat())
        $("#edit-location-lng").val(e.latLng.lng())
        makeRegularMarkers(map_el,[e.latLng])
    })    
}

const MapPage = async() => {
    
    await checkData(()=>window.google);
    //console.log(window.google)
    let {result} = await query({
        type:'recent_animal_locations',
        params:[sessionStorage.userId]
    });
    //console.log(result);    
    let valid_animals = result.reduce((r,o)=>{
       o.icon = o.img 
       if(o.lat && o.lng) r.push(o);
       return r;
    },[]);
    document.getElementById('existing-dog-select').innerHTML = "";
    
    let map_el = await makeMap("#map-page .map-container");
    console.log(map_el.data())
    makeMarkers(map_el, valid_animals);
    
    map_el.data("markers").forEach((m,i)=>{
        console.log(m)
        m.addListener("click", function(e){
            console.log(valid_animals[i]);
            let animal = valid_animals[i];
            
            //Just Navigate to Profile Page
            //sessionStorage.animalId = valid_animals[i].animal_id;
            //$.mobile.navigate("#animal-profile-page");
            
            // Open Google InfoWindow
            // map_el.data("infoWindow")
            //    .open(map_el.data("map"),m);
            // map_el.data("infoWindow")
            //    .setContent('<a href="#" id="marker_profile_link" class="js-animal-jump noclick-children" data-id='+valid_animals[i].animal_id+'">'+valid_animals[i].name+'</a>');
            
            
            $("#map-drawer")
            .addClass("active")
            .find(".modal-body")
            .html(makeAnimalPopupBody({...animal, id:animal.animal_id}))
        })
    })
}

const checkFilter = async () => {
    let filter = $("#map-filter-select option:selected").val();
    console.log(filter)
    
    if(filter === "Most Recent"){
            let {result} = await query({
                type:'recent_animal_locations',
                params:[sessionStorage.userId]
            });
            //console.log(result);    
            let valid_animals = result.reduce((r,o)=>{
               o.icon = o.img 
               if(o.lat && o.lng) r.push(o);
               return r;
            },[]);
            
            let map_el = await makeMap("#map-page .map-container");
            console.log(map_el.data())
            makeMarkers(map_el, valid_animals);
            
            map_el.data("markers").forEach((m,i)=>{
                console.log(m)
                m.addListener("click", function(e){
                    console.log(valid_animals[i]);
                    let animal = valid_animals[i];
                    
                    $("#map-drawer")
                    .addClass("active")
                    .find(".modal-body")
                    .html(makeAnimalPopupBody({...animal, id:animal.animal_id}))
                })
            })        
    } else {
            let {result} = await query({
                type:'recent_animal_by_id',
                params:[sessionStorage.userId, filter]
            });
            //console.log(result);    
            let valid_animals = result.reduce((r,o)=>{
               o.icon = o.img 
               if(o.lat && o.lng) r.push(o);
               return r;
            },[]);
            
            let map_el = await makeMap("#map-page .map-container");
            console.log(map_el.data())
            makeMarkers(map_el, valid_animals);
            
            map_el.data("markers").forEach((m,i)=>{
                console.log(m)
                m.addListener("click", function(e){
                    console.log(valid_animals[i]);
                    let animal = valid_animals[i];
                    
                    $("#map-drawer")
                    .addClass("active")
                    .find(".modal-body")
                    .html(makeAnimalPopupBody({...animal, id:animal.animal_id}))
                })
            })          
        
    }
}


const AddDogPage = async () => {
    dogBreedDropdown("add");
    $("#dog-fullname").val("");
    $("#dog-breed-select option:selected").removeAttr("selected");
    $("#dog-description").val("");
    let imagePath = "../images/search-icon.png";
    $("#add-dog-photo-image").css("background-image", "url("+ imagePath +") no-repeat");
}


const AddExistingDog = () => {
}