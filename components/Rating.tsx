import cn from 'classnames'
import { Icon } from 'components/Icon'
import React from 'react'

interface RatingProps extends React.ComponentProps<'div'> {
  value: number
}

export const Rating = ({ value, ...props }: RatingProps) => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>))

  React.useEffect(() => {
    constructRating(value)
  }, [value])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rating: JSX.Element, index: number) => {
      return (
        <Icon
          className={cn('rating__star', { ['rating__star--fill-100']: index < currentRating })}
          name="star"
          key={index}
        />
      )
    })
    setRatingArray(updatedArray)
  }

  return (
    <div className="rating" {...props}>
      {ratingArray.map((rating) => rating)}
    </div>
  )
}
