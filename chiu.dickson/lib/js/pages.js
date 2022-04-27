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
    
    //console.log(animals);
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
    console.log(window.google)
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
            
            //Just Navigate to Profile Page
            //sessionStorage.animalId = valid_animals[i].animal_id;
            //$.mobile.navigate("#animal-profile-page");
            
            // Open Google InfoWindow
             map_el.data("infoWindow")
                .open(map_el.data("map"),m);
             map_el.data("infoWindow")
                .setContent('<a href="#" class="js-animal-jump noclick-children" data-id='+valid_animals[i].animal_id+'">'+valid_animals[i].name+'</a>');
            
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
    //Also call dropdown function in parts.js
    //dogBreedDropdown(animal.breed)
    
   let {result:locations} = await query({
      type:'locations_by_animal_id',
      params:[sessionStorage.animalId]
   })
   console.log(locations)

   let map_el = await makeMap("#dog-profile-page-recent .map");
   makeMarkers(map_el,locations);
    
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


const AddDogPage = () => {
    console.log("honk2")
}