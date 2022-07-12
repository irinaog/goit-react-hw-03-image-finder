import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";


export class App extends Component {
  state = {
    images: null,
    imagesName: ' ',
    page:1,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.imagesName)
    console.log(this.state.imagesName)
        const prevName = prevState.imagesName;
        const nextName = this.state.imagesName;

        if (prevName !== nextName || prevState.page!==this.state.page) {
            return fetch(`https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=${nextName}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`)
                .then(r => r.json())
                .then(images => this.setState({ images: images.hits }))
            // .finally(()=>this.setState({loading:false}))
        } 
        

    };

    loadMore = () => {
        this.setState(prevState=>({page:prevState.page+1}))
    }
  handleFormSubmit = imagesName => {
    this.setState({ imagesName, page:1, images:null });
  }


  render() {
    const {  images } = this.state;
    
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && <ImageGallery images={images} />}
        {images&& <Button loadImg={this.loadMore}/>}
      </>
    )
  };
};
