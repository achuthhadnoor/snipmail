const Finish = ({ isLoading, verify }) => {

    return (
        <form onSubmit={verify}>
            <button type="submit" disabled={isLoading}>Get Started</button>
        </form>
    )
}

export default Finish;