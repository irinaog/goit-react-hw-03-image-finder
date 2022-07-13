import { Component } from "react";
import { createPortal } from "react-dom";

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal')

export class Modal extends Component{
    state = {
        indexImg: 0,
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




    render() {
        const { image, index } = this.props;
        const img = image[index];
        return createPortal(<div className={css.overlay}>
            <div className={css.modal}>
                <img src={img.largeImageURL} alt='{thi}' />
            </div>
        </div>,
        modalRoot)
    }
}