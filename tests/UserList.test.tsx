import { render, screen } from '@testing-library/react'
import { User } from '../src/entities'
import UserList from '../src/components/UserList'

const mockUsers: User[] = [
  {
    id: 1, 
    name: 'Frank',
    isAdmin: true
  },
  {
    id: 2,
    name: 'Alice',
    isAdmin: false
  }
]

describe( 'UserList', () => {
  it('should render the List users', () => {
    render(<UserList users={mockUsers} />)
    screen.debug()
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    expect(list.children).toHaveLength(mockUsers.length)

    mockUsers.forEach(user => {
      const link = screen.getByRole('link', {name: user.name})
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/users/${user.id}`)
    })
  })
  it('should render no users available when no users are provided', ()=>{
    render(<UserList users={[]} />)
    expect(screen.getByText(/no users/i)).toBeInTheDocument()
  })
})