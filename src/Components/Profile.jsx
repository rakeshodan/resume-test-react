import { generateSocialLink } from '../utils/utilMethods';
import { BoxIcon } from './BoxIcon';
import { Options } from './Options';

export const Profile = ({
  name,
  ocupation,
  location,
  image,
  social
}) => {

  const getSocialStyle = ()=>{
    return {'gridTemplateColumns': `repeat(${social?.length ||0}, max-content)`};
  }

  return (
    <section
      className='home section'
      id='home'
    >
      <Options />
      <div className='home__container bd-grid'>
        <div className='home__data bd-grid'>
          <img
            src={image}
            alt='profile_image'
            className='home__img no-print'
          />
          <h1 className='home__title'>{name}</h1>
          <h3 className='home__profession'>{ocupation}</h3>
          <span className='home__information no-print'>
            <i className='bx bx-map home__icon' /> {location}
          </span>
        </div>
        <div className='home__contact bd-grid' style={{...getSocialStyle()}}>
          <span className='social__link print'>
            <i className='bx bx-map social__icon' /> {location}
          </span>

          {social &&
            social.map((social,index) => (
              <BoxIcon
              key={`social-link-${index}`}
              className={`${social.fav_icon}`}
              label={social.title||''}
              url={generateSocialLink(social.url)}
            />
            ))}
        </div>
      </div>
    </section>
  );
};
