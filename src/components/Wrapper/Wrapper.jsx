import PropTypes from 'prop-types';

const Wrapper = ({children}) => {
    return (
        <div>{children}</div>
    )
}

// -------------------
export default Wrapper;
// --------------------

Wrapper.prototype = {
    children : PropTypes.node,
}