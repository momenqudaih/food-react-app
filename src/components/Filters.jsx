import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';

const Filters = ({ priceFilter, setPriceFilter, catFilter, setCatFilter }) => {
    return (
        <section className="filters">
            <h1>Burger Place</h1>
            <form>
                <PriceFilter
                    priceFilter={priceFilter}
                    setPriceFilter={setPriceFilter}
                />
                <CategoryFilter
                    catFilter={catFilter}
                    setCatFilter={setCatFilter}
                />
            </form>
        </section>
    );
};

export default Filters;
