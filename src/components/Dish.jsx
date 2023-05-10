const Dish = ({ dish }) => {
    return (
        <li className="card">
            <h3>{dish.name}</h3>
            {dish.description && <p>{dish.description}</p>}
            <div>${dish.price.toFixed(2)}</div>
        </li>
    );
};

export default Dish;
