import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToDo from './index.js';

describe('ToDo Tests', () => {    
    let button, input;

    beforeEach( () => {
        render(<ToDo />)

        button = screen.getByText('Add');
        input = screen.getByLabelText('ToDo');

    })

    test("Varsayılan öğeler ekranda mı?", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    })

    test("Button ve Input dokümanda bulunmalı", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })
    
    test("Input'a string girilip butona basılınca listeye eklenmeli", () => {
        const name = "Gizem";
        userEvent.type(input, name);

        userEvent.click(button);
        expect(screen.getByText(name)).toBeInTheDocument();
    })
})