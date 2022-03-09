import { Button } from 'components/Button'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__newsletter newsletter">
          <div className="newsletter__header">
            <div className="newsletter__title">Join our newsletter</div>
            <div className="newsletter__description">
              We`ll send you a nice letter one per week. No spam.
            </div>
          </div>
          <div className="newsletter__form">
            <input
              className="newsletter__input"
              type="email"
              placeholder="Enter email"
              maxLength={320}
            />
            <div className="newsletter__button">
              <Button size="large" variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <nav className="footer__navigation footer-navigation">
          <div className="footer-navigation__category">
            <div className="footer-navigation__title">Categories</div>
            <div className="footer-navigation__links">
              <Link href="/">
                <a>Strategy</a>
              </Link>
              <Link href="/">
                <a>Action</a>
              </Link>
              <Link href="/">
                <a>Shooter</a>
              </Link>
              <Link href="/">
                <a>Card Game</a>
              </Link>
              <Link href="/">
                <a>Simulator</a>
              </Link>
              <Link href="/">
                <a>RPG</a>
              </Link>
              <Link href="/">
                <a>Multiplayer</a>
              </Link>
            </div>
          </div>
          <div className="footer-navigation__category">
            <div className="footer-navigation__title">Company</div>
            <div className="footer-navigation__links">
              <Link href="/">
                <a>About us</a>
              </Link>
              <Link href="/">
                <a>Careers</a>
              </Link>
              <Link href="/">
                <a>Press</a>
              </Link>
              <Link href="/">
                <a>News</a>
              </Link>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </div>
          </div>
          <div className="footer-navigation__category">
            <div className="footer-navigation__title">Legal</div>
            <div className="footer-navigation__links">
              <Link href="/">
                <a>Terms</a>
              </Link>
              <Link href="/">
                <a>Privacy</a>
              </Link>
              <Link href="/">
                <a>Cookies</a>
              </Link>
              <Link href="/">
                <a>Licenses</a>
              </Link>
              <Link href="/">
                <a>Settings</a>
              </Link>
            </div>
          </div>
          <div className="footer-navigation__category">
            <div className="footer-navigation__title">Socials</div>
            <div className="footer-navigation__links">
              <Link href="/">
                <a>Twitter</a>
              </Link>
              <Link href="/">
                <a>Facebook</a>
              </Link>
              <Link href="/">
                <a>Dribbble</a>
              </Link>
              <Link href="/">
                <a>GitHub</a>
              </Link>
            </div>
          </div>
        </nav>
        <div className="footer__copyright">Copyright © GameVendor, 2022</div>
      </div>
    </footer>
  )
}
