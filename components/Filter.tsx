import { Button } from 'components/Button'
import { Category } from 'components/Category'
import { Search } from 'components/Search'
import { Sort } from 'components/Sort'
import { Tag } from 'components/Tag'

export const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="filter__search">
          <Search />
        </div>
        <div className="filter__items">
          <div className="filter__item">
            <Category />
          </div>
          <div className="filter__item">
            <Sort />
          </div>
        </div>
        <div className="filter__button">
          <Button size="medium" variant="ghost" icon="filter">
            Filters
          </Button>
        </div>
      </div>
      <div className="filter__tags">
        <Tag size="medium">Strategy</Tag>
        <Tag size="medium">RPG</Tag>
        <Tag size="medium">Action</Tag>
        <Tag size="medium">Shooter</Tag>
        <Tag size="medium">Clear all</Tag>
      </div>
    </div>
  )
}
