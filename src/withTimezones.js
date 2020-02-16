import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import getDisplayName from './utils/getDisplayName'
import keyBy from './utils/keyBy'
import TimezoneContext from './TimezoneContext'

const withTimezones = (Component) => {
  const WrappedComponent = React.forwardRef((props, ref) => (
    <TimezoneContext.Consumer>
      {(context) => {
        const timezonesIndexed = keyBy(context.timezones, context.idName)
        const timezoneLookup = (key) => timezonesIndexed[key]

        return (
          <Component
            {...props}
            ref={ref}
            timezones={context.timezones}
            timezone={context.timezone}
            timezoneLookup={timezoneLookup}
          />
        )
      }}
    </TimezoneContext.Consumer>
  ))

  if (process.env.NODE_ENV !== 'production') {
    WrappedComponent.displayName = `WithTimezones(${getDisplayName(Component)})`
  }

  hoistNonReactStatics(WrappedComponent, Component)

  return WrappedComponent
}

export default () => (Component) => withTimezones(Component)
