import * as React from 'react';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import { indigo } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

import { Card, toString, CardType } from '@app/entities/Card';
import { WithId } from '@app/entities/service/WithId';

interface CardItemProps {
	item: Card;

	selected: boolean;
	onSelect: () => void;

	onChange: (item: Partial<Card> & WithId) => void;
	onDelete: () => void;
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
			secondaryAction={(
				<IconButton
					edge="end"
					onClick={props.onDelete}
				>
					<DeleteIcon />
				</IconButton>
			)}
		>
			<ListItemText
				primary={(
					<TextField
						fullWidth
						value={props.item.name}
						onChange={
							(event: React.ChangeEvent<HTMLInputElement>) =>
								props.onChange({ id: props.item.id, name: event.currentTarget.value })
						}
						placeholder="Название Карты"
						size="small"
						sx={{
							'& .MuiInputBase-root': {
								padding: 0,

								fieldset: {
									border: 'none',
								},
							},

							'& .MuiInputBase-input': {
								padding: 0,
							},

							'&:hover': {
								'.MuiInputBase-input': {
									backgroundColor: indigo['100'],
								},
							},
						}}
					/>
				)}
				secondary={(
					<Stack direction="row" spacing={1} sx={{ py: 1 }}>
						<Chip
							label={toString(CardType.Debit)}
							variant={props.item.type === CardType.Debit ? 'filled' : 'outlined'}
							size="small"
							onClick={() => props.onChange({ id: props.item.id, type: CardType.Debit })}
						/>
						<Chip
							label={toString(CardType.Credit)}
							variant={props.item.type === CardType.Credit ? 'filled' : 'outlined'}
							onClick={() => props.onChange({ id: props.item.id, type: CardType.Credit })}
							size="small"
						/>
					</Stack>
				)}
			/>
		</ListItem>
	);
};
