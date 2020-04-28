import React, { useState } from 'react';


const Paginator = ({
    totalItemsCount,
    changePage,
    currentPage,
    pageSize,
    portionSize = 5
}) => {

    const [currentPortion, setCurrentPortion] = useState(1);

    const totalPagesCount = totalItemsCount / pageSize;
    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
    }
    const firstInPortion = (currentPortion - 1) * portionSize + 1,
        lastInPortion = currentPortion * portionSize;

    const s = { currentPage: '' }

    return (
        <>
            {firstInPortion !== 1
                && <button onClick={() => { setCurrentPortion(currentPortion - 1) }}>Prev</button>}
            {pages
                .filter(page => page >= firstInPortion && page <= lastInPortion)
                .map(page => <span
                    className={page === currentPage ? s.currentPage : ''}
                    onClick={() => { changePage(page) }}>{page}</span>)}
            {lastInPortion !== pages.length
                && <button onClick={() => { setCurrentPortion(currentPortion + 1) }}>Next</button>}
        </>
    );
}


export default Paginator;