import SearchContext from './searchContext';
import { useState } from 'react';
import SearchDetail from '../components/SearchField/SearchDetail';



const SearchState = () => {

    return (
        <div>
            <SearchContext.Provider value={{}}>
                <SearchDetail/>
            </SearchContext.Provider>
        </div>
    )
}


export default SearchState;