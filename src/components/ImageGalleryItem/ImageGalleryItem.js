import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imgURL, alt }) => {
    return (
        <li className="gallery-item">
            <img src={imgURL} alt={alt} />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    imgURL: PropTypes.string,
    alt: PropTypes.string.isRequired,
};