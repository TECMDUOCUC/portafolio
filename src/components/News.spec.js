import React from 'react';
import { createRoot } from 'react-dom/client';
import newsData from "../data/newsData.json";
import NewsSection from "./News"

describe('Pruebas de renderizado de Noticias usando datos JSON', () => {
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

  it('debe renderizar correctamente la sección "Noticias Principales" desde el JSON', async () => {
    root.render(
      <NewsSection
        sectionTitle="Noticias Principales"
        items={newsData.principales}
      />
    );

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(container.textContent).toContain('Noticias Principales');

    newsData.principales.forEach((item) => {
      expect(container.textContent).toContain(item.titulo);
      expect(container.textContent).toContain(item.fecha);
      expect(container.textContent).toContain(item.contenido);
    });
  });

  it('debe renderizar correctamente la sección "Innovación y Tecnología" desde el JSON', async () => {
    root.render(
      <NewsSection
        sectionTitle="Innovación y Tecnología"
        items={newsData.tecnologia}
      />
    );

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(container.textContent).toContain('Innovación y Tecnología');

    newsData.tecnologia.forEach((item) => {
      expect(container.textContent).toContain(item.titulo);
      expect(container.textContent).toContain(item.fecha);
      expect(container.textContent).toContain(item.contenido);
    });
  });
});