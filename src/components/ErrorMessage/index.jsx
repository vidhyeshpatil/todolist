import React from "react";
import PropTypes from 'prop-types';

export default function ErrorMessage({msg}) {

    return (
        <> {msg && msg.length > 0 && <div className = "error-msg"> {msg} </div>} </>
    );
}

ErrorMessage.propTypes = {
    msg: PropTypes.string,
}
