export const validateUsername = (username) => {
    const regex = /^\S{6,12}$/

    return regex.test(username)
}

export const validateUsernameMessage = 'El nombre de usuario debe tener entre 6 y 12 caracteres'