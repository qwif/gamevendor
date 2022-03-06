import React from 'react'

import { Icon } from './Icon'

export const Sort = () => {
  return (
    <div className="sort">
      <label className="sort__label">Sort by</label>
      <div className="sort__wrapper">
        <div className="sort__field">Popular</div>
        <div className="sort__icon">
          <Icon name="arrow-right" />
        </div>
      </div>
    </div>
  )
}
