// Сохранение текущего состояния приложения при перезагрузке страницы

export const saveState = (state) => {
    try {
        const preservedState = JSON.stringify(state);
        localStorage.setItem('appState', preservedState);
    } catch (error) {
        console.log(`Возникла непредвиденная ошибка ${error.name}: ${error.value}. Call sequence: ${error.stack}`);
    }
};

export const loadState = () => {
    try {
        if (localStorage['appState']) {
            const preservedState = JSON.parse(localStorage['appState']);
            preservedState.profileSaveReducer.profileSave = false;
            return preservedState;
        }
        return undefined;
    } catch (error) {
        console.log(`Возникла непредвиденная ошибка ${error.name}: ${error.value}. Call sequence: ${error.stack}`);
        return undefined;
    }
};

export const unloadState = () => {
    try {
        if (localStorage['appState']) {
            localStorage.removeItem('appState');
            localStorage.removeItem('token');
            localStorage.removeItem('currentUserProfileData');
        }
    } catch (error) {
        console.log(`Возникла непредвиденная ошибка ${error.name}: ${error.value}. Call sequence: ${error.stack}`)
    }
}