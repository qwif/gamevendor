import cn from 'classnames'
import { Icon } from 'components/Icon'
import React from 'react'

interface BadgeProps extends React.ComponentProps<'div'> {
  label: string
  isDiscount?: boolean
}

export const Badge = ({ label, isDiscount, ...props }: BadgeProps) => {
  return (
    <div
      className={cn('badge', {
        ['badge--primary']: label == 'Shooter',
        ['badge--red']: label == 'Multiplayer RPG',
        ['badge--orange']: label == 'Action',
        ['badge--green']: label == 'Card Game',
        ['badge--gray']: label == 'Strategy',
        ['badge--blue']: label == 'Action RPG',
        ['badge--discount']: isDiscount,
      })}
      {...props}
    >
      {!isDiscount && (
        <div className="badge__icon">
          <Icon name="dot" />
        </div>
      )}
      <span className="badge__label">{label}</span>
    </div>
  )
}
