import { useContext } from 'react'
import TimezoneContext from './TimezoneContext'

export default () => {
  const { timezones } = useContext(TimezoneContext)

  return {
    timezones,
  }
}
