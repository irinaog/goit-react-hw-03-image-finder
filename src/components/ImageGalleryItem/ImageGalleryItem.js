import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imgURL, alt, largeImg }) => {
    return (
        <li className={css.galleryItem} onClick={largeImg}>
            <img src={imgURL} alt={alt} width='240px'/>
        </li>
    )
};

ImageGalleryItem.propTypes = {
    imgURL: PropTypes.string,
    alt: PropTypes.string.isRequired,
};