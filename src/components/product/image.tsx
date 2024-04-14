import { useProduct } from '@/components/product/context'

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui'
import Image from 'next/image'

export const ProductImage = (props: ExperiencesProps<HTMLDivElement>) => {
  const { product } = useProduct()

  const {
    title,
    images: { nodes: images },
  } = product

  const showBtn = images.length > 1

  return (
    <Carousel {...props}>
      {showBtn && <CarouselPrevious />}
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem className='flex justify-center' key={image.id}>
            <Image
              className='rounded-2xl'
              src={image.url}
              alt={title}
              width={715}
              height={715}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {showBtn && <CarouselNext />}
    </Carousel>
  )
}
