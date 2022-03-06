import { Icon } from './Icon'

export const Search = () => {
  return (
    <div className="search">
      <label className="search__label">Search for games</label>
      <div className="search__wrapper">
        <div className="search__icon">
          <Icon name="search" />
        </div>
        <input
          className="search__field"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          maxLength={150}
        />
      </div>
    </div>
  )
}
