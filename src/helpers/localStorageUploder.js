// Локальная регистрация пользователя и поиск пользователей в localStorage при логине

export const uploadUserData = (token) => {
    const data = JSON.stringify(token)

    localStorage.setItem("token", data);
}

export const uploadProfileData = (profileData) => {
    localStorage.currentUserProfileData = JSON.stringify(profileData);
}
