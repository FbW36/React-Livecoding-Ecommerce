import React from 'react';
import Nav from './Nav';

const ProductDetail = (props) => {
  const { title, image, price, ingredients } = props.location.state.cocktail;
  console.log(ingredients);

  return (
    <main>
      <Nav />
      <section className='details-page'>
        <img src={image} alt='title' />
        <aside className='details-aside'>
          <h4>{title}</h4>
          <p>€{price}</p>
          <h2>Ingredients</h2>
          {ingredients.map((ingredient) => (
            <p>{ingredient}</p>
          ))}
        </aside>
      </section>
      <button className='details-button' onClick={props.history.goBack}>
        Return
      </button>
    </main>
  );
};

export default ProductDetail;
