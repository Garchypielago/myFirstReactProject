function LoginComponent(props) {

    const user = {
        userName: "Alejandro",
        email: "alejandro@gmail.com"
    }

    const handleClick = () => {
        props.handleLogin(user);
    }

    return (
        <section>
            <h2>Login Section</h2>
            <button onClick={handleClick}>Log in</button>
        </section>
    )
}

export default LoginComponent