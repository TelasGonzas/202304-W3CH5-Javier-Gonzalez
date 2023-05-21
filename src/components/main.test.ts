/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { Main } from './main';

describe('Given the component Main', () => {
  document.body.innerHTML = '<slot></slot>';
  new Main('slot');
  const result = screen.getByRole('main');
  describe('When It is instantiate', () => {
    test('It should be in the document', () => {
      expect(result).toBeInTheDocument();
    });
  });
});
