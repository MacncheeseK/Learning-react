import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className='book-list'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className ='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/41UG6tNeHBL._AC_SX368_.jpg" />
);
const Title = () => <h2>Lessons in Chemistry: A Novel</h2>;
const Author = () => {
  return <h4>Bonnie Garmus</h4>;
};

// const Greating =()=>{
//   return React.createElement('div',{}, React.createElement('h2',{},"Hello world"))
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
