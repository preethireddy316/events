// Write your code here
const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderRegisterView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </>
  )

  const closedView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </>
  )

  const registeredView = () => (
    <>
      <h1>You have already registered for the event</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
    </>
  )

  const noView = () => (
    <p>Click on an event, to view its registration details</p>
  )

  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      return renderRegisterView()
    case 'REGISTRATIONS_CLOSED':
      return closedView()
    case 'REGISTERED':
      return registeredView()
    default:
      return noView()
  }
}

export default ActiveEventRegistrationDetails
