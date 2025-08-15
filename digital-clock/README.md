# Digital Clock Component

A simple React component that displays a digital clock with hours, minutes, seconds, and AM/PM indicator.

## Features

- Real-time clock updates every second
- 12-hour time format with AM/PM indicator
- Zero-padded numbers for consistent display
- Clean unmounting with cleared intervals

## Installation

Add this component to your React project:

```jsx
import DigitalClock from './DigitalClock';
```

## Usage

Simply include the component in your React application:

```jsx
function App() {
    return (
        <div>
            <DigitalClock />
        </div>
    );
}
```

## Component Structure

The component uses:
- `useState` to manage the current time
- `useEffect` for setting up and cleaning the timer interval
- Helper functions for time formatting

## CSS Requirements

The component expects the following CSS classes:
- `.clock-container`
- `.clock`

Style these classes to customize the clock's appearance.

## Functions

### `formatTime()`
Converts the current time to a 12-hour format string.

### `padZero(number)`
Adds leading zeros to numbers less than 10.

## License

MIT License
