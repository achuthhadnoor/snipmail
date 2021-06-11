const Signup = ({ isLoading, email, passwordOne, passwordTwo, onChange, verify, back }) => {
    return (
        <form onSubmit={verify}>
            <input
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                required={true}
            />
            <input
                name="passwordOne"
                type="password"
                value={passwordOne}
                onChange={onChange}
                required={true}
            />
            <input
                name="passwordTwo"
                type="password"
                value={passwordTwo}
                onChange={onChange}
                required={true}
            />
            <button type="submit" onClick={back}>previous</button>
            <button type="submit" disabled={passwordTwo.length === 0 || passwordTwo.length === 0 ? true : passwordTwo === passwordOne ? false : isLoading}>next</button>
        </form>
    )
}

export default Signup;