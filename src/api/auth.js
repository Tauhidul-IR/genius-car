export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }

    //get the JWT token
    fetch('https://genius-car-server-pi.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //local store in not best place to store token but it is easy.
            localStorage.setItem('genius-token', data.token)
            // navigate(from, { replace: true })
        })
}