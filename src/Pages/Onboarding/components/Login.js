const Login = ({ isLoading, email, passwordOne, onChange, verify, back }) => {

    return (
        <form onSubmit={verify}>
            <input
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                required={true}
                disabled={true}
            />
            <input
                name="passwordOne"
                type="password"
                value={passwordOne}
                onChange={onChange}
                required={true}
            />
            <button type="" onClick={back}>back</button>
            <button type="submit" disabled={passwordOne.length === 0 || isLoading ? true : false}>next</button>
        </form>
    )
}

export default Login;