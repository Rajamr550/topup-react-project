// app.test.js
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import { Payment } from './Payment'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

test('full app rendering/navigating', async () => {
    render(<Payment />, { wrapper: BrowserRouter })
    const user = userEvent.setup()

    // verify page content for default route
    expect(screen.getByText(/Home/i)).toBeInTheDocument()

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/Home/i))
    expect(screen.getByText(/Plans/i)).toBeInTheDocument()
})

// test('landing on a bad page', () => {
//     const badRoute = '/some/bad/route'

//     // use <MemoryRouter> when you want to manually control the history
//     render(
//         <MemoryRouter initialEntries={[badRoute]}>
//             <Payment />
//         </MemoryRouter>,
//     )

//     // verify navigation to "no match" route
//     expect(screen.getByText(/no match/i)).toBeInTheDocument()
// })

// test('rendering a component that uses useLocation', () => {
//     const route = '/some-route'

//     // use <MemoryRouter> when you want to manually control the history
//     render(
//         <MemoryRouter initialEntries={[route]}>
//             <LocationDisplay />
//         </MemoryRouter>,
//     )

//     // verify location display is rendered
//     expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// })
















// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { createMemoryHistory } from 'history'
// import React from 'react'
// import { Router } from 'react-router-dom'
// import '@testing-library/jest-dom'
// import { Payment } from './Payment'

// // React Router v5

// test('full Payment rendering/navigating', async () => {
//     const history = createMemoryHistory()
//     render(
//         <Router history={history}>
//             <Payment />
//         </Router>,
//     )
//     const user = userEvent.setup()
//     // verify page content for expected route
//     // often you'd use a data-testid or role query, but this is also possible
//     expect(screen.getByText(/Home/i)).toBeInTheDocument()

//     await user.click(screen.getByText(/Home/i))

//     // check that the content changed to the new page
//     expect(screen.getByText(/TopUp Plans/i)).toBeInTheDocument()
// })

// // test('landing on a bad page', () => {
// //     const history = createMemoryHistory()
// //     history.push('/some/bad/route')
// //     render(
// //         <Router history={history}>
// //             <Payment />
// //         </Router>,
// //     )

// //     expect(screen.getByText(/no match/i)).toBeInTheDocument()
// // })w