// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, className, description} = bannerCardDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
