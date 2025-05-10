

# chrono-lingo

A package for displaying the difference between dates in a human-readable format with localization and timezone support.

## Installation

```bash
npm install chrono-lingo
```


### example

```javascript
import { humanTimeDiff } from 'chrono-lingo';

const result = humanTimeDiff('2025-05-10T10:00:00Z', new Date(), {
  locale: 'ru',
  timeZone: 'Europe/Moscow',
});

console.log(result); // "2 часа назад"
```
