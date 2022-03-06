import { Icon } from 'components/Icon'
import { Tag } from 'components/Tag'
import React from 'react'

export const Category = () => {
  return (
    <div className="category">
      <label className="category__label">Category</label>
      <div className="category__wrapper">
        <div className="category__field">
          <div className="category__tags">
            <Tag size="small">Strategy</Tag>
            <Tag size="small">+3</Tag>
          </div>
        </div>
        <div className="category__icon">
          <Icon name="arrow-right" />
        </div>
      </div>
    </div>
  )
}
