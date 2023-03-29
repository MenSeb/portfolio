<div align="center">
    <img
        alt="React Widgets"
        height="250"
        width="250"
        src="./src/assets/logo.svg"
    />
    <h1>
        React Theme
    </h1>
    <p>
        Light and Dark theme with React.
    </p>
</div>

<hr>

## How to use

You can pass any props to `ThemeButton` and `ThemeIcon` i.e. `className`, `style`, etc.

```jsx
import {
  useThemeContext,
  ThemeButton,
  ThemeIcon,
  ThemeProvider,
} from '@menseb/theme';

export function App() {
  return (
    <ThemeProvider>
      <ThemeButton>
        <ThemeIcon />
      </ThemeButton>
    </ThemeProvider>
  );
}

export function Component() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <span>Current theme: {theme}</span>
    </div>
  );
}
```

## How it works

On load, check if theme is stored in localStorage.

- If true, loads theme from localStorage;
- If false, loads theme from user system preference;

On `toggleTheme` or `MediaQuery onChange`, updates theme and saves to localStorage.
