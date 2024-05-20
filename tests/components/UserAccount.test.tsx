import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

const adminAccount: User = {
  id: 1,
  name: 'Frank',
  isAdmin: true
}
const userAccount: User = {
  id: 2,
  name: 'Alice',
  isAdmin: false
}

describe('User', () => {
  it('should display the name of the person logged in', () => {
    render(<UserAccount user={adminAccount}/>)
    const name = screen.getByText(adminAccount.name)
    expect(name).toBeInTheDocument()
  })
  it('should display edit button when admin', () => {
    render(<UserAccount user={adminAccount}/>)
    const editButton = screen.getByRole('button')
    expect(editButton).toBeInTheDocument()
    expect(editButton).toHaveTextContent(/edit/i)
  })
  it('should not display edit button for non-admin', () => {
    render(<UserAccount user={userAccount}/>)
    const editButton = screen.queryByRole('button')
    expect(editButton).not.toBeInTheDocument()
  })
})