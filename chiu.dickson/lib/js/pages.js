const HomePage = async() => {
    let animals = await query({
        type:'dogs_by_user_id',
        params:[sessionStorage.userId]
    })
    
    console.log(animals);
    $("#home-page .dog-list").html(makeAnimalList(animals.result));
}

const UserProfilePage = async() => {
    let user = await query({
        type:'user_by_id',
        params:[sessionStorage.userId]
    })
    
    //let [user] = users;
    
    console.log(user);
    $("").html(makeAnimalList(user.result)); 
    
}

const AnimalProfilePage = async() => {
    let animal = await query({
        type:'dog_by_id',
        params:[sessionStorage.animalId]
    })
    //let [animal] = animals;
    
    console.log(animal);
    
    $("").html(makeAnimalList(user.result)); 
    
}

const EditUserPage = async() => {
    
}


const EditDogPage = async() => {
    
}


const AddDogPage = () => {
    console.log("honk2")
}