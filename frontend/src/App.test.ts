import { render, screen } from '@testing-library/svelte';
import App from './App.svelte';
import { describe, test, expect } from 'vitest';
import { vi } from 'vitest'

describe('App.svelte', () => {
  test('renders heading', () => {
    render(App);
    const loading = screen.getByText('Loading…')
    expect(loading).toBeTruthy();
  }),
  test('date', async () => {
    render(App);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const today = new Date();
    let currentDate = today.toLocaleDateString('en-US', options);
    const date = await screen.getByText(currentDate)
    expect(date).toBeTruthy();
  }),
  test('NYT API', async() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ 
          response: {
              docs: [
                {
                  headline: { main: 'Test Headline' },
                  abstract: 'Test summary',
                  multimedia: { default: { url: '/image.jpg' } }
                }
              ]
            }
          })
      })
    ) as unknown as typeof fetch;
  
    render(App);
    const heading = await screen.findByRole('heading', { name: 'Test Headline' });
    expect(heading).toBeTruthy();
    const abstract = await screen.findByText('Test summary');
    expect(abstract).toBeTruthy();
    const multimedia = await screen.findByRole('img', { name: 'Test Headline' });
    expect(multimedia).toBeTruthy();
  });
});
