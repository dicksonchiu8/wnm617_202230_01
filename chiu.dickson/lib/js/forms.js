const submitAnimalAdd = () => {
    let name = $("#dog-fullname").val();
    let breed = $("#dog-breed-select :selected").text();
    let description = $("#dog-description").val();
   
    console.log({name,breed,description});
}

const submitAnimalEdit = () => {
    let name = $("#edit-dog-fullname").val();
    let breed = $("#edit-dog-breed-select :selected").text();
    let description = $("#edit-dog-description").val();
   
    console.log({name,breed,description});
}

const submitUserAdd = () => {

}


const submitUserEdit = () => {
    let name = $("#user-fullname").val();
    let age = $("#user-age-select :selected").text();
    let description = $("#user-about").val();
   
    console.log({name,age,description});
}
