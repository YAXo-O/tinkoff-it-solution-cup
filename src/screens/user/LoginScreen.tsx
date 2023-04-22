import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import {
	Formik,
	Field,
	FieldProps,
	Form,
} from 'formik';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { indigo } from '@mui/material/colors';

import LoginIcon from '@mui/icons-material/Login';

import { User } from '@app/entities/User';
import { itemActionFactory } from '@app/store/actions/ItemActions';

type FormValues = User;

const initial: FormValues = {
	firstName: '',
	lastName: '',
};

const schema = Yup.object()
	.shape({
		firstName: Yup.string().required('Имя - обязательное поле'),
		lastName: Yup.string().required('Фамилия - обязательное поле'),
	});

export const LoginScreen: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<Formik<FormValues>
			initialValues={initial}
			validationSchema={schema}
			onSubmit={(values: FormValues) => {
				dispatch(itemActionFactory.set(values));
			}}
		>
			<Form>
				<Container
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100vh',
					}}
				>
					<Box
						sx={{
							borderTopRightRadius: 4,
							borderBottomRightRadius: 4,
							borderLeft: 4,
							borderColor: indigo['800'],
							backgroundColor: indigo['50'],
							p: 2,
							maxWidth: 320,
						}}
					>
						<Stack direction="row" spacing={2}>
							<Stack direction="column" spacing={2}>
								<Field
									name="firstName"
									render={(props: FieldProps<string, FormValues>) => (
										<TextField
											label="Имя*"
											value={props.field.value}
											onChange={
												(event: React.ChangeEvent<HTMLInputElement>) =>
													props.form.setFieldValue(props.field.name, event.currentTarget.value, false)
											}
											helperText={props.meta.error}
											error={Boolean(props.meta.error)}
											size="small"
										/>
									)}
								/>
								<Field
									name="lastName"
									render={(props: FieldProps<string, FormValues>) => (
										<TextField
											label="Фамилия*"
											value={props.field.value}
											onChange={
												(event: React.ChangeEvent<HTMLInputElement>) =>
													props.form.setFieldValue(props.field.name, event.currentTarget.value, false)
											}
											helperText={props.meta.error}
											error={Boolean(props.meta.error)}
											size="small"
										/>
									)}
								/>
							</Stack>
							<Button
								variant="outlined"
								type="submit"
								size="small"
							>
								<LoginIcon />
							</Button>
						</Stack>
					</Box>
				</Container>
			</Form>
		</Formik>
	);
};
