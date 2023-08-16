import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {books} from './books.js'
import Book from './book.js';

const BookList = () => {
   
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book {...book} key={book.id}  />;
      })}
    </section>
  );
};



/* simlier  structure concept the code above
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="./images/Lesson in Chemisry.jpg" />
);
const Title = () => <h2>Lessons in Chemistry: A Novel</h2>;
const Author = () => {
  return <h4>Bonnie Garmus</h4>;
};
*/
// const Greating =()=>{
//   return React.createElement('div',{}, React.createElement('h2',{},"Hello world"))
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
