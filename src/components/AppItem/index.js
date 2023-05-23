import './index.css'

const AppItem = props => {
  const {appListItem} = props
  const {appName, imageUrl} = appListItem
  return (
    <li className="listContainer">
      <img src={imageUrl} alt={appName} className="imageEl" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
