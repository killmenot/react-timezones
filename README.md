# react-timezones

React-timezones is a library which provides a way to manage timezones to your web apps.

> NOTE: Current status: alpha


Table of Contents
--
- [How to use](#how-to-use)
- [License](#license)

## Getting Started

Use your preferred package manager:
```
npm install react-timezones
yarn add react-timezones
```

### How to use

**1:** Wrap your app inside a `TimezoneProvider` component:
```jsx
import { TimezoneProvider } from 'react-timezones';

<TimezoneProvider>
    <App />
</TimezoneProvider>

```

**2:** Export any component that needs timezones using `withTimezones`.

```javascript
import React from 'react'
import { withTimezones } from 'react-timezones'

const MyComponent = (props) => {
  const { timezones, timezone } = props
  
  // ...
  
  return (null)
}

export default withTimezones(MyComponent)
```

## License

    The MIT License (MIT)

    Copyright (c) Alexey Kucherenko

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
