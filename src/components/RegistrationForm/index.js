import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    isFormSubmitted: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      firstNameInput: '',
      lastNameInput: '',
      isFormSubmitted: false,
    })
  }

  renderSuccessForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submit-status">Submitted Successfully</p>
      <button
        type="button"
        className="btn-submit-another-response"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  validateInput = nameInput => {
    if (nameInput !== '') {
      return true
    }
    return false
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstNameInput} = this.state
    const isFirstNameValid = this.validateInput(firstNameInput)

    this.setState({showFirstNameError: !isFirstNameValid})
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const inputStyle = showFirstNameError
      ? 'input-style error-input-style'
      : 'input-style'

    return (
      <div className="input-label-container">
        <label htmlFor="firstName" className="label-name">
          FIRST NAME
        </label>
        <input
          type="text"
          className={inputStyle}
          id="firstName"
          placeholder="First name"
          value={firstNameInput}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onBlurLastName = () => {
    const {lastNameInput} = this.state
    const isLastNameValid = this.validateInput(lastNameInput)

    this.setState({showLastNameError: !isLastNameValid})
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state

    const inputStyle = showLastNameError
      ? 'input-style error-input-style'
      : 'input-style'

    return (
      <div className="input-label-container">
        <label htmlFor="lastName" className="label-name">
          LAST NAME
        </label>
        <input
          type="text"
          className={inputStyle}
          id="lastName"
          placeholder="Last name"
          value={lastNameInput}
          onBlur={this.onBlurLastName}
          onChange={this.onChangeLastName}
        />
      </div>
    )
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {firstNameInput, lastNameInput} = this.state
    const isValidFirstName = this.validateInput(firstNameInput)
    const isValidLastName = this.validateInput(lastNameInput)
    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form" onSubmit={this.onSubmitDetails}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-name">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-name">Required</p>}
        <button
          className="btn-submit"
          type="submit"
          onSubmit={this.onSubmitForm}
        >
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="reg-form-container">
        <h1 className="title">Registration</h1>
        {isFormSubmitted
          ? this.renderSuccessForm()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
