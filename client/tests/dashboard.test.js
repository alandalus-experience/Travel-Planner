import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

describe("Dashboard", () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
        expect(
            screen.getByText("New Trip")
        ).toBeInTheDocument();
    })
});