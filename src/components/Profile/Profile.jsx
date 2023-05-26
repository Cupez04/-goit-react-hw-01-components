import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = (props) =>{
    const {avatar, username, tag, stats, location} = props;

    return(
      <div>
        <h1 className={s.tittle}>1 - Perfil de la red social</h1>
        <div className={s.profile}>
            <div className={s.description}>
                <img
                  src={avatar}
                  alt={username}
                  className={s.avatar}
                  />
                <p className={s.username}>{username}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.list}>
                <li className={s.list__li}>
                  <span className={s.list__tag}>Followers</span>
                  <span className={s.list__quanty}>{stats.followers}</span>
                </li>
                <li className={s.list__li}>
                  <span className={s.list__tag}>Views</span>
                  <span className={s.list__quanty}>{stats.views}</span>
                </li>
                <li className={s.list__li}>
                  <span className={s.list__tag}>Likes</span>
                  <span className={s.list__quanty}>{stats.likes}</span>
                </li>
              </ul>
        </div>
    </div>
    )
}

export default Profile;

Profile.propTypes ={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}

