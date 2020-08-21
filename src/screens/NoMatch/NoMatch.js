import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
    let location = useLocation();
    return (
        <main>
            <article>
                <p>Page {location.pathname} not found. (404)</p>
                <section></section>
                <section></section>
            </article>
        </main>
    );
}

export default NoMatch;