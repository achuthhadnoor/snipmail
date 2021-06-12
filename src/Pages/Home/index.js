import { useState } from 'react';
import Icon from 'react-icons-kit'
import { power, chevronDown, mail, clock, activity, edit3, inbox, hardDrive, bookOpen, archive, send, alertTriangle, sliders } from 'react-icons-kit/feather'
import { withFirebase } from '../../lib/firebase';
function Main({ firebase }) {
    const [isOpen, setIsOpen] = useState(false)
    // Todo: check firebase user and redirect to login or connect page
    return (
        <div className="flex  space-x-2 items-center p-3">
            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 19.6667V4.94429C3 3.98901 4.21136 3.57758 4.79315 4.33527L10.5402 11.8198C10.9405 12.3411 11.7262 12.3411 12.1265 11.8198L17.8735 4.33527C18.4553 3.57758 19.6667 3.989 19.6667 4.94429V19.6667C19.6667 20.219 19.219 20.6667 18.6667 20.6667H4C3.44772 20.6667 3 20.219 3 19.6667Z" fill="#1C1C1C" />
                <path d="M3 20V10.2273C3 9.36442 4.01963 8.90665 4.66449 9.48005L10.8355 14.9673C11.2144 15.3042 11.7856 15.3042 12.1645 14.9673L18.3355 9.48005C18.9804 8.90664 20 9.36442 20 10.2273V20C20 20.5523 19.5523 21 19 21H4C3.44772 21 3 20.5523 3 20Z" fill="#4E4E4E" />
                <path d="M3 20V15.5875C3 14.8516 3.76808 14.3678 4.43185 14.6856L11.0682 17.863C11.3412 17.9937 11.6588 17.9937 11.9318 17.863L18.5682 14.6856C19.2319 14.3678 20 14.8516 20 15.5875V20C20 20.5523 19.5523 21 19 21H4C3.44772 21 3 20.5523 3 20Z" fill="#858585" />
            </svg>
            </span>
            <div className="">
                <button onBlur={() => isOpen && setIsOpen(!isOpen)} onClick={() => setIsOpen(!isOpen)} className="flex space-x-2  items-center text-gray-500 cursor-pointer hover:bg-gray-100 p-1 rounded">
                    <span>achuth.hadnoor123@gmail.com</span>
                    <Icon icon={chevronDown} />
                </button>
                {isOpen && <ul className="transition duration-500 ease-in-out  absolute z-10 block bg-white min-w-72 rounded ">
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-600" disabled>
                        <div>All accounts</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={mail} /><div>All inboxes</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-600 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={mail} />  <div>achuth.hadnoor123@gmail.com</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={mail} />   <div>armorachyuth123@gmail.com</div>
                    </button>
                    <hr />
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-600" disabled>
                        <div>Categories</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={clock} />  <div>Scheduled</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={activity} />  <div>Remainders</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={edit3} />   <div>Drafts</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={inbox} /> <div>Inbox</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={bookOpen} />  <div>Newsletter</div>
                    </button>
                    <hr />
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={archive} />  <div>Archive</div>
                    </button>

                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={hardDrive} />  <div>Outbox</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={send} /> <div>Sent</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full text-left p-3 text-gray-400 hover:bg-gray-50 hover:cursor-pointer">
                        <Icon icon={alertTriangle} />   <div>Spam</div>
                    </button>
                    <button className="flex space-x-2 text-sm w-full p-3 bg-gray-100 text-gray-400 text-center ">
                        Preferences
                    </button>
                </ul>
                }</div>
            <span className="flex-1" />
            <Icon icon={power} onClick={firebase.doSignOut} />
        </div>
    )
}

export default withFirebase(Main);