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
        ['badge--primary']: label == 'shooter',
        ['badge--red']: label == 'mmo-rpg',
        ['badge--orange']: label == 'action',
        ['badge--green']: label == 'card-game',
        ['badge--gray']: label == 'strategy',
        ['badge--blue']: label == 'action-rpg',
        ['badge--discount']: isDiscount,
      })}
      {...props}
    >
      {!isDiscount && (
        <>
          <div className="badge__icon">
            <Icon name="dot" />
          </div>
        </>
      )}
      <span className="badge__label">{label}</span>
    </div>
  )
}
