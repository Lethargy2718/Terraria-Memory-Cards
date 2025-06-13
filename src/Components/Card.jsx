export default function Card({ weapon, onClick }) {
    const data = weapon.data;

    return (
        <button className="card" onClick={() => onClick(data.id)}>
            <div className="card__img-container">
                <img
                    src={`./weapons/${data.id}.png`}
                    alt={data.name}
                    className="card__img"
                />
            </div>
            <h1 className="card__name">{data.name}</h1>
        </button>
    );
}
