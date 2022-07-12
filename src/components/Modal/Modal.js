import { Component } from "react";
import { createPortal } from "react-dom";

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal')

export class Modal extends Component{

    componentDidMount() {
        window.addEventListener('keydown',this.handleKeyDown)
    };
    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            console.log('esc');
            this.props.onClose();
        }
    };


    render() {
        return createPortal(<div className={css.overlay}>
            <div className={css.modal}>
                <img src="" alt="" />
            </div>
        </div>,
        modalRoot)
    }
}