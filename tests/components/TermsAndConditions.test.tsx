import {  render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndConditions', () => {
  const renderComponent = () => {render(<TermsAndConditions />)
    return {
      heading: screen.getByRole('heading'),
      checkbox: screen.getByRole('checkbox'),
      submitBtn: screen.getByRole('button', {name: /submit/i})
    }
  }
  it('should render with correct text and initial state', ()=>{
    const {checkbox, heading, submitBtn } = renderComponent()
    
    expect(heading).toHaveTextContent("Terms & Conditions")
    expect(checkbox).not.toBeChecked()
    expect(submitBtn).toBeDisabled()
  })
  it('should enable the button when the checkbox is checked', async()=>{
    const {checkbox, submitBtn } = renderComponent()
    
    const user = userEvent.setup()
    await user.click(checkbox)

    expect(submitBtn).toBeEnabled()
  })
})