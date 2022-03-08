import { Category } from '@prisma/client'
import cn from 'classnames'
import { Icon } from 'components/Icon'
import fetcher from 'lib/fetcher'
import React from 'react'
import useSWR from 'swr'

interface BadgeProps extends React.ComponentProps<'div'> {
  label: string
  isDiscount?: boolean
}

export const Badge = ({ label, isDiscount, ...props }: BadgeProps) => {
  const { data: category, error } = useSWR<Category>(`/api/categories/${label}`, fetcher)
  if (error) return <div>Error</div>
  if (!category) return <div>Loading</div>

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
      {!isDiscount ? (
        <>
          <div className="badge__icon">
            <Icon name="dot" />
          </div>
          <span className="badge__label">{category.name}</span>
        </>
      ) : (
        <span className="badge__label">{label}</span>
      )}
    </div>
  )
}
