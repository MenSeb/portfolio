import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { ThemeButton } from '../../src/components';
import { createRender, getButton } from '..';

const renderThemeButton = createRender(ThemeButton);

describe('<ThemeButton />', () => {
  it('renders as a button', () => {
    renderThemeButton();

    expect(getButton()).toBeInTheDocument();
  });

  it('renders with attribute aria-live to polite', () => {
    renderThemeButton();

    expect(getButton()).toHaveAttribute('aria-live', 'polite');
  });

  it('renders with attribute aria-label when provided', () => {
    renderThemeButton({ label: 'label' });

    expect(getButton()).toHaveAttribute('aria-label', 'label');
  });

  it('renders with attribute aria-labelledby when provided', () => {
    renderThemeButton({ labelledby: 'labelledby' });

    expect(getButton()).toHaveAttribute('aria-labelledby', 'labelledby');
  });

  it('renders with attribute title when provided', () => {
    renderThemeButton({ title: 'title' });

    expect(getButton()).toHaveAttribute('title', 'title');
  });

  it('renders with click handler', async () => {
    const user = userEvent.setup();
    const click = jest.fn();

    renderThemeButton({ click });

    await act(async () => {
      await user.click(getButton());
    });

    expect(click).toHaveBeenCalled();
  });

  it('renders with attribute aria-pressed', () => {
    renderThemeButton({ pressed: true });

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });
});
