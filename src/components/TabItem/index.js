import './index.css'

const TabItem = props => {
  const {eachList, isActive, onClickTab} = props
  const {displayText, tabId} = eachList
  const onChangeTab = () => {
    onClickTab(tabId)
  }
  const isActiveTab = isActive ? 'activeTab' : ''
  return (
    <li className="listItem1">
      <button
        type="submit"
        className={`tabClass ${isActiveTab}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
