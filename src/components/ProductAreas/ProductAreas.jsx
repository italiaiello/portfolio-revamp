import React from 'react'
import HTMLIcon from '../../assets/icons/technical-icons/HTML.svg'
import JavaScript from '../../assets/icons/technical-icons/JavaScript.svg'
import CSS from '../../assets/icons/technical-icons/CSS.svg'
import Sass from '../../assets/icons/technical-icons/sass-logo.svg'
import NodeJs from '../../assets/icons/technical-icons/nodejs.svg'
import ReactLogo from '../../assets/icons/technical-icons/react.svg'
import './ProductAreas.scss'

const ProductAreas = () => {
    return (
        <section className="product-areas section center-column">
            <h2 className="section-heading">Product Areas</h2>
            <article className="product-areas__all-logos center-row">
                <article className="product-areas__all-logos--logo-container center-column">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={HTMLIcon} alt="HTML" />
                    </figure>
                    <p>HTML</p>
                </article>
                <article className="product-areas__all-logos--logo-container center-column">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={CSS} alt="CSS" />
                    </figure>
                    <p>CSS</p>
                </article>
                <article className="product-areas__all-logos--logo-container center-column">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={JavaScript} alt="JavaScript" />
                    </figure>
                    <p>JavaScript</p>
                </article>
                <article className="product-areas__all-logos--logo-container center-column">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={ReactLogo} alt="React" />
                    </figure>
                    <p>React</p>
                </article>
                <article className="product-areas__all-logos--logo-container center-column">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={Sass} alt="Sass" />
                    </figure>
                    <p>Sass</p>
                </article>
                <article className="product-areas__all-logos--logo-container center-column">
                    <figure className="product-areas__all-logos--logo-container__logo center-row">
                        <img src={NodeJs} alt="Node Js" />
                    </figure>
                    <p>Node Js</p>
                </article>
            </article>
        </section>
    )
}

export default ProductAreas
