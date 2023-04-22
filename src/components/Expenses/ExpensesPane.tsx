import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { indigo } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

import { AppState } from '@app/store/states/AppState';
import { isPresent } from '@app/entities/service/Nullable';
import { Expense, getDefaultExpense } from '@app/entities/Expense';
import { ExpenseItem } from '@app/components/Expenses/ExpenseItem';
import { WithId } from '@app/entities/service/WithId';
import { listActionFactory } from '@app/store/actions/ListActions';

export const ExpensesPane: React.FC = () => {
	const card = useSelector((state: AppState) => state.card.item);
	const expenses = useSelector((state: AppState) => state.expenses.list);
	const dispatch = useDispatch();

	if (!isPresent(card)) return null;

	const list = expenses.filter((item: Expense) => item.cardId === card.id);

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
					onClick={() => {
						if (!isPresent(card)) return;

						dispatch(listActionFactory('expenses').push(getDefaultExpense(card.id)));
					}}
				>
					Добавить
				</Button>
			</Toolbar>
			<Box sx={{ p: 2 }}>
				{
					list.length ? (
						list.map((item: Expense) => (
							<ExpenseItem
								key={item.id}
								item={item}
								onChange={(item: Partial<Expense> & WithId) => {
									dispatch(listActionFactory('expenses').update(item));
								}}
								onDelete={() => {
									dispatch(listActionFactory('expenses').remove(item.id));
								}}
							/>
						))
					) : <Typography>Список трат пуст</Typography>
				}
			</Box>
		</Box>
	);
};
