import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('adding to cart', () => {
  const cart = new Cart();
  const movie = new Movie(1015, 'Мстители', 900, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
  cart.add(movie);
  expect(cart.items[0]).toBe(movie);
});

test('get total', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1015, 'Мстители', 900, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
  const total = cart.total();
  expect(total).toBe(3800);
});

test('get total with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1015, 'Мстители', 900, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
  const discounted = cart.totalDiscounted(20);
  expect(discounted).toBeCloseTo(3040);
});

test('remove from cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1015, 'Мстители', 900, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));

  const expected = new Cart;
  expected.add(cart.items[0]);
  expected.add(cart.items[2]);

  cart.remove(1008);
  expect(cart).toEqual(expected);
});