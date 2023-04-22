import * as React from 'react';
import { useSelector } from 'react-redux';

import { indigo } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

import { AppState } from '@app/store/states/AppState';
import { isPresent } from '@app/entities/service/Nullable';

export const ExpansesPane: React.FC = () => {
	const card = useSelector((state: AppState) => state.card.item);
	if (!isPresent(card)) return null;

	return (
		<Box
			sx={{
				borderTopRightRadius: 8,
				borderBottomRightRadius: 8,
				backgroundColor: indigo['100'],
				overflow: 'hidden',
			}}
		>
			<Toolbar
				disableGutters
				sx={{
					px: 2,
					m: 0,
					backgroundColor: indigo['300'],
					color: indigo['100'],
				}}
			>
				<Stack direction="column" spacing={1}>
					<Typography sx={{ color: '#fff', fontSize: '1em' }}>Список расходов</Typography>
					<Typography sx={{ color: '#ddd', fontSize: '0.8em' }}>Карта {card.name}</Typography>

				</Stack>
				<Box sx={{ flex: 1 }} />
				<Button
					variant="text"
					sx={{
						color: indigo['50'],
					}}
					startIcon={<AddIcon />}
				>
					Добавить
				</Button>
			</Toolbar>
			<Box sx={{ p: 2 }}>
				Траты
			</Box>
		</Box>
	);
};
