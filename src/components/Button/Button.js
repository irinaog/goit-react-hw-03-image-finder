import css from './Button.module.css';

export const Button = ({ loadImg }) => {
    return (
        <button className={css.buttonLoad} onClick={loadImg} type="button">Loading...</button>
    )
};