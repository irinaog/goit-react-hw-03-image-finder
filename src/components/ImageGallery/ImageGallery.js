// import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Component } from 'react';
// import { Button } from "components/Button/Button";

export class ImageGallery extends Component {
    // state = {
    //     images: null,
    //     page: 1,
        
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const prevName = prevProps.imagesName;
    //     const nextName = this.props.imagesName;

    //     if (prevName !== nextName || this.state.page!==1) {
    //         return fetch(`https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=${nextName}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`)
    //             .then(r => r.json())
    //             .then(images => this.setState({ images: images.hits, }))
    //         // .finally(()=>this.setState({loading:false}))
    //     } 
        

    // };

    // onLoadMoreImages = () => {
    //     this.setState(prevState=>({page:prevState.page+1}))
    // }

    render() {
        // const { images } = this.state;
        // const gallery = this.props.images;

        return (
             <>
             <ul className="gallery">
                
            {this.props.images.map(({webformatURL,tags, id}) => (
                <ImageGalleryItem key={id} imgURL={ webformatURL} alt={tags} />
            ))}
            
             </ul>
                {/* {imag es && <Button loadImg={ this.onLoadMoreImages} />} */}
            </>
   )
};


   
}

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(PropTypes.shape({
//         previewURL: PropTypes.string,
//         tags: PropTypes.string.isRequired,
//         id:PropTypes.number.isRequired,
//     }))
//     }