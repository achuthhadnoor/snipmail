const VerifyEmail = ({ isLoading, email, onChange, verify }) => {

    return (
        <form onSubmit={verify}>
            <input
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                required={true}
            />
            <button type="submit" disabled={email.length === 0 || isLoading ? true : false}>next</button>
        </form>
    )
}

export default VerifyEmail;