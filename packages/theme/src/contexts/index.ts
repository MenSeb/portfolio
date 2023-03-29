import * as React from 'react';
import { ThemeStore } from '../types';

export default React.createContext<ThemeStore | null>(null);
