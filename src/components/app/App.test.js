import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
let container = null;
describe("App", () => {

  beforeEach(() => {
    // configurar o elemento do DOM como o alvo da renderização
    container = document.createElement("div");
    // container *deve* ser anexado ao documento para que os eventos ocorram corretamente.
    document.body.appendChild(container);

  })

  afterEach(() => {
    // limpar na saída
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test("App renderiza", () => {
    const { getByText, baseElement } = render(<App/>, container);
    expect(baseElement).toBeInTheDocument();
  })

})