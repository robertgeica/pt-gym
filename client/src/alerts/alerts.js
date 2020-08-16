import Swal from 'sweetalert2';
import withReactcontent from 'sweetalert2-react-content';

const Alert = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: false,
	onOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	}
});

export const addWeekAlert = () => {
	Alert.fire({
		icon: 'success',
		title: 'Week added successfully'
	});
};

export const deleteWeekAlert = () => {
	Alert.fire({
		icon: 'success',
		title: 'Week deleted successfully'
	});
};

export const updateWeekAlert = () => {
	Alert.fire({
		icon: 'success',
		title: 'Week updated successfully'
	});
};

export const addCommentAlert = () => {
	Alert.fire({
		icon: 'success',
		title: 'Comment added successfully'
	});
};

export const removeCommentAlert = () => {
	Alert.fire({
		icon: 'success',
		title: 'Comment removed successfully'
	});
};

export const loginSuccessAlert = () => {
	Alert.fire({
		icon: 'success',
		title: 'Welcome back!'
	});
};

export const loginErrorAlert = () => {
	Alert.fire({
		icon: 'error',
		title: 'Bad credentials!'
	});
};

export const registerSuccessAlert = () => {
	Alert.fire({
		icon: 'success',
		title: 'All good! Welcome!'
	});
};

export const registerErrorAlert = () => {
	Alert.fire({
		icon: 'error',
		title: 'Bad input!'
	});
};

export const invalidInputAlert = () => {
	Alert.fire({
		icon: 'error',
		title: 'Invalid input!'
	});
};
