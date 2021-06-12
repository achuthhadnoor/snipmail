import { Input } from "../../../Components/ui";

const Signup = ({ isLoading, email, passwordOne, passwordTwo, onChange, verify, back }) => {
    return (
        <div className="flex  min-h-screen">
            <form onSubmit={verify} className="flex flex-col flex-1 m-4 justify-ceter">
                <div className="flex flex-col mx-auto justify-center flex-1 align-middle">
                    <h1 className="text-4xl my-4">Welcome to <span className="text-yellow-500">Snipmail</span></h1>
                    <p>Takes few seconds to setup!</p>
                    <Input
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}
                        required={true}
                        className="p-2 my-4"
                        placeholder="email@address.com"
                    />
                    <Input
                        name="passwordOne"
                        type="password"
                        value={passwordOne}
                        onChange={onChange}
                        required={true}
                        className="p-2 my-4"
                        placeholder="Enter password"
                    />
                    <Input
                        name="passwordTwo"
                        type="password"
                        value={passwordTwo}
                        onChange={onChange}
                        required={true}
                        className="p-2 my-4"
                        placeholder="Re-enter password"
                    />
                </div>
                <div className="flex flex-row-reverse">
                    <button type="submit" disabled={email.length === 0 || isLoading ? true : false} className="px-4 py-2 text-gray-400 border-2 border-gray-400  rounded-lg hover:bg-white hover:border-white">Next</button>
                    <span className="flex-1" />
                    <button type="submit" className="px-4 py-2 text-gray-400 border-2 border-gray-400  rounded-lg hover:bg-white hover:border-white">Back</button>
                </div>
            </form>
            <div className="bg-gray-300 m-4 rounded flex-1 justify-center items-center flex">
                <div className="gol">
                    sdfsd
                </div>
            </div>
        </div>
    )
}

export default Signup;