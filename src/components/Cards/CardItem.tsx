import * as React from 'react';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

import { indigo } from '@mui/material/colors';

import { Card, toString } from '@app/entities/Card';

interface CardItemProps {
	item: Card;

	selected: boolean;
	onSelect: () => void;
}

export const CardItem: React.FC<CardItemProps> = (props: CardItemProps) => {
	return (
		<ListItem
			sx={{
				cursor: 'pointer',
				transition: 'background 0.5s ease',
				borderRight: props.selected ? 4 : 0,
				borderColor: indigo['300'],
				borderTopLeftRadius: 3,
				borderBottomLeftRadius: 3,
				overflow: 'hidden',

				backgroundColor: props.selected ? indigo['200'] : undefined,
				'&:hover': {
					backgroundColor: indigo['200'],
				},
			}}
			onClick={() => props.onSelect()}
		>
			<ListItemText
				primary={props.item.name}
				secondary={toString(props.item.type)}
			/>
		</ListItem>
	);
};
