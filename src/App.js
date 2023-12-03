import propTypes from 'prop-types';

function Book({ name, image, rating }) {
  return (
    <div>
      <h2>Read {name} </h2>
      <h4>{rating}/10.0</h4>
      <img src={image} alt={name} />
    </div>
  );
}

const bookList = [
  { id: 1, name: '마흔에 읽는 쇼펜하우어', image: 'https://image.aladin.co.kr/product/32361/59/cover200/k592935565_2.jpg', rating: 9.3 },
  {
    id: 2,
    name: '남에게 보여주려고 인생을 낭비하지 마라',
    image: 'https://image.aladin.co.kr/product/32648/45/cover200/k072935654_1.jpg',
    rating: 9.4,
  },
  {
    id: 3,
    name: '당신의 인생이 왜 힘들지 않아야 한다고 생각하십니까',
    image: 'https://image.aladin.co.kr/product/31863/3/cover200/k132833423_1.jpg',
    rating: 9.4,
  },
  { id: 4, name: '도둑맞은 집중력', image: 'https://image.aladin.co.kr/product/31559/97/cover200/s102936816_1.jpg', rating: 8.5 },
  { id: 5, name: '오십에 읽는 주역', image: 'https://image.aladin.co.kr/product/32727/88/cover200/k282936970_1.jpg', rating: 9.8 },
];

function App() {
  return (
    <div className="App">
      {bookList.map((book) => (
        <Book key={book.id} name={book.name} rating={book.rating} image={book.image} />
      ))}
    </div>
  );
}

Book.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  rating: propTypes.number,
};

export default App;
