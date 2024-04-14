import { Button, ButtonProps } from '@/components/ui'
import { useRouter } from 'next/router'

export interface ProductCTA
  extends Omit<ButtonProps, 'onClick' | 'onMouseDown'>,
    ExperiencesProps {}

export const ProductCTA = (props: ProductCTA) => {
  const router = useRouter()
  const { handle, ...rest } = router.query

  const disabled = Object.keys(rest).length === 0

  return <Button {...props} disabled={disabled} />
}
