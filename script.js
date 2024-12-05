const formulaire = document.getElementById('form');

formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('ok');

    const message = document.getElementById('error message');
    message.style.display = 'block';
})

function afficheCommentaire() {
    erreur.style.display = 'none';
    commentaire = document.createElement('div');
    commentaire.classlist.add('flex','espace-x-4','text-sm','text-gray-500');
    commentaire.innerHTML = `
    <div class="flex-1 py-10 border-t border-gray-200">
    <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
     <p>${message}</p>
     </div>
    </div>`;
    const commentaire = document.getElementById('comment-list');
    commentaire.appendChild(commentaire);
}

let firstname = document.getElementById('john')
firstName.addEventListener('input', (event)=> {
    testSiNonVide(lasrName.value)
})

let lastname = document.getElementById('doe')
lastname.addEventListener('input',(event)=> {
    testSiNonVide(lastname.value)
})

let message = document.getElementById('ceci est mon commentaire')
message.addEventListener('input',(event)=> {
    testSiNonVide(message.value)
})

let button=document.getElementById('button')
button.addEventListener('click' , (event)=>{
    event.preventDefault()
    if (!firstname.value || !lastname.value || !message.value) {
        afficheMessageErreur()
    }
    else{
        createComment(firstname.value,lastname.value,message.value)
        firstname.value = ''
        lastname.value= ''
        message.value=''
    }
})


formulaire.addEventListener('submit' , (event)=> {
    event.preventDefault();

    const nom = document.getElementById('doe').value;
    const prenom = document.getElementById('john').value;
    const message = document.getElementById('ceci est mon commentaire').value;
    
    if(Doe !=='' && John !=='' && Ceciestmoncommentaire !=='' ){

        afficheCommentaire();
        erreur.style.display = 'none';
        formulaire.reset();
    }else {
        const message = document.getElementById('error-message')
        erreur.style.display = 'block';

        const erreur= document.getElementById('error message');
        erreur.style.display = 'block';

    }
});