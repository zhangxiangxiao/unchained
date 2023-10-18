const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/* // Destrucutring
const book = getBook(2);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

// Spread operator
const [primaryGenre, ...secondaryGenres] = genres;
console.log(primaryGenre, secondaryGenres);

const newGenres = [...genres, 'epic fantasy'];
console.log(newGenres);

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: '2021-10-01',
  // Updating an existing property
  pages: 300,
  genres: newGenres,
};
console.log(updatedBook);

// function getYear(str) {
//   return str.split('-')[0];
// }
// console.log(getYear(publicationDate));

const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

const summary = `${title} by ${author} has ${pages} pages and was published in ${getYear(
  publicationDate
)}`;
console.log(summary);

pages > 1000 ? console.log('Long book') : console.log('Short book');

console.log(true && 'Some string');
console.log(false && 'Some string');
console.log(hasMovieAdaptation && 'This book has a movie adaptation');

// Falsy values: false, 0, '', null, undefined, NaN
console.log('jonas' && 'Some string');
console.log(0 && 'Some string');

console.log(true || 'Some string');
console.log(false || 'Some string');
console.log(0 || 'Some string');

console.log(book.translations.spanish || 'No translation available');
console.log(book.translations.portuguese || 'No translation available');

console.log(book.reviews.librarything.reviewsCount || 'No reviews available');

const count = book.reviews.librarything.reviewsCount ?? 'No data';
console.log(count); */

/* function getTotalReviewCount(book) {
  return (
    book.reviews.goodreads.reviewsCount +
    (book.reviews.librarything?.reviewsCount ?? 0)
  );
}

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((n) => n * 2);
console.log(x);

const titles = books.map((b) => b.title);
console.log(titles);

const essentialData = books.map((b) => ({
  title: b.title,
  author: b.author,
  reviewsCount: getTotalReviewCount(b),
}));
console.log(essentialData);

const longBooks = books
  .filter((b) => b.pages > 500)
  .filter((b) => b.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books
  .filter((b) => b.genres.includes('adventure'))
  .map((b) => b.title);
console.log(adventureBooks);

const totalPageCount = books.reduce((acc, b) => acc + b.pages, 0);
console.log(totalPageCount);

const totalReviewCount = books.reduce(
  (acc, b) => acc + getTotalReviewCount(b),
  0
);
console.log(totalReviewCount);

const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
console.log(sorted);

const sortedBooks = books.sort((a, b) => a.pages - b.pages).map((b) => b.title);
console.log(sortedBooks);

// 1) Add book object to array
const newBook = {
  id: 6,
  title: 'The Hobbit',
  author: 'J. R. R. Tolkien',
  publicationDate: '1937-09-21',
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2) Delete book object from array
const booksAfterDelete = books.filter((b) => b.id !== 3);
console.log(booksAfterDelete);

// 3) Update book object in array
const booksAfterUpdate = books.map((b) =>
  b.id === 4 ? { ...b, pages: 300 } : b
);
console.log(booksAfterUpdate); */

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     console.log('Inside fetch');
//     return response.json();
//   })
//   .then((data) => {
//     console.log('Inside json');
//     console.log(data);
//   });

async function getUsers() {
  console.log('Inside async function');
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}
getUsers();
console.log('After fetch');
