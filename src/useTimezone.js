import { useContext } from 'react'
import TimezoneContext from './TimezoneContext'

export default () => {
  const { timezone } = useContext(TimezoneContext)

  return {
    timezone,
  }
}
