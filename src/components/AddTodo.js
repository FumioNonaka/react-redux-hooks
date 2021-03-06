import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
	let input;
	return (
		<div>
			<form onSubmit={(event) => {
				event.preventDefault();
				const text = input.value.trim();
				input.value = '';
				if (!text) {
					return;
				}
				dispatch(addTodo(text));
			}}>
				<input ref={(element) => input = element} />
				<button type="submit">
					Add Todo
				</button>
			</form>
		</div>
	);
};

AddTodo.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);
