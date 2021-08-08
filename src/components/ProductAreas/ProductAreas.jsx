import React from 'react'
import HTMLIcon from '../../assets/icons/technical-icons/HTML.svg'
import './ProductAreas.scss'

const ProductAreas = () => {
    return (
        <section className="product-areas center-column">
            <h2 className="section-heading">Product Areas</h2>
            <article className="product-areas__all-logos center-row">
                <article className="product-areas__all-logos--logo-container center-row">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={HTMLIcon} alt="HTML Icon" />
                    </figure>
                </article>
                <article className="product-areas__all-logos--logo-container center-row">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={HTMLIcon} alt="HTML Icon" />
                    </figure>
                </article>
                <article className="product-areas__all-logos--logo-container center-row">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={HTMLIcon} alt="HTML Icon" />
                    </figure>
                </article>
            </article>
        </section>
    )
}

export default ProductAreas
