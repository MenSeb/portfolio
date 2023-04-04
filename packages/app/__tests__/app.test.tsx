import * as React from 'react';
import { act, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  MemoryRouter,
  Route,
  Routes,
  RouterProvider,
  createRoutesFromElements,
  createMemoryRouter,
} from 'react-router-dom';
import { routes } from '../src/router';
import { About, Error as ErrorPage, Home, Layout, Lost } from '../src/pages';

describe('<App />', () => {
  describe('<Layout />', () => {
    beforeEach(() =>
      render(
        <MemoryRouter>
          <Routes>{routes}</Routes>
        </MemoryRouter>,
      ),
    );

    it('renders with header', () => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('renders with main', () => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders with footer', () => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  describe('<Home />', () => {
    beforeEach(() =>
      render(
        <MemoryRouter>
          <Routes>{routes}</Routes>
        </MemoryRouter>,
      ),
    );

    it('renders with home page', () => {
      expect(
        screen.getByRole('region', { name: 'home page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<About />', () => {
    beforeEach(() =>
      render(
        <MemoryRouter>
          <Routes>{routes}</Routes>
        </MemoryRouter>,
      ),
    );

    it('renders with about page', async () => {
      const user = userEvent.setup();

      await act(async () => {
        await user.click(screen.getByText(/about/i));
      });

      expect(
        screen.getByRole('region', { name: 'about page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<Lost />', () => {
    beforeEach(() =>
      render(
        <MemoryRouter initialEntries={['/test']}>
          <Routes>{routes}</Routes>
        </MemoryRouter>,
      ),
    );

    it('renders with lost page', () => {
      expect(
        screen.getByRole('region', { name: 'lost page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<Error />', () => {
    function Test() {
      throw new Error('test error');

      return <></>;
    }

    it('renders with error page', () => {
      const spy = jest.spyOn(console, 'error');

      spy.mockImplementation(() => null);

      const testRouter = createMemoryRouter(
        createRoutesFromElements(
          <Route element={<Layout />} path="/">
            <Route errorElement={<ErrorPage />}>
              <Route element={<Home />} index />
              <Route element={<About />} path="about" />
              <Route element={<Lost />} path="*" />
              <Route element={<Test />} path="test" />
            </Route>
          </Route>,
        ),
        { initialEntries: ['/test'] },
      );

      render(<RouterProvider router={testRouter} />);

      expect(
        screen.getByRole('region', { name: 'error page' }),
      ).toBeInTheDocument();

      spy.mockRestore();
    });
  });
});
