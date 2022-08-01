
import pokemonApi from "../api/pokemonApi";

const getPokemonOptions = async () => {

    let pokemons = [];

    for (let i = 0; i < 4; i++){
        const id = Math.trunc(Math.random() * 151);
        pokemons[i] = id + 1;
    }

    const [a,b,c,d] = pokemons;

    const promiseArray = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ];

    const [ p1, p2, p3, p4] = await Promise.all(promiseArray);

    return [
        { name : p1.data.name, id: p1.data.id },
        { name : p2.data.name, id: p2.data.id },
        { name : p3.data.name, id: p3.data.id },
        { name : p4.data.name, id: p4.data.id },
    ]
}


export default getPokemonOptions;