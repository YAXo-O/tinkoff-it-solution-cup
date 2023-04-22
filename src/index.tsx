import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@app/App';

const container = document.getElementById('app-container');
if (container) {
	const root = createRoot(container);
	root.render(<App />);
} else {
	console.warn('React root container is not found - there should be an element with #app-container id');
}


