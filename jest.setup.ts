export const spyAddEventListener = jest.fn();
export const spyRemoveEventListener = jest.fn();

export function defineMatchMedia() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: mockMatchMedia(),
  });
}

export function mockMatchMedia(mediaQuery?: string | string[]) {
  return jest.fn((query: string) => ({
    matches: mediaQuery === undefined ? false : mediaQuery.includes(query),
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: spyAddEventListener,
    removeEventListener: spyRemoveEventListener,
    dispatchEvent: jest.fn(),
  }));
}

beforeAll(() => defineMatchMedia());
afterEach(() => {
  spyAddEventListener.mockReset();
  spyRemoveEventListener.mockReset();
});
