import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TimezoneContext from './TimezoneContext'

class TimezoneProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timezone: props.timezone,
    }
  }

  setTimezone(timezone) {
    this.setState({ timezone })
  }

  render() {
    const { timezones, idName, children } = this.props
    const { timezone } = this.state

    const setTimezone = this.setTimezone.bind(this)

    const contextValue = {
      timezones,
      timezone,
      idName,
      setTimezone,
    }

    return (
      <TimezoneContext.Provider value={contextValue}>
        {children}
      </TimezoneContext.Provider>
    )
  }
}

TimezoneProvider.propTypes = {
  children: PropTypes.node.isRequired,
  timezones: PropTypes.instanceOf(Object).isRequired,
  timezone: PropTypes.string,
  idName: PropTypes.string,
}

TimezoneProvider.defaultProps = {
  timezone: 'UTC',
  idName: '',
}


export default TimezoneProvider
