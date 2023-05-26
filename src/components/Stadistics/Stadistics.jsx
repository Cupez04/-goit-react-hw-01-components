import PropTypes from 'prop-types';
import s from './Stadistics.module.css';


const getRandom = () =>{
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)  
    }
    return color;
}

const StadisticsTables = ({ items }) => {
  return (
    <div>
      <h1 className={s.tittle__pr}>2- Sección de estadística</h1>
    <div className={s.stadistics}>
      <h2 className={s.tittle}>Upload stats</h2>
      
      <ul className={s.table}>
        {items.map(({id, label, percentage})=> (
          <li className={s.blocks} key={id} style={{backgroundColor : getRandom()}}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default StadisticsTables;

StadisticsTables.propType = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
