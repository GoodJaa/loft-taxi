const serverLogin = async (email, password, token) => {
    let response = await fetch(
        'https://loft-taxi.glitch.me/auth',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ email: `${email}`, password: `${password}`, token: `${token}` })
        }
    );

    const data = await response.json();
    return data;
}

const serverSignUp = async (email, name, surname, password, token) => {
    let response = await fetch(
        'https://loft-taxi.glitch.me/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                { email: `${email}`, name: `${name}`, surname: `${surname}`, password: `${password}`, token: `${token}` }
            )
        }
    )

    const data = await response.json();

    return data;
}

const serverProfile = async (cardNumber, expiryDate, cardName, cvc, token) => {
    let response = await fetch(
        'https://loft-taxi.glitch.me/card',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                { cardNumber: `${cardNumber}`, expiryDate: `${expiryDate}`, cardName: `${cardName}`, cvc: `${cvc}`, token: `${token}` }
            )
        }
    )

    const data = await response.json();
    console.log(data)
    return data;
}

const requestProfileData = async (token) => {
    let response = await fetch(
        `https://loft-taxi.glitch.me/card?token=${token}`
    )

    const data = response.json();
    return data;
}

const downloadAddressList = async () => {
    let response = await fetch(
        'https://loft-taxi.glitch.me/addressList'
    )

    const data = response.json();
    console.log(data)
    return data;
}

const tryCatchWrapper = (handleError) => (requestFunc) => (...args) => requestFunc(...args).catch(handleError);

const handleError = (e) => console.log(`Что то пошло не так. Ошибка: ${e.error}`);

const errorHandlerWrapper = tryCatchWrapper(handleError);

export const safelyServerLogin = errorHandlerWrapper(serverLogin);

export const safelyServerSignUp = errorHandlerWrapper(serverSignUp);

export const safelyServerProfile = errorHandlerWrapper(serverProfile);

export const safelyDownloadAddressList = errorHandlerWrapper(downloadAddressList);

export const safelyRequestProfileData = errorHandlerWrapper(requestProfileData);