import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";


import '../styles/episodes.scss'


type Episode = { 
    name: string,
    air_date: string,
    episode: string,
}




export function Episodes() {
    const [episodes, setEpisodes] = useState<Episode[]>([]);



    console.log(episodes)

    function handleTempOne(){
            fetch('https://rickandmortyapi.com/api/episode/1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11')
            .then(res => res.json())
            .then(data => setEpisodes(data))
    }

    function handleTempTwo(){ 
        fetch('https://rickandmortyapi.com/api/episode/12, 13, 14, 15, 16, 17, 18, 19, 20, 21')
        .then(res => res.json())
        .then(data => setEpisodes(data))
    }

    function handleTempThree(){
        fetch('https://rickandmortyapi.com/api/episode/22, 23, 24, 25, 26, 27, 28, 29, 30, 31')
        .then(res => res.json())
        .then(data => setEpisodes(data))
    }

    function handleTempFour(){
        fetch('https://rickandmortyapi.com/api/episode/32, 33, 34, 35, 36, 37, 38, 39, 40, 41')
        .then(res => res.json())
        .then(data => setEpisodes(data))
    }

    return(
        <div className="container-episodes">
            <div className="nav-content">
                <Button onClick={handleTempOne}>Temporada 1</Button>
                <Button onClick={handleTempTwo}>Temporada 2</Button>
                <Button onClick={handleTempThree}>Temporada 3</Button>
                <Button onClick={handleTempFour}>Temporada 4</Button>

            </div>

            <div className="episodes-content">
                {episodes.map( episode => (
                    <Card episode={episode}></Card>
                ))}
            </div>
        </div>
    )
}