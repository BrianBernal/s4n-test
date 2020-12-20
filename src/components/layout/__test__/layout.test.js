//  libraries
import { screen } from '@testing-library/react';

// app
import renderGeneralApp from 'tools/renderGeneralApp';
import Layout from '../Layout';

describe('Header tests', () => {
  it('Renders the subtitles', () => {
    renderGeneralApp(<Layout><h1>Fake children</h1></Layout>);
    const name = screen.getByText(/Nombre/);
    expect(name).toBeInTheDocument();
    const idCard = screen.getByText(/Cedula/);
    expect(idCard).toBeInTheDocument();
    const date = screen.getByText(/Fecha de nacimiento/);
    expect(date).toBeInTheDocument();
    const email = screen.getByText(/Email/);
    expect(email).toBeInTheDocument();
    const github = screen.getByText(/Github/);
    expect(github).toBeInTheDocument();
  });
});
