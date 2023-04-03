import { ThemeIconDark } from '../../src';
import { THEME_STORAGE_KEY } from '../../src/constants';
import { createRender, getIcon, getIconPath } from '..';

const renderIconDark = createRender(ThemeIconDark);

describe('<ThemeIconDark />', () => {
  it('renders a path for the dark icon', () => {
    renderIconDark();

    expect(getIconPath()).toBeInTheDocument();
  });

  it('renders with attribute viewBox to "-12 -12 24 24"', () => {
    renderIconDark();

    expect(getIcon()).toHaveAttribute('viewBox', '-12 -12 24 24');
  });

  it('renders with attribute data-theme to dark', () => {
    renderIconDark();

    expect(getIcon()).toHaveAttribute('data-theme', 'dark');
  });

  it('renders with attribute data-hidden to false when theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    renderIconDark();

    expect(getIcon()).toHaveAttribute('data-hidden', 'false');
  });

  it('renders with attribute data-hidden to true when theme is light', () => {
    renderIconDark();

    expect(getIcon()).toHaveAttribute('data-hidden', 'true');
  });
});
