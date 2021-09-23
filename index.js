function fetchData() {
    fetch('https://restcountries.com/v3/all')
    .then(res =>  res.json())
    .then(data => {
        console.log(data);
        const list = data.map(list => {
            return `<div> <h1> ${list.name.common} </h1> <h2> ${list.area} </h2> </div>`
        }).join('')
        console.log(list);
        document
        .querySelector("#app")
        .insertAdjacentHTML('afterbegin', list)
    })
    .catch(err => {
        console.log(err);
    })
}

fetchData();

