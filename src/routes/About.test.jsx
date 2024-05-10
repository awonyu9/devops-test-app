import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './about';

test('renders correct number of names in credits', () => {
  const { getAllByTestId } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const creditElements = getAllByTestId('credit');
  expect(creditElements).toHaveLength(13);
});
