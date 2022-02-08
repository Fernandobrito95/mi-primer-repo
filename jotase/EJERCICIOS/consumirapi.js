fetch("https://pokeapi.co/api/v2/pokemon/")
  //transforma el json
  .then((rest) => rest.json())
  .then((datad) => {
    //console.log(data.results);
    datad.results.forEach((element) => {
      console.log(element.name);
    });
  });

  //como consumir una API
  //ASYNC Y AWAIT para consumir API

  const obtenerPokemones = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      console.log(data.results);
      
      data.results.forEach((element) => {
        console.log(element.name);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  obtenerPokemones();