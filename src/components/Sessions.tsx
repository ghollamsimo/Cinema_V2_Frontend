import React, {useState} from "react";
import PopupBooking from "./PopupBooking.tsx";

const Sessions: React.FC = ({session}) => {
    const [showModal, setShowModal] = useState(false);

    console.log('hello', session)
    return (
        <>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Sessions</h2>
                <p className="text-gray-300 mb-2">Here are the available sessions for this film:</p>
                <ul className="space-y-2" onClick={() => setShowModal(true)}>
                    {session.map((sess) => (
                        <li key={sess._id} className="p-4 bg-gray-700 rounded-md">
                            Session: {sess.hours}
                        </li>
                    ))}
                </ul>
            </div>
            {showModal && <PopupBooking setOpenModal={setShowModal} seats={session}/>}
        </>
    );
};

export default Sessions;
