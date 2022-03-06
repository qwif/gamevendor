import cn from 'classnames'
import { Icon } from 'components/Icon'
import React from 'react'

interface TagProps extends React.ComponentProps<'div'> {
  size: 'medium' | 'small'
  children: React.ReactNode
}

export const Tag = ({ size, children, ...props }: TagProps) => {
  return (
    <div
      className={cn('tag', { ['tag--medium']: size == 'medium', ['tag--small']: size == 'small' })}
      {...props}
    >
      <span className="tag__label">{children}</span>
      <div className="tag__icon">
        <Icon name="close" />
      </div>
    </div>
  )
}
