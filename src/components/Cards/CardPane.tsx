import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import { indigo } from '@mui/material/colors';

import { Card, getDefaultCard } from '@app/entities/Card';
import { Nullable } from '@app/entities/service/Nullable';
import { CardItem } from '@app/components/Cards/CardItem';
import { AppState } from '@app/store/states/AppState';
import { listActionFactory } from '@app/store/actions/ListActions';
import { WithId } from '@app/entities/service/WithId';

export const CardPane: React.FC = () => {
	const cards = useSelector((state: AppState) => state.cards.list);
	const dispatch = useDispatch();

	const [selected, setSelected] = React.useState<Nullable<string>>(() => null);

	return (
		<Box
			sx={{
				borderTopLeftRadius: 8,
				borderBottomLeftRadius: 8,
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
				<Typography sx={{ color: '#fff', padding: '6px 8px' }}>Список доступных карт</Typography>
				<Box sx={{ flex: 1 }} />
				<Button
					variant="text"
					sx={{
						color: indigo['50'],
					}}
					startIcon={<AddIcon />}
					onClick={() => {
						dispatch(listActionFactory.push(getDefaultCard()));
					}}
				>
					Добавить
				</Button>
			</Toolbar>
			<Box sx={{ p: 2 }}>
				<List dense>
					{
						cards.map((item: Card) => (
							<CardItem
								key={item.id}
								item={item}
								selected={item.id === selected}
								onSelect={() => setSelected(item.id)}
								onChange={(item: Partial<Card> & WithId) => dispatch(listActionFactory.update(item))}
								onDelete={() => dispatch(listActionFactory.remove(item.id))}
							/>
						))
					}
				</List>
			</Box>
		</Box>
	);
};
