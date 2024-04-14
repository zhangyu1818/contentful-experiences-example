import { AspectRatio } from '@/components/ui'
import Image from 'next/image'
import { contentfulLoader } from '@/utils/image-loader'

export interface BannerProps extends ExperiencesProps {
  image: string
}

export const Banner = (props: BannerProps) => {
  const { image, ...rest } = props
  return (
    <AspectRatio ratio={3} {...rest}>
      <Image
        priority
        className='h-full w-full rounded-lg object-cover shadow-xl'
        loader={contentfulLoader}
        width={1920}
        height={640}
        src={image}
        alt='Home Banner Image'
      />
    </AspectRatio>
  )
}
