import { useContext } from 'react';
import { productContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(productContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img className={styles.productImg} src={imgToShow} alt="Product" />
    );
}