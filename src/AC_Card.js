export function AC_Card({ name, id, price, specification, warranty }) {
    return (
        <div className="header-name">
            <h2 style={{ color: "yellow", fontSize: "20px" }}>
                {id} {name}
            </h2>
            <p>Price: INR {price} </p>
            <p>Specification: {specification}</p>
            <p>Warranty: {warranty} years</p>
        </div>
    );
}
