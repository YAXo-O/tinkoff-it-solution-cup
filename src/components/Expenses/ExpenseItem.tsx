import * as React from 'react';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import { indigo } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

import { Card } from '@app/entities/Card';
import { WithId } from '@app/entities/service/WithId';
import { Expense } from '@app/entities/Expense';

interface ExpenseItemProps {
	item: Expense;

	onChange: (item: Partial<Card> & WithId) => void;
	onDelete: () => void;
}

export const ExpenseItem: React.FC<ExpenseItemProps> = (props: ExpenseItemProps) => {
	return (
		<ListItem
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
						placeholder="Название расхода"
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
			/>
		</ListItem>
	);
};
