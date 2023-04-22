import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { lightBlue, indigo } from '@mui/material/colors';

import LogoutIcon from '@mui/icons-material/Logout';

import { AppState } from '@app/store/states/AppState';
import { isPresent } from '@app/entities/Nullable';
import { itemActionFactory } from '@app/store/actions/ItemActions';

export const LayoutScreen: React.FC = () => {
	const user = useSelector((state: AppState) => state.user.item);
	const dispatch = useDispatch();

	if (!isPresent(user)) return null;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" sx={{ backgroundColor: indigo['800'] }}>
				<Toolbar>
					<Typography variant="h5">
						Учёт Расходов
					</Typography>
					<Box sx={{ flex: 1 }} />
					<Stack direction="column" spacing={1}>
						<Typography
							sx={{
								color: '#fff',
								px: 1,
							}}
						>
							{user.firstName} {user.lastName}
						</Typography>
						<Button
							variant="text"
							size="small"
							sx={{
								color: lightBlue['50'],
								px: 1,
							}}
							startIcon={<LogoutIcon />}
							onClick={() => dispatch(itemActionFactory.clear())}
						>
							Сменить пользователя
						</Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
