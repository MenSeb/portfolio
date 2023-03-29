import * as React from 'react';
import { ThemeStore } from './types';

export const ThemeContext = React.createContext<ThemeStore | null>(null);
