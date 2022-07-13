import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal')

export class Modal extends Component{
    static propTypes = {
        image: PropTypes.arrayOf(PropTypes.shape()),
        index:PropTypes.number.isRequired,
   }

    componentDidMount() {
        window.addEventListener('keydown',this.handleKeyDown)
    };
    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackDropClick = (evt) => {
        if (evt.currentTarget === evt.target)
            this.props.onClose();
    };



    render() {
        const { image, index } = this.props;
        const img = image[index];
        return createPortal(<div className={css.overlay} onClick={this.handleBackDropClick}>
            <div className={css.modal}>
                <img src={img.largeImageURL} alt={img.tag} />
            </div>
        </div>,
        modalRoot)
    }
}