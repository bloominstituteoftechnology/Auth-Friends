export const localState = () => {
    try {
        const local = localStorage.getItem('reduxFriends');
        if (local === null) return;
        return JSON.parse(local);
    }
    catch (err) {
        return;
    }
};

export const saveState = (state) => {
    try {
        const local = JSON.stringify(state);
        localStorage.setItem('reduxFriends', local);
    }
    catch (err) {
        console.error(err);
    }
}