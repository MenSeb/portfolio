import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { ThemeButtonLight } from '../../src/components';
import { THEME_STORAGE_KEY } from '../../src/constants';
import { createRender, getButton } from '..';

const renderButtonLight = createRender(ThemeButtonLight);

describe('<ThemeButtonLight />', () => {
  it('renders with attribute data-theme to light', () => {
    renderButtonLight();

    expect(getButton()).toHaveAttribute('data-theme', 'light');
  });

  it('renders with aria-pressed to true when theme is light', () => {
    renderButtonLight();

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with aria-pressed to false when theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    renderButtonLight();

    expect(getButton()).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders with click handler to set the theme to light', async () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    renderButtonLight();

    await act(async () => {
      await userEvent.click(getButton());
    });

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');

    await act(async () => {
      await userEvent.click(getButton());
    });

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });
});
