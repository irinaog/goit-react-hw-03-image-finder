import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) => {
    return (
        <ul className="gallery">
            {images.map(({previewURL,tags, id}) => (
                <ImageGalleryItem key={id} imgURL={ previewURL} alt={tags} />
            ))}
            
    </ul>
   )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        previewURL: PropTypes.string,
        tags: PropTypes.string.isRequired,
        id:PropTypes.number.isRequired,
    }))
}