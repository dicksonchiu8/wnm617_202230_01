const makeAnimalList = templater(o=>`
<li class="ui-li-has-thumb ui-first-child">
    <a href="#dog-profile-page-info" class="ui-btn ui-btn-icon-right ui-icon-carat-r js-animal-jump" data-id="${o.id}">
        <img src="${o.img}">
        <h2>${o.name} &ensp;&#8211;&ensp; ${o.breed}</h2>
    </a>
</li>
`);


const makeUserProfilePage = o = `


`;


const makeAnimalProfilePage = o = `


`;