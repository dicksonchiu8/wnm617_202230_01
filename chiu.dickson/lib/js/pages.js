const HomePage = async() => {
    let animals = await query({
        type:'dogs_by_user_id',
        params:[sessionStorage.userId]
    })
    
    console.log(animals);
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