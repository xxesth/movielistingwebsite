const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title.trim() === "" || director.trim() === "" || url.trim() === ""){
        // hata
        UI.displayMessage("Please fill in the blanks","danger")
        e.preventDefault();
        return false;
    }
    else{
        e.preventDefault();
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        UI.clearInputs(titleElement,directorElement,urlElement);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessage("Added!","success");
        e.preventDefault();
        return false;
    }
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("Deleted !","success");
    }
}

function clearAllFilms(){
    if(confirm("you sure??")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}