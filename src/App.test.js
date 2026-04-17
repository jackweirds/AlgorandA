// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AlgorandASA title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AlgorandASA/i);
    expect(titleElement).toBeInTheDocument();
});
