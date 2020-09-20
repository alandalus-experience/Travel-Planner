import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

describe("Home", () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(
            screen.getByRole("heading", { name: "App Overview" })
        ).toBeInTheDocument();
    })
});