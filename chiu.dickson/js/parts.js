const makeAnimalList = templater(o=>`
<li class="ui-li-has-thumb ui-first-child">
    <a href="#dog-profile-page-info" class="ui-btn ui-btn-icon-right ui-icon-carat-r js-animal-jump" data-id="${o.id}">
        <img src="${o.img}">
        <h2>${o.name} &ensp;&#8211;&ensp; ${o.breed}</h2>
    </a>
</li>`
);
//Reminder for html spacing: https://www.geeksforgeeks.org/how-to-insert-spaces-tabs-in-text-using-html-css/

const makeFilterList = async () => {
    let animals = await query({
        type:'dogs_by_user_id',
        params:[sessionStorage.userId]
    })

    $("#map-filter-select").append(makeDogFilterList(animals.result));
}

const makeExistingFilterList = async () => {
    let animals = await query({
        type:'dogs_by_user_id',
        params:[sessionStorage.userId]
    })
    document.getElementById('map-filter-select').innerHTML = "";
    $("#existing-dog-select").append(makeDogFilterList(animals.result));
}

const makeDogFilterList = templater(o=>`
<option value="${o.id}">${o.name} &ensp;&#8211;&ensp; ${o.breed}</option>
` 
);

const addMostRecent = () => {
    //$("#map-filter-select").prepend( "<option value='Most Recent' selected>Most Recent</option>" );
    document.getElementById("map-filter-select").innerHTML += "<option value='Most Recent' selected>Most Recent - All Dogs</option>";
}

const makeAnimalPopupBody = o => `
<div class="display-flex">
   <div class="animal-list-image"><img src="${o.img}" alt=""></div>
   <div class="animal-list-desc">
      <h2>${o.name}</h2>
      <div>${o.breed}</div>
      <h5 class="js-animal-jump noclick-children" data-id="${o.id}"><strong>Go to Profile</strong></h5>
   </div>
</div>
`;

const makeLocationPopupBody = o => `
<div class="display-flex">
   <div class="animal-list-desc">
      <h2>Location Description</h2>
      <div>${o.description}</div>
   </div>
</div>
`;
const makeUserProfilePage = o => `

                <div class="form-control user-presentation">
                    <div class="img-container">
                        <img src="${o.img}"/>
                    </div> 
                    <div class="edit-image-link"><a href="#user-edit-photo-page">Edit Image</a></div>
                    <div class="profile-info">
                     <h4>Name:</h4><span>${o.name}</span><br>
                     <h4>Email:</h4><span>${o.email}</span><br>
                     <h4>Age:</h4><span>${o.age}</span>
                     <h4>About:</h4><span>${o.description}</span>
                    </div>
                </div>
`;


const makeDogProfilePage = o => `

                <div class="form-control animal-presentation">
                    <div class="img-container">
                        <img src="${o.img}"/>
                    </div> 
                    <div class="edit-image-link"><a href="#animal-edit-photo-page">Edit Image</a></div>
                    <div class="profile-info">                    
                     <h4>Name:</h4><span>${o.name}</span><br>
                     <h4>Breed:</h4><span>${o.breed}</span>
                     <h4>Description:</h4><span>${o.description}</span>
                     </div>
                </div>

`;


// Function to generate dropdown list of dog breeds. NEED PART OF VIDEO TO GENERATE SINGLE ANIMAL ID SO THAT CAN BE PASSED TO FUNCTION
function dogBreedDropdown(breed){
    var breeds = ["Affenpinscher","Afghan Hound","African Hunting Dog","Airedale Terrier","Akbash Dog","Akita","Alapaha Blue Blood Bulldog","Alaskan Husky","Alaskan Malamute","American Bulldog","American Bully","American Eskimo Dog","American Eskimo Dog (Miniature)","American Foxhound","American Pit Bull Terrier","American Staffordshire Terrier","American Water Spaniel","Anatolian Shepherd Dog","Appenzeller Sennenhund","Australian Cattle Dog","Australian Kelpie","Australian Shepherd","Australian Terrier","Azawakh","Barbet","Basenji","Basset Bleu de Gascogne","Basset Hound","Beagle","Bearded Collie","Beauceron","Bedlington Terrier","Belgian Malinois","Belgian Tervuren","Bernese Mountain Dog","Bichon Frise","Black and Tan Coonhound","Bloodhound","Bluetick Coonhound","Boerboel","Border Collie","Border Terrier","Boston Terrier","Bouvier des Flandres","Boxer","Boykin Spaniel","Bracco Italiano","Briard","Brittany","Bull Terrier","Bull Terrier (Miniature)","Bullmastiff","Cairn Terrier","Cane Corso","Cardigan Welsh Corgi","Catahoula Leopard Dog","Caucasian Shepherd (Ovcharka)","Cavalier King Charles Spaniel","Chesapeake Bay Retriever","Chinese Crested","Chinese Shar-Pei","Chinook","Chow Chow","Clumber Spaniel","Cocker Spaniel","Cocker Spaniel (American)","Coton de Tulear","Dachshund","Dalmatian","Doberman Pinscher","Dogo Argentino","Dutch Shepherd","English Setter","English Shepherd","English Springer Spaniel","English Toy Spaniel","English Toy Terrier","Eurasier","Field Spaniel","Finnish Lapphund","Finnish Spitz","French Bulldog","German Pinscher","German Shepherd Dog","German Shorthaired Pointer","Giant Schnauzer","Glen of Imaal Terrier","Golden Doodle","Golden Retriever","Gordon Setter","Great Dane","Great Pyrenees","Greyhound","Griffon Bruxellois","Harrier","Havanese","Irish Setter","Irish Terrier","Irish Wolfhound","Italian Greyhound","Japanese Chin","Japanese Spitz","Keeshond","Komondor","Kooikerhondje","Kuvasz","Labrador Retriever","Lagotto Romagnolo","Lancashire Heeler","Leonberger","Lhasa Apso","Maltese","Miniature American Shepherd","Miniature Pinscher","Miniature Schnauzer","Newfoundland","Norfolk Terrier","Norwich Terrier","Nova Scotia Duck Tolling Retriever","Old English Sheepdog","Olde English Bulldogge","Papillon","Pekingese","Pembroke Welsh Corgi","Perro de Presa Canario","Pharaoh Hound","Pitbull","Plott","Pomeranian","Poodle (Miniature)","Poodle (Toy)","Pug","Puli","Pumi","Rat Terrier","Redbone Coonhound","Rhodesian Ridgeback","Rottweiler","Russian Toy","Saint Bernard","Saluki","Samoyed","Schipperke","Scottish Deerhound","Scottish Terrier","Shetland Sheepdog","Shiba Inu","Shih Tzu","Shiloh Shepherd","Siberian Husky","Silky Terrier","Smooth Fox Terrier","Soft Coated Wheaten Terrier","Spanish Water Dog","Spinone Italiano","Staffordshire Bull Terrier","Standard Schnauzer","Swedish Vallhund","Thai Ridgeback","Tibetan Mastiff","Tibetan Spaniel","Tibetan Terrier","Toy Fox Terrier","Treeing Walker Coonhound","Vizsla","Weimaraner","Welsh Springer Spaniel","West Highland White Terrier","Whippet","White Shepherd","Wire Fox Terrier","Wirehaired Pointing Griffon","Wirehaired Vizsla","Xoloitzcuintli","Yorkshire Terrier"];
    
    for (i = 0; i < breeds.length; i++) {
        if(breeds[i] === breed){
            var opt = document.createElement("option");
            document.getElementById("edit-dog-breed-select").innerHTML += '<option id="' + i + '" selected>' + breeds[i] + '</option>';    
        }else{
            var opt = document.createElement("option");
            document.getElementById("edit-dog-breed-select").innerHTML += '<option id="' + i + '">' + breeds[i] + '</option>';            
        }

    }
}

//Calling a function inside a template literal
// https://stackoverflow.com/questions/37963168/how-to-call-calling-a-function-inside-a-template-literal

function userAgeDropdown(age){
    var ages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]
    
    for (i = 0; i < ages.length; i++) {
        if(ages[i] === age){
            var opt = document.createElement("option");
            document.getElementById("user-age-select").innerHTML += '<option id="' + i + '" selected>' + ages[i] + '</option>';    
        }else{
            var opt = document.createElement("option");
            document.getElementById("user-age-select").innerHTML += '<option id="' + i + '">' + ages[i] + '</option>';            
        }

    }
    
}