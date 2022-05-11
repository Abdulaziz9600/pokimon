let elOutList = $(".js-list");
 
pokemons.forEach(function(pokemon){
  let newLi = createElement("li", "col-sm-4 col-md-3 col-lg-2 text-center p-3 mx-2 mb-2 border border-2 border-success rounded bg-light me-5 shadow p-3 mb-5 bg-secondaryB");
  let newImg = createElement("img", "card-img-top");
  newImg.setAttribute("src", pokemon.img);
  let newDiv = createElement("div", "");
  let newH = createElement("h5", "card-title text-danger", `Name: ${pokemon.name}`);
  let newPi = createElement("p", "card-text text-success", "Id Number: ");

  let weaknesses = pokemon.id
  let newSpan = createElement("span", "", `${weaknesses}`);
  console.log(weaknesses);
  newPi.append(newSpan);
  
  newDiv.append(newH, newPi);
  newLi.append(newImg, newDiv);
  elOutList.append(newLi);
});
