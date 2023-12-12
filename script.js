const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const list = document.querySelector("ul");
let listArray = [];

// DOM
const populate = (item) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span>${item}</span>`;
    list.append(newLi);
    
};

// Mygtukas
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const value = input.value.trim();
    if (value !== "") {
        populate(value);
        input.value = "";
    }


    let getItem = localStorage.getItem("listArray");
    if(getItem){
    
        listArray = getItem.split(" ");
        
        listArray.forEach(item => {
            populate(item);
        });
    }

    
});

