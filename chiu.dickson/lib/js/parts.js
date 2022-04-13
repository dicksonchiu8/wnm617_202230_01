const makeAnimalList = templater(o=>`
<li class="ui-li-has-thumb ui-first-child">
    <a href="#dog-profile-page-info" class="ui-btn ui-btn-icon-right ui-icon-carat-r js-animal-jump" data-id="${o.id}">
        <img src="${o.img}">
        <h2>${o.name} &ensp;&#8211;&ensp; ${o.breed}</h2>
    </a>
</li>`
);


const makeUserProfilePage = o = `


`;


const makeAnimalProfilePage = o = `


`;


// Function to generate dropdown list of dog breeds
function dogBreedDropdown(breed){
    var breeds = ["Affenpinscher","Afghan Hound","African Hunting Dog","Airedale Terrier","Akbash Dog","Akita","Alapaha Blue Blood Bulldog","Alaskan Husky","Alaskan Malamute","American Bulldog","American Bully","American Eskimo Dog","American Eskimo Dog (Miniature)","American Foxhound","American Pit Bull Terrier","American Staffordshire Terrier","American Water Spaniel","Anatolian Shepherd Dog","Appenzeller Sennenhund","Australian Cattle Dog","Australian Kelpie","Australian Shepherd","Australian Terrier","Azawakh","Barbet","Basenji","Basset Bleu de Gascogne","Basset Hound","Beagle","Bearded Collie","Beauceron","Bedlington Terrier","Belgian Malinois","Belgian Tervuren","Bernese Mountain Dog","Bichon Frise","Black and Tan Coonhound","Bloodhound","Bluetick Coonhound","Boerboel","Border Collie","Border Terrier","Boston Terrier","Bouvier des Flandres","Boxer","Boykin Spaniel","Bracco Italiano","Briard","Brittany","Bull Terrier","Bull Terrier (Miniature)","Bullmastiff","Cairn Terrier","Cane Corso","Cardigan Welsh Corgi","Catahoula Leopard Dog","Caucasian Shepherd (Ovcharka)","Cavalier King Charles Spaniel","Chesapeake Bay Retriever","Chinese Crested","Chinese Shar-Pei","Chinook","Chow Chow","Clumber Spaniel","Cocker Spaniel","Cocker Spaniel (American)","Coton de Tulear","Dachshund","Dalmatian","Doberman Pinscher","Dogo Argentino","Dutch Shepherd","English Setter","English Shepherd","English Springer Spaniel","English Toy Spaniel","English Toy Terrier","Eurasier","Field Spaniel","Finnish Lapphund","Finnish Spitz","French Bulldog","German Pinscher","German Shepherd Dog","German Shorthaired Pointer","Giant Schnauzer","Glen of Imaal Terrier","Golden Retriever","Gordon Setter","Great Dane","Great Pyrenees","Greyhound","Griffon Bruxellois","Harrier","Havanese","Irish Setter","Irish Terrier","Irish Wolfhound","Italian Greyhound","Japanese Chin","Japanese Spitz","Keeshond","Komondor","Kooikerhondje","Kuvasz","Labrador Retriever","Lagotto Romagnolo","Lancashire Heeler","Leonberger","Lhasa Apso","Maltese","Miniature American Shepherd","Miniature Pinscher","Miniature Schnauzer","Newfoundland","Norfolk Terrier","Norwich Terrier","Nova Scotia Duck Tolling Retriever","Old English Sheepdog","Olde English Bulldogge","Papillon","Pekingese","Pembroke Welsh Corgi","Perro de Presa Canario","Pharaoh Hound","Plott","Pomeranian","Poodle (Miniature)","Poodle (Toy)","Pug","Puli","Pumi","Rat Terrier","Redbone Coonhound","Rhodesian Ridgeback","Rottweiler","Russian Toy","Saint Bernard","Saluki","Samoyed","Schipperke","Scottish Deerhound","Scottish Terrier","Shetland Sheepdog","Shiba Inu","Shih Tzu","Shiloh Shepherd","Siberian Husky","Silky Terrier","Smooth Fox Terrier","Soft Coated Wheaten Terrier","Spanish Water Dog","Spinone Italiano","Staffordshire Bull Terrier","Standard Schnauzer","Swedish Vallhund","Thai Ridgeback","Tibetan Mastiff","Tibetan Spaniel","Tibetan Terrier","Toy Fox Terrier","Treeing Walker Coonhound","Vizsla","Weimaraner","Welsh Springer Spaniel","West Highland White Terrier","Whippet","White Shepherd","Wire Fox Terrier","Wirehaired Pointing Griffon","Wirehaired Vizsla","Xoloitzcuintli","Yorkshire Terrier"];
    
    for (i = 0; i < breeds.length-1; i++) {
        if(breeds[i] === breed){
            var opt = document.createElement("option");
            document.getElementById("edit-dog-breed-select").innerHTML += '<option id="' + i + ' selected">' + breeds[i] + '</option>';    
        }
        var opt = document.createElement("option");
        document.getElementById("edit-dog-breed-select").innerHTML += '<option id="' + i + '">' + breeds[i] + '</option>';
    }
}

//Calling a function inside a template literal
// https://stackoverflow.com/questions/37963168/how-to-call-calling-a-function-inside-a-template-literal