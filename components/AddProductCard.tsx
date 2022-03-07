import { Button } from 'components/Button'

export const AddProductCard = () => {
  return (
    <div className="add-product-card">
      <div className="add-product-card__wrapper">
        <div className="add-product-card__text">
          You can add a product card by clicking on the button
        </div>
        <div className="add-product-card__button">
          <Button size="large" variant="primary" icon="plus-circle">
            Add card
          </Button>
        </div>
      </div>
    </div>
  )
}
