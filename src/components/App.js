import { Component } from "react";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";




// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export class App extends Component {
  state = {
    images: null,
    imagesName: ' ',
    totalImg:null,
    page: 1,
    status: 'idle',
    showModal: false,
    imgModal:0,
  };

  componentDidUpdate(prevProps, prevState) {
        const prevName = prevState.imagesName;
    const nextName = this.state.imagesName;
    
    if (prevName !== nextName || prevState.page !== this.state.page) {
          this.setState({status:'pending'})
      return fetch(`https://pixabay.com/api/?key=27638998-69eef40c5569256b773a36aea&q=${nextName}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`)
        .then(r => {
          if (r.ok) {
            return r.json()
          }
                
          return new Error('Nothing find')
        })
        .then(images => {
          this.setState({ totalImg :images.total})
          
          if (!this.state.images) {
            return this.setState({ images: images.hits })
          }
          return this.setState({ images: [...prevState.images, ...images.hits] })
        })
        .finally(() => this.setState({ status: 'resolved' })
        );
        } 
    };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };
  
  handleFormSubmit = imagesName => {
    this.setState({ imagesName, page: 1, images: null });
  };

  toggleModal = (index) => {
    this.setState({imgModal:index})
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  };

  render() {
    const {  images, status, showModal, imgModal, totalImg} = this.state;
    
    return (
      <>
        {showModal && <Modal onClose={this.toggleModal} image={images} index={imgModal} />}
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && <ImageGallery images={images} showImg={this.toggleModal} />}
        {status === "pending" && <Loader />}
        {totalImg>0&& status!=="pending"  && <Button loadImg={this.loadMore} />}
        {totalImg===0&& status!=="pending"&&<p>Nothing found</p>}
      
      </>
    )
  };
};
