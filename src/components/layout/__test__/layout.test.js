//  libraries
import { cleanup, screen, within } from '@testing-library/react';

// app
import renderWithRedux from 'tools/testingTools/renderWithRedux';
import Layout from '../Layout';

afterEach(cleanup);

describe('Header tests', () => {
  const noData = '...';

  it('Has the subtitles', () => {
    renderWithRedux(<Layout><></></Layout>);
    const name = screen.getByText(/Nombre/);
    expect(name).toBeInTheDocument();
    within(name).getByText(noData);

    const idCard = screen.getByText(/Cedula/);
    expect(idCard).toBeInTheDocument();
    within(name).getByText(noData);

    const date = screen.getByText(/Fecha de nacimiento/);
    expect(date).toBeInTheDocument();
    within(date).getByText(noData);

    const email = screen.getByText(/Email/);
    expect(email).toBeInTheDocument();
    within(email).getByText(noData);

    const github = screen.getByText(/Github/);
    expect(github).toBeInTheDocument();
    within(email).getByText(noData);
  });
});
