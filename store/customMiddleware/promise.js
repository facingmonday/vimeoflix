const isPromise = val =>
	val && typeof val.then === 'function';

export default ({ dispatch }) => next => (action) => {
	if (!isPromise(action.payload)) {
        return next(action);
	}

	dispatch({
		...action,
		payload: null,
		loading: true,
		error: null,
	});

	return action.payload.then(
		payload => dispatch({
			...action,
			payload,
			loading: false,
			error: null,
		}),
		error => dispatch({
			...action,
			payload: null,
			loading: false,
			error,
		}),
	);
};

export const getDefaultAsyncState = (info = {}) => ({
	loading: false,
	error: null,
	...info,
});