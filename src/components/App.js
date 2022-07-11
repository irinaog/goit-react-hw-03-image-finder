import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// 27638998-69eef40c5569256b773a36aea
// https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=yellow+flowers&image_type=photo/
export class App extends Component {
  state = {
    images:null,
  };

  componentDidMount() {
    fetch('https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=cat&image_type=photo&orientation=horizontal&page=1&per_page=12')
      .then(r =>  r.json())
      .then(images => this.setState({images: images.hits})) 
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar />
        {images && <ImageGallery images={images} />}
        
      </>
    )
  };
};
