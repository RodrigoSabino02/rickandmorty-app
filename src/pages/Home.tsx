import { useHistory } from 'react-router-dom'
import { Button } from '../components/Button'

import naveImg from '../assets/nave.svg'
import logoImg from '../assets/logo.svg'

import '../styles/home.scss'

export function Home() {
    const history = useHistory();

    function upToGithub(){
        // history.push('https://github.com/RodrigoSabino02')
    }

    function upToEpisodes(){
        history.push('./episodes')
    }

    return(
        <div className="container">
            <div className="content">
                <img src={naveImg} alt="" />
                <h2>
                    veja todas as temporadas e
                    episodios de rick and morty
                </h2>
                <div className="buttons">
                    <Button id="first-button" onClick={upToGithub}>
                        github
                    </Button>
                    <Button onClick={upToEpisodes}>
                        episodes
                    </Button>
                </div>
            </div>
            <div className="logo">
                <img src={logoImg} alt="" />
            </div>
        </div>
    )
}