export default function Card({ weapon }) {
    const data = weapon.data;

    return (
        <div className="card">
            <div className="card__img-container">
                <img
                    src={`./weapons/${data.id}.png`}
                    alt={data.name}
                    className="card__img"
                />
            </div>
            <h1 className="card__name">{data.name}</h1>
        </div>
    );
}
