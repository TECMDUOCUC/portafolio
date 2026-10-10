import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';

describe('Header Component', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    root.unmount();
    container.remove();
  });

  it('renders brand title and all navigation links', async () => {
    root.render(<Header />);
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(container.textContent).toContain('Mi portafolio.');

    const links = Array.from(container.querySelectorAll('a')).map((el) =>
      el.getAttribute('href')
    );

    expect(links).toContain('#projects');
    expect(links).toContain('#about');
    expect(links).toContain('#news');
  });
});