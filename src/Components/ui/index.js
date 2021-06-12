export const Input = (props) => <input className="p-2 my-4 rounded outline-none focus:ring-1 focus:ring-yellow-500 disabled:bg-gray-300" {...props} />
export const Button = ({ value, ...rest }) => <button {...rest} className="px-4 py-2 disabled:bg-gray-100 text-gray-400 border-2 border-gray-400  rounded-lg hover:bg-white hover:border-white outline-none focus:ring-1 focus:ring-yellow-500">{value}</button>

