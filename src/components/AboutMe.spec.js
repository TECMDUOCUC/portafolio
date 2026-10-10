import React from 'react';
import { createRoot } from 'react-dom/client';
import AboutMe from './AboutMe';

describe('AboutMe Component', () => {
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

  it('renders technical skills and contact button', async () => {
    root.render(<AboutMe />);
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(container.textContent).toContain('Soy un desarollador Fullstack, me especializo en crear interfaces limpias y fáciles de usar, junto con código eficiente y limpio. Actualmente estudio en DUOC UC, sin embargo, previamente habia estudiado electrónica en mi liceo, por lo que también tengo conocimientos de robótica, desarrollo de placas, modelaje en 3d y soldaduras de componentes eletrónicos. Llevo programando desde el año 2024, sin embargo, todos los días aprendo algo nuevo.Habilidades que poseoReactViteBootstrapAWSLuauBlenderProteus 8Android StudioGodotPythonArduinoLinuxHTMLCSSJavaScriptAudacityOracle SQLJavaKotlinSpringbootOracle Cloud InfrastructurePóngase en contacto conmigo.');
    expect(container.textContent).toContain('React');
    expect(container.textContent).toContain('Vite');

    const buttons = container.querySelectorAll('a, button');
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });
});