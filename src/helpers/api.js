const serverLogin = async (email, password) => {
    let response = await fetch(
        'https://loft-taxi.glitch.me/auth',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ email: `${email}`, password: `${password}` })
        }
    );

    const data = await response.json();
    return succesHandler(data);
}

const serverSignUp = async (email, name, surname, password) => {
    let response = await fetch(
        'https://loft-taxi.glitch.me/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                { email: `${email}`, name: `${name}`, surname: `${surname}`, password: `${password}` }
            )
        }
    )

    const data = await response.json();

    return succesHandler(data);
}

const serverProfile = async (cardNumber, expiryDate, cardName, cvc) => {
    let response = await fetch(
        'https://loft-taxi.glitch.me/card',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                { cardNumber: `${cardNumber}`, expiryDate: `${expiryDate}`, cardName: `${cardName}`, cvc: `${cvc}`, token: "AUTH_TOKEN" }
            )
        }
    )

    const data = await response.json();

    return succesHandler(data);
}

const succesHandler = (data) => {
    if(data.success) {
        return data.success;
    } else {
        return console.log(data.error)
    }
}

const tryCatchWrapper = (handleError) => (requestFunc) => (...args) => requestFunc(...args).catch(handleError);

const handleError = (e) => console.log(`Что то пошло не так. Ошибка: ${e.error}`);

const errorHandlerWrapper = tryCatchWrapper(handleError);

export const safelyServerLogin = errorHandlerWrapper(serverLogin);

export const safelyServerSignUp = errorHandlerWrapper(serverSignUp);

export const safelyServerProfile = errorHandlerWrapper(serverProfile);