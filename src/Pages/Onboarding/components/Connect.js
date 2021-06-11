const Connect = ({ isLoading, verify }) => {

    return (
        <form onSubmit={verify}>
            <button type="submit" disabled={isLoading}>Connect your google account</button>
        </form>
    )
}

export default Connect;