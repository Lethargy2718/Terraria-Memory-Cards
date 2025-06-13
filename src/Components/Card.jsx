export default function Card({ weapon, onClick, obtained = true }) {
    const data = weapon.data;

    return (
        <button className="card" onClick={() => onClick(weapon, obtained)}>
            <div className="card__img-container">
                {obtained ? (
                    <img
                        src={`./weapons/${data.id}.png`}
                        alt={data.name}
                        className="card__img"
                    />
                ) : (
                    data.id
                )}
            </div>
            <h1 className="card__name">{obtained ? data.name : '???'}</h1>
        </button>
    );
}
