import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('adding to cart', () => {
  const movie = new Movie(3002, 'Мстители', 900, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
  const cart = new Cart();
  cart.add(movie);
  expect(cart.items[0]).toBe(movie);
});
