import DishList from './DishList';
const Result = ({ priceFilter, catFilter }) => {
    return (
        <section className="dishes">
            <h2>Dishes</h2>
            <DishList catFilter={catFilter} priceFilter={priceFilter} />
        </section>
    );
};

export default Result;
