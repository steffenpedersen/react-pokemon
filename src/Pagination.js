import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            {/* Use React if-statement to check if we have the function,
                then call the button with the onclick event */}
            {gotoPrevPage && <button onClick={gotoPrevPage}>Prev</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}            
        </div>
    )
}
