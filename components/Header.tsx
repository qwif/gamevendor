import { Icon } from 'components/Icon'
import { Navigation } from 'components/Navigation'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="header">
      <div className="banner">
        <button className="banner__arrow banner__arrow--inactive" type="button">
          <Icon name="arrow-right" />
        </button>
        <Link href="#">
          <a className="banner__text">Refer a friend and get $10 off! 🔥 Offer ends February 27!</a>
        </Link>
        <button className="banner__arrow" type="button">
          <Icon name="arrow-right" />
        </button>
      </div>
      <div className="header__content container">
        <div className="location">
          <div className="location__icon">
            <Icon name="pin" />
          </div>
          <button type="button" className="location__button">
            Dublin, Republic of Ireland
          </button>
        </div>
        <div className="logo">
          <Link href="/">
            <a>
              <Icon name="logo" />
            </a>
          </Link>
        </div>
        <div className="controls">
          <ul className="controls__list">
            <li className="controls__item">
              <Link href="#">
                <a className="controls__link">
                  <Icon name="search" />
                </a>
              </Link>
            </li>
            <li className="controls__item">
              <Link href="#">
                <a className="controls__link">
                  <Icon name="user" />
                </a>
              </Link>
            </li>
            <li className="controls__item">
              <Link href="#">
                <a className="controls__link">
                  <Icon name="cart" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider divider--full"></div>
      <Navigation />
    </header>
  )
}
