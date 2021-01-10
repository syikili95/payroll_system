import React from 'react';
import PropTypes from 'prop-types';

function Loader(props) {
    return (
        <div>
            <div className="db-spinner" role="alert" aria-label="Page loading. Please wait for a moment">
                {/* <span className="sr-only">Page loading. Please wait for a moment</span> */}
            </div>
        </div>
    );
}

export default Loader;