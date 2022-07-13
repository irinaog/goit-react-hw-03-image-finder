// import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Component } from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })),
        showImg:PropTypes.func.isRequired,
    }
   
    render() {
       
        const { images, showImg } = this.props;

        return (
             <ul className={css.gallery}>
                
            {images.map(({webformatURL,  tags, id}, index) => (
                <ImageGalleryItem key={id} imgURL={webformatURL} alt={tags} onClick={ ()=>showImg(index)}  />
            ))}
            
             </ul>      
   )
};  
};

