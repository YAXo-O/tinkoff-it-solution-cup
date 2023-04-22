import * as React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AppState } from '@app/store/states/AppState';
import { isPresent } from '@app/entities/Nullable';

import { LoginScreen } from '@app/screens/user/LoginScreen';

export const HomeScreen: React.FC = () => {
	const user = useSelector((state: AppState) => state.user.item);
	if (!isPresent(user)) return <LoginScreen />;

	return (
		<Box>
			<Typography>
				Имя: {user?.firstName}
				Фамилия: {user?.lastName}
			</Typography>
		</Box>
	);
};
