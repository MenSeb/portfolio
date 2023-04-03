import { ThemeIconLight } from '../../src';
import { THEME_STORAGE_KEY } from '../../src/constants';
import { createRender, getIcon, getIconPath } from '..';

const renderIconLight = createRender(ThemeIconLight);

describe('<ThemeIconLight />', () => {
  it('renders a path for the light icon', () => {
    const { container } = renderIconLight();

    expect(getIconPath(container)).toBeInTheDocument();
  });

  it('renders with attribute viewBox to "-12 -12 24 24"', () => {
    const { container } = renderIconLight();

    expect(getIcon(container)).toHaveAttribute('viewBox', '-12 -12 24 24');
  });

  it('renders with attribute data-theme to light', () => {
    const { container } = renderIconLight();

    expect(getIcon(container)).toHaveAttribute('data-theme', 'light');
  });

  it('renders with attribute data-hidden to false when theme is light', () => {
    const { container } = renderIconLight();

    expect(getIcon(container)).toHaveAttribute('data-hidden', 'false');
  });

  it('renders with attribute data-hidden to true when theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { container } = renderIconLight();

    expect(getIcon(container)).toHaveAttribute('data-hidden', 'true');
  });
});
