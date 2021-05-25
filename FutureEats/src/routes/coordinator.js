export const goToHome = (history) => {
    history.push("/feed")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToRegisterProfile = (history) => {
    history.push("/register/profile")
}

export const goToRegisterAdress = (history) => {
    history.push("/register/adress")
}

export const goToCart = (history) => {
    history.push("/cart")
}

export const goToSearch = (history) => {
    history.push("/search")
}

export const goToRestaurant = (history, id) => {
    history.push(`/restaurant/${id}`)
}

export const goToProfile = (history) => {
    history.push("/profile")
}

export const goToEditProfile = (history) => {
    history.push("/profile/edit/profile")
}

export const goToEditAdress = (history) => {
    history.push("/profile/edit/adress")
}

export const goToLastPage = (history) => {
    history.goBack()
}

export const goToLogout = (history) => {
    localStorage.clear()
    history.replace("/login")
}