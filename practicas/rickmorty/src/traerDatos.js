async function totalDatos(){
    let response = await fetch(`https://rickandmortyapi.com/api/character/`);
    let data = await response.json();
    console.log(data);
    return data.length;
};

totalDatos().then(data=>console.log(data));