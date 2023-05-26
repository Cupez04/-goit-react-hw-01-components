import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ tittle,children}) => {
    return (
        <div className ={s.container}>
            <h1>{tittle}</h1>
            {children}
            </div>
    )        
}
// ---------------------
export default Container;
// ---------------------

Container.propTypes = {
    children: PropTypes.node,
}

