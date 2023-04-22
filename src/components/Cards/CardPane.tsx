import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import { indigo } from '@mui/material/colors';

import { Card, CardType } from '@app/entities/Card';
import { Nullable } from '@app/entities/service/Nullable';
import { CardItem } from '@app/components/Cards/CardItem';

const mock: Array<Card> = [
	{
		id: 'Credit Card',
		name: '****-****-****-0022',
		limit: null,
		type: CardType.Credit,
	},
	{
		id: 'Debit Card',
		name: '****-****-****-1410',
		limit: 500,
		type: CardType.Debit,
	},
];

export const CardPane: React.FC = () => {
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
					color: indigo['50'],
				}}
			>
				<Typography>Список доступных карт</Typography>
			</Toolbar>
			<Box sx={{ p: 2 }}>
				<List dense>
					{
						mock.map((item: Card) => (
							<CardItem
								key={item.id}
								item={item}
								selected={item.id === selected}
								onSelect={() => setSelected(item.id)}
							/>
						))
					}
				</List>
			</Box>
		</Box>
	);
};
