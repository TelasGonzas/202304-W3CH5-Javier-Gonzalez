/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './header';

describe('Given the component Header', () => {
  document.body.innerHTML = '<slot></slot>';
  new Header('slot');
  const result = screen.getByRole('img');
  describe('When It is instantiate', () => {
    test('It should be in the document', () => {
      expect(result).toBeInTheDocument();
    });
  });
});
