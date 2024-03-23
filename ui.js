class UI{
  static addFilmToUI(newFilm){
    // <tr>
    //   <td><img src="" class="img-fluid img-thumbnail"></td>
    //   <td></td>
    //   <td></td>
    //   <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    // </tr>
      const filmList = document.getElementById("films");
      if (filmList.innerHTML == null){
        filmList.innerHTML = "";
        console.log(filmList.innerHTML);
      }
      filmList.innerHTML += `
          <tr>
              <td><img src = "${newFilm.url}" class="img-fluid img-thumbnail"></td>
              <td>${newFilm.title}</td>
              <td>${newFilm.director}</td>
              <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
          </tr>`;
  }
  static displayMessage(message,type){
    const cardBody = document.querySelector(".card-body");
  
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
  
    setTimeout(function(){
      div.remove();
    },1500);
  }
  static clearInputs(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }
  static loadAllFilms(films){
    const filmList = document.getElementById("films");
    if(localStorage.getItem("films"===null)){
      films = [];
    }else{
      films.forEach(film => {
        filmList.innerHTML += `
            <tr>
                <td><img src = "${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>`;
      });
    }
  }
  static deleteFilmFromUI(element){
    element.parentElement.parentElement.remove();
  }
  static clearAllFilmsFromUI(){
    const filmList = document.getElementById("films");
    // filmList.innerHTML = ""; bu yavasmis diyo ondan asagidakini yapiyor
    while(filmList.firstElementChild !== null){
      filmList.firstElementChild.remove();
    }
  }
}

