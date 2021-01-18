export const uploadAuthorizeStatus = (authorizeStatus) => {
    localStorage.authorizeStatus = authorizeStatus
}

export const uploadUserData = (userData) => {

    const newUser = { ...userData }.email;
    const data = JSON.stringify(userData)

    if (localStorage.length) {
        for (let i = 0; i < localStorage.length; i++) {
            const user = localStorage.key(i);
            if (user !== newUser) {
                localStorage.setItem(newUser, data);
            } else {
                console.log(`Пользователь с email: ${newUser} уже существует`)
            }
        }
    } else {
        localStorage.setItem(newUser, data);
    }
}

export const localStorageUserFinder = (email, password) => {
    for (let i=0; i<localStorage.length; i++) {
        if (localStorage.key(i) === email) {
            const currentUser = JSON.parse(localStorage[email])
            if (currentUser.password === password) {
                return true
            }
        }
    }
}
