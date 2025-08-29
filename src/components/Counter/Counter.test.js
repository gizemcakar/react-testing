import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './index.js';

describe('Counter Tests', () => {           // describe ile testleri gruplayabiliriz.
    let increaseButton, decreaseButton, count;

    beforeEach( () => {                     // her testten önce çalışır.
        console.log("I'll run before each test");
        render(<Counter />)
        increaseButton = screen.getByText('Increase');
        decreaseButton = screen.getByText('Decrease');
        count = screen.getByText('0');
    })

    beforeAll(() =>{                        // sadece bir kez çalışır.
        console.log("I'll run once before all tests at the beginning");

    })
    
    afterEach( () => {                    // her testten sonra çalışır.
        console.log("I'll run after each test");
    })

    afterAll(() => {                       // sadece bir kez çalışır.
        console.log("I'll run once after all tests at the end");
    })

    test('increase button', () => {
        userEvent.click(increaseButton);
        expect(count).toHaveTextContent('1');
    })

    test('decrease button', () => {
        userEvent.click(decreaseButton);
        expect(count).toHaveTextContent('-1');
    })
});



/*  İki ayrı test ama aynı işlev olduğu için describe ile gruplayabiliriz.

test('increase button', () => {
    render( <Counter /> );

    const count = screen.getByText('0')
    const increaseButton = screen.getByText('Increase');

    userEvent.click(increaseButton);
    expect(count).toHaveTextContent('1');

})

test('decrease button', () => {
    render( <Counter /> );
    const count = screen.getByText('0')
    const decreaseButton = screen.getByText('Decrease');
    userEvent.click(decreaseButton);
    expect(count).toHaveTextContent('-1');
})

** test etmek için terminal > npm test */