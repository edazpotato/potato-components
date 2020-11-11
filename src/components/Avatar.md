A rounded picture.
The first letter of the `alt` text is used if an image isn't found. If an alt text isn't found, it falls back to a generic profile image.

```jsx
import React from 'react';
import Avatar from "./Avatar";

<React.Fragment>
	<Avatar src="https://edazpotato.github.io/assets/avatar.png" />
	<Avatar alt="Epic gamer avatar" />
	<Avatar />
</React.Fragment>
```