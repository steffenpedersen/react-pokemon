import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage}) {
    return (
        <div className="panel-footer">
            {/* Use React if-statement to check if we have the function,
                then call the button with the onclick event */}
            {gotoPrevPage && <button className="btn btn-primary float-left" onClick={gotoPrevPage}>Prev</button>}
            {gotoNextPage && <button className="btn btn-primary float-right" onClick={gotoNextPage}>Next</button>}            
        </div>
    )
}
