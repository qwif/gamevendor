import { Button } from 'components/Button'
import { Icon } from 'components/Icon'

export const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__wrapper">
        <button className="pagination__button pagination__button--left pagination__button--inactive">
          <Icon name="arrow-right" />
        </button>
        <button className="pagination__button pagination__button--active">
          <span>1</span>
        </button>
        <button className="pagination__button">
          <span>2</span>
        </button>
        <button className="pagination__button">
          <span>3</span>
        </button>
        <button className="pagination__button">
          <span>4</span>
        </button>
        <button className="pagination__button">
          <span>5</span>
        </button>
        <button className="pagination__button pagination__button--inactive">
          <span>...</span>
        </button>
        <button className="pagination__button">
          <span>99</span>
        </button>
        <button className="pagination__button pagination__button--right">
          <Icon name="arrow-right" />
        </button>
      </div>
      <div className="pagination__show-more">
        <Button size="large" variant="ghost">
          Show more
        </Button>
      </div>
    </div>
  )
}
