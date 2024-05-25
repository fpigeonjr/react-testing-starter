import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

const imageUrls = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg'
]

describe('ProductImageGallery', () => { 
  it('should not render if no images are passed', () =>{
   const {container} =  render(<ProductImageGallery imageUrls={[]} />)
    expect(container).toBeEmptyDOMElement()

  })
  it('should render a list of images', () => {
    render(<ProductImageGallery imageUrls={imageUrls} />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(imageUrls.length)
    images.forEach((image, index) => {
      expect(image).toHaveAttribute('src', imageUrls[index])
    })
   })
})