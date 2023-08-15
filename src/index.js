import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books=[{
   title: 'Lessons in Chemistry: A Novel',
   author: 'Bonnie Garmus',
   img: './images/Lesson in Chemisry.jpg',
   id:1
  },
  {
    title: 'Red, White & Royal Blue',
    author: 'Casey McQuiston',
    img: 'https://d1b14unh5d6w7g.cloudfront.net/1250316774.01.S001.JUMBOXXX.jpg?Expires=1692217086&Signature=b9Jv6oQPwwghTzoOsi48SgGdL-xM3ulWj0FfwjFxXMo41leATAkrFbF~o1LXjHmqfufwMsOfYUZqQgGbFNXMl8MCmmKjyPWkZZAYXktnbvT7PmoV4Yj9bpRmjbg0rafOhNG08CWJ3Vq3-Ql9VO5zOUEPSxC6hXgJKXCSYGcr2DI_&Key-Pair-Id=APKAIUO27P366FGALUMQ',
    id:2
  }
];

const BookList = () => {
  return (
    <section className="book-list">
      {
        books.map((book) => {
          return <Book {...book} key={book.id} />;
        })
      }
    </section>
  );
};

const Book = ({img, title, author}) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>   
      <h4>{author}</h4>
    </article>
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
