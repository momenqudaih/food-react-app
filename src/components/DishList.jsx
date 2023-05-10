import dishes from '../data';
import Dish from './Dish';

const DishList = ({ catFilter, priceFilter }) => {
    const [minPrice, maxPrice] = priceFilter;
    const dishItems = dishes
        .filter((dish) => catFilter === 'all' || catFilter === dish.category)
        .filter((dish) => dish.price >= minPrice && dish.price <= maxPrice)
        .map((dish) => <Dish key={dish.id} dish={dish} />);

    return (
        <ul className="grid">
            {dishItems.length ? dishItems : <li>No results found</li>}
        </ul>
    );
};

export default DishList;
