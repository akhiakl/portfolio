import { IconType } from '@/types'
import React, { createElement } from 'react'

interface IconSetProps {
  icons: IconType[]
}

const IconSet = ({ icons }: IconSetProps): JSX.Element => (
  <>
    {icons.map((iconItem, i) => {
      const icon =
        typeof iconItem === 'string' ? `devicon-${iconItem}` : `${iconItem.type}-${iconItem.icon}`
      const title = icon.split('-')[1]
      const isLink = typeof iconItem !== 'string' && iconItem?.link
      return createElement(isLink ? 'a' : 'i', {
        title,
        className: icon,
        key: `${icon}-icon-set-${i}`,
        href: isLink ? iconItem?.link : undefined,
        target: isLink ? '_blank' : undefined,
      })
    })}
  </>
)

export default IconSet
