import React from 'react';
import { createRoot } from 'react-dom/client';
import NewsCard from './NewsCard';

describe('NewsCard Component', () => {
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

  it('debe renderizar el título, la fecha y el contenido', async () => {
    root.render(
      <NewsCard
        titulo="Noticia Test"
        fecha="2026-10-10"
        contenido="Contenido de prueba"
      />
    );

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(container.textContent).toContain('Noticia Test');
    expect(container.textContent).toContain('2026-10-10');
    expect(container.textContent).toContain('Contenido de prueba');
  });
});