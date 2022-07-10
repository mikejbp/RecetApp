import React from 'react';
import  axios  from "axios";
import { useState, useEffect } from 'react';
import '.././Styles/searcher.css'
import { api_url } from '../api.global'

function Searcher() {

    let [beers, setRecetas] = useState([]);
    let [tableRecetas, setTableRecetas] = useState([]);
    let [search, setSearch] = useState("")

    const _api = api_url;

    const petitionGet = async () => {
        await axios.get(_api)
            .then(response => {
                setRecetas(response.data)
                setTableRecetas(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const handleChange = e => {
        setSearch(e.target.value)
        filter(e.target.value)
    }

    const filter = (searchTerms) => {
        let resultsSearch = tableRecetas.filter((element) => {
            if(element.name.toString().toLowerCase().includes(searchTerms.toLowerCase())
            || element.description.toString().toLowerCase().includes(searchTerms.toLowerCase())
            ){
                return element;
            }
        });
        setRecetas(resultsSearch)
    }

    useEffect(() => {
        petitionGet();
    }, [])

    return (
        <section className="searcher">
            <div className='headland-finder'>
            <h1 className='search-title'>SEARCH</h1>
            <input className='input-search'
                placeholder='Buscar...'
                value={search}
                onChange={handleChange}>
            </input>
            <h1 className='search-title'>SEARCH RESULTS: </h1>
            </div>
            <div className='container-recetas-results'>
              {beers && beers.map((beer) => (
                <div key={beer.id} className="all-recetas-description">
                    <img
                    className='image-recipe'
                    src={beer.image_url}>
                    </img>
                    <div className='receta-search-info'>
                    <h2 className="receta-search-item" >Name: {beer.name}</h2>
                    <h1 className="receta-search-item" >Abv: {beer.abv}</h1>
                    <h2 className="receta-search-item" >Description: {beer.description}</h2>
                    <h2 className="receta-search-item" >Tips: {beer.brewers_tips}</h2>
                    <h3 className="receta-search-item" >IBU: {beer.ibu}</h3>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Searcher