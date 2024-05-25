import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event'

describe('ExpandableText', () => {
  const LIMIT = 255;
  const LONG_TEXT = 'a'.repeat(LIMIT + 1)
  const TRUNCATED_TEXT = LONG_TEXT.substring(0, LIMIT) + '...'

  it('should render text not expanded  when text is less than 255 ', ()=>{
    render(<ExpandableText text='Hello World'/>)
    
    const article = screen.getByRole('article')
    const btn = screen.queryByRole('button')
    
    expect(article).toBeInTheDocument()
    expect(article).toHaveTextContent('Hello World')
    expect(btn).not.toBeInTheDocument()
  })
  it('should render text expanded when text is more than 255', ()=>{
    render(<ExpandableText text={LONG_TEXT}/>)
    
    const article = screen.getByRole('article')
    const btn = screen.getByRole('button')
    expect(article).toHaveTextContent(TRUNCATED_TEXT)
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent(/more/i)
  })
  it('should expand when button is clicked', async ()=>{
    render(<ExpandableText text={LONG_TEXT}/>)
    
    const article = screen.getByRole('article')
    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent(/more/i)
    await userEvent.click(btn)

    expect(article).toHaveTextContent(LONG_TEXT)
    expect(btn).toHaveTextContent(/less/i)
  })
  it('should collapse when button is clicked', async ()=>{
    render(<ExpandableText text={LONG_TEXT}/>)
    const article = screen.getByRole('article')
    const showMoreBtn = screen.getByRole('button', {name: /more/i})
    await userEvent.click(showMoreBtn)
    
    const showLessBtn = screen.getByRole('button', {name: /less/i})
    await userEvent.click(showLessBtn)
    
    expect(article).toHaveTextContent(TRUNCATED_TEXT)
    expect(showMoreBtn).toBeInTheDocument()
  })
 })