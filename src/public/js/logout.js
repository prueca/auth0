const logout = () => auth.logout({ returnTo: LOGOUT_REDIRECT_URI })

$(() => $('#logout').on('click', logout))