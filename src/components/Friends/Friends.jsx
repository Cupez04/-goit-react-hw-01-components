import PropTypes from 'prop-types';
import s from './Friends.module.css'


const FriendList = ({items}) => {
    return (
        <div>
        <h1 className={s.tittle}>3 - Lista de amigos</h1>
        <ul className={s.kiu}>
            {items.map(({avatar, name, isOnline, id}) => (
                <li key={id} className={s.cards}>
                    <div className={s.btnContainer}>
                    <button className={isOnline ? s.online : s.offline}></button>
                    </div>
                    <img 
                    src={avatar} 
                    alt={name}
                    className={s.kilo} />
                    <div className={s.nameContainer}>
                    <p>{name}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default FriendList;

FriendList.propType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline : PropTypes.bool.isRequired,
  };
  