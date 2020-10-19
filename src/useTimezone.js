import { useContext } from 'react'
import TimezoneContext from './TimezoneContext'

export default () => {
  const { timezone, setTimezone } = useContext(TimezoneContext)

  return {
    timezone,
    setTimezone
  }
}
