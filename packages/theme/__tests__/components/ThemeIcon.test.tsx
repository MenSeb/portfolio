import { screen } from '@testing-library/react';
import { ThemeIcon } from '../../src/components';
import { getIcon, getImage, createRender } from '..';

const renderThemeIcon = createRender(ThemeIcon, { viewBox: 'viewBox' });

describe('<ThemeIcon />', () => {
  it('renders with attribute viewBox', () => {
    renderThemeIcon();

    expect(getIcon()).toHaveAttribute('viewBox', 'viewBox');
  });

  it('renders with attribute focusable to false', () => {
    renderThemeIcon();

    expect(getIcon()).toHaveAttribute('focusable', 'false');
  });

  it('renders with attribute aria-label when provided', () => {
    renderThemeIcon({ label: 'label' });

    expect(getImage()).toHaveAttribute('aria-label', 'label');
  });

  it('renders with attribute aria-labelledby when provided', () => {
    renderThemeIcon({ labelledby: 'labelledby' });

    expect(getImage()).toHaveAttribute('aria-labelledby', 'labelledby');
  });

  it('renders with title when provided', () => {
    renderThemeIcon({ title: 'title' });

    expect(getImage()).toContainElement(screen.getByTitle('title'));
  });

  it('renders with description when provided', () => {
    renderThemeIcon({ description: 'description' });

    expect(getImage()).toContainElement(screen.getByText('description'));
  });

  it('renders with attribute aria-hidden to true without any text', () => {
    renderThemeIcon();

    expect(getIcon()).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with attribute aria-hidden to false with label', () => {
    renderThemeIcon({ label: 'label' });

    expect(getImage()).toHaveAttribute('aria-hidden', 'false');
  });

  it('renders with attribute aria-hidden to false with labelledby', () => {
    renderThemeIcon({ labelledby: 'label' });

    expect(getImage()).toHaveAttribute('aria-hidden', 'false');
  });

  it('renders with attribute aria-hidden to false with title', () => {
    renderThemeIcon({ title: 'title' });

    expect(getImage()).toHaveAttribute('aria-hidden', 'false');
  });

  it('renders with attribute aria-hidden to false with description', () => {
    renderThemeIcon({ description: 'description' });

    expect(getImage()).toHaveAttribute('aria-hidden', 'false');
  });
});
