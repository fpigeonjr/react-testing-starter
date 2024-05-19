import {render, screen} from '@testing-library/react'
import Greet from '../../src/components/Greet'


describe('Greet', () => {
  it('should render the name when provided', () => {
    render(<Greet name='Frank'/>)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/frank/i)
  })
  it('should render login button when name is not provided', () => {
    render(<Greet/>)
    const loginButton = screen.getByRole('button')
    expect(loginButton).toBeInTheDocument()
    expect(loginButton).toHaveTextContent(/login/i)
  })
})