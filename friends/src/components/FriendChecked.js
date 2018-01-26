export default function FriendChecked(friendKeys, name, age, email) {
	const isOkayToAdd = true;

	for (let i = 0; i < friendKeys.length; i++) {
		const friendEmail = friendKeys[i];

		if (friendEmail === email) {
			window.alert("New friend's email already exists in database.");
			return !isOkayToAdd;
		}
	}

	if (name === '' && age === '' && email === '') {
		window.alert("Please add friend's name, age, and email");
		return !isOkayToAdd;
	} else if (name === '' && age === '') {
		window.alert("Please add friend's name and age");
		return !isOkayToAdd;
	} else if (name === '' && email === '') {
		window.alert("Please add friend's name and email");
		return !isOkayToAdd;
	} else if (age === '' && email === '') {
		window.alert("Please add friend's age and email");
		return !isOkayToAdd;
	} else if (name === '') {
		window.alert("Please add friend's name");
		return !isOkayToAdd;
	} else if (age === '') {
		window.alert("Please add friend's age");
		return !isOkayToAdd;
	} else if (email === '') {
		window.alert("Please add friend's email");
		return !isOkayToAdd;
	} else if (!email.includes('@') && !email.includes('.')) {
		window.alert("Please check friend's email for @ and .");
		return !isOkayToAdd;
	} else if (!email.includes('@')) {
		window.alert("Please check friend's email for @");
		return !isOkayToAdd;
	} else if (!email.includes('.')) {
		window.alert("Please check friend's email for .");
		return !isOkayToAdd;
	} else if (email.length < 7) {
		// e.g. c@c.co = 6 chars
		window.alert('Please enter a valid email');
		return !isOkayToAdd;
	} // add more checks for correct email formatting char@char.char

	return isOkayToAdd;
}
