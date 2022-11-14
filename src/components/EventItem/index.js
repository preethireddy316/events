// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onEventClick, activeEventId} = props
  const {id, imageUrl, name, location} = eventDetails
  const clsName = id === activeEventId ? 'img-border' : ''
  const eventClick = () => {
    onEventClick(id)
  }

  return (
    <li>
      <button type="button" onClick={eventClick}>
        <img className={clsName} src={imageUrl} alt="event" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
