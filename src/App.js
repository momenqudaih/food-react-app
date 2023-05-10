import { useState } from 'react';

import Filters from './components/Filters';
import Result from './components/Result';

const App = () => {
    const [priceFilter, setPriceFilter] = useState([0.5, 9]);
    const [catFilter, setCatFilter] = useState('all');

    return (
        <main>
            <Filters
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                catFilter={catFilter}
                setCatFilter={setCatFilter}
            />
            <Result priceFilter={priceFilter} catFilter={catFilter} />
        </main>
    );
};

export default App;
