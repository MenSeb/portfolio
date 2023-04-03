import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { ThemeButtonToggle } from '../../src/components';
import { THEME_STORAGE_KEY } from '../../src/constants';
import { createRender, getButton } from '..';

const renderButtonToggle = createRender(ThemeButtonToggle);

describe('<ThemeButtonToggle />', () => {
  it('renders with attribute data-theme set to theme', () => {
    renderButtonToggle();

    expect(getButton()).toHaveAttribute('data-theme', 'light');
  });

  it('renders with aria-pressed to false when the theme is light', () => {
    renderButtonToggle();

    expect(getButton()).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders with aria-pressed to true when the theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    renderButtonToggle();

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with click handler to toggle the theme', async () => {
    renderButtonToggle();

    expect(getButton()).toHaveAttribute('data-theme', 'light');

    await act(async () => {
      await userEvent.click(getButton());
    });

    expect(getButton()).toHaveAttribute('data-theme', 'dark');
  });
});
