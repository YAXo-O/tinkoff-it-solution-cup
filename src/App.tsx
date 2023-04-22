import * as React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Box from '@mui/material/Box';
import { indigo } from '@mui/material/colors';

import { store } from '@app/store';
import { HomeScreen } from '@app/screens/HomeScreen';

const router = createBrowserRouter([{
	path: '/',
	element: <HomeScreen />,
}]);

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					backgroundColor: indigo['200'],
				}}
			>
				<RouterProvider router={router} />
			</Box>
		</Provider>
	);
};
