import '../styles/card.scss'

type CardProps = {
    episode: {
        id?: number,
        name: string,
        air_date: string,
        episode: string,
    }
}

export function Card(props: CardProps) {
    return(
        <div className="card-container">
        <h2>{props.episode.name}</h2>

        <div className="infos-ep">
            <span>{props.episode.episode}</span>
            <span>{props.episode.air_date}</span>
        </div>
    </div>
    )
}