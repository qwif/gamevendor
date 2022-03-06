import { Button } from './Button'

export const Banner = () => {
  return (
    <div className="banner">
      <picture className="banner__cover">
        <source srcSet="/images/banner-cover-l.png" media="(min-width: 1280px)" />
        <source srcSet="/images/banner-cover-m.png" media="(min-width: 1024px)" />
        <source srcSet="/images/banner-cover-s.png" media="(min-width: 520px)" />
        <img src="/images/banner-cover-xs.png" />
      </picture>
      <picture className="banner__extra">
        <source srcSet="/images/banner-cover-extra-l.png" media="(min-width: 1280px)" />
        <img src="/images/banner-cover-extra-m.png" />
      </picture>
      <div className="banner__body">
        <div className="banner__title">Refer a friends and get $10 off!</div>
        <div className="banner__description">
          Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27.
        </div>
        <div className="banner__bottom">
          <Button size="large" variant="ghost">
            Invite a friend
          </Button>
        </div>
      </div>
    </div>
  )
}
