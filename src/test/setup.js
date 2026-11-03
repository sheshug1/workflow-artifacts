import '@testing-library/jest-dom/vitest'
import { JSDOM } from 'jsdom'

if (typeof window.localStorage === 'undefined') {
  const storage = new JSDOM('', { url: 'http://localhost' }).window.localStorage
  Object.defineProperty(window, 'localStorage', { configurable: true, value: storage })
}
