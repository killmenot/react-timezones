import { useContext } from 'react'
import TimezoneContext from './TimezoneContext'

export default () => {
  const { timezones, timezone } = useContext(TimezoneContext)

  return {
    timezones,
    timezone,
  }
}
