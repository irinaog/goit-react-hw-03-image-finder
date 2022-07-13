import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {

    
    render() {
        const { alt, imgURL, onClick } = this.props;
        return (
        <li className={css.galleryItem} onClick={onClick}>
            <img src={imgURL} alt={alt} width='240px' />
        </li>
    )}

}

ImageGalleryItem.propTypes = {
    onClick:PropTypes.func.isRequired,
    imgURL: PropTypes.string,
    alt: PropTypes.string.isRequired,
    // index: PropTypes.number.isRequired
};