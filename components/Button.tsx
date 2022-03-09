import cn from 'classnames'
import { Icon } from 'components/Icon'
import React from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
  size?: 'large' | 'medium' | 'small'
  variant: 'primary' | 'ghost' | 'destructive'
  icon?: string
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
}

export const Button = ({
  size = 'small',
  variant,
  icon,
  iconPosition = 'left',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn('button', {
        ['button--primary']: variant == 'primary',
        ['button--ghost']: variant == 'ghost',
        ['button--destructive']: variant == 'destructive',
        ['button--large']: size == 'large',
        ['button--medium']: size == 'medium',
        ['button--small']: size == 'small',
      })}
      type="button"
      {...props}
    >
      {icon && (
        <div
          className={cn('button__icon', {
            ['button__icon--left']: iconPosition == 'left',
            ['button__icon--right']: iconPosition == 'right',
          })}
        >
          <Icon name={icon} />
        </div>
      )}
      <span className="button__label">{children}</span>
    </button>
  )
}
