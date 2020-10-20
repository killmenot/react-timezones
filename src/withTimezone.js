import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import getDisplayName from './utils/getDisplayName'
import TimezoneContext from './TimezoneContext'

const withTimezone = (Component) => {
  const WrappedComponent = React.forwardRef((props, ref) => (
    <TimezoneContext.Consumer>
      {(context) => {
        return (
          <Component
            {...props}
            ref={ref}
            timezone={context.timezone}
            setTimezone={context.setTimezone}
          />
        )
      }}
    </TimezoneContext.Consumer>
  ))

  if (process.env.NODE_ENV !== 'production') {
    WrappedComponent.displayName = `WithTimezone(${getDisplayName(Component)})`
  }

  hoistNonReactStatics(WrappedComponent, Component)

  return WrappedComponent
}

export default () => (Component) => withTimezone(Component)
