let sendBtn = document.getElementById("search");
let country = document.getElementById("country");
let displayArea = document.getElementById("display");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://restcountries.com/v2/name/${country.value.trim()}?fields=name,flag,region,capital`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length === 1) {
        data.forEach((element) => {
          const { name, flag, region, capital } = element;
          displayArea.innerHTML = `<img style= "width: 100px" src="${flag}">
      <p>Name: ${name}</p>
      <p>Capital: ${capital}</p>
      <p>Region: ${region}</p>
      `;
        });
      } else {
        const numero = data.slice(0, 10);
        console.log(numero);
        numero.forEach((element) => {
          const { name, flag, region, capital } = element;
          displayArea.innerHTML += `<img style= "width: 100px" src="${flag}">
      <p>Name: ${name}</p>
      <p>Capital: ${capital}</p>
      <p>Region: ${region}</p>
      `;
        });
      }
    });
});
