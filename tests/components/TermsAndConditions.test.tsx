import {  render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'

describe('TermsAndConditions', () => {
  it('should render with correct text and initial state', ()=>{
    render(<TermsAndConditions />)
    screen.debug()
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("Terms & Conditions")
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
    const submitBtn = screen.getByRole('button', {name: /submit/i})
    expect(submitBtn).toBeInTheDocument()
    expect(submitBtn).toBeDisabled()
  })
  it.todo('should render the accept button', ()=>{})
  it.todo('should render the decline button', ()=>{})
 })