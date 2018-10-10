let dishList = document.getElementById("dishList")

for(let index=0; index < dishes.length; index++) {
    
    let dish = dishes[index];

    let dishItem = `
    <li>
        <label>${dish.title}</label>
        <br>
        <img src="${dish.imageURL}"/ >
        <p>${dish.description}</p>
        <br>
        <br>
    </li>
    `
    dishList.insertAdjacentHTML('beforeend',dishItem)
}
