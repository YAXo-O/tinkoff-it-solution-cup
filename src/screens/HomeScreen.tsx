import * as React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '@app/store/states/AppState';
import { isPresent } from '@app/entities/service/Nullable';

import { LoginScreen } from '@app/screens/user/LoginScreen';
import { LayoutScreen } from '@app/screens/internal/LayoutScreen';

export const HomeScreen: React.FC = () => {
	const user = useSelector((state: AppState) => state.user.item);
	if (!isPresent(user)) return <LoginScreen />;

	return (
		<LayoutScreen />
	);
};
