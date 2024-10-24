import React, { useState } from "react";
import PopupBooking from "./PopupBooking.tsx";

const Sessions: React.FC<{ session: any[] }> = ({ session }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedSession, setSelectedSession] = useState<any>(null);


    const handleSessionClick = (sess: any) => {
        setSelectedSession(sess);
        setShowModal(true);
    };

    return (
        <>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Sessions</h2>
                <p className="text-gray-300 mb-2">Here are the available sessions for this film:</p>
                <ul className="space-y-2">
                    {session.map((sess) => (
                        <li key={sess._id} className="p-4 bg-gray-700 rounded-md" onClick={() => handleSessionClick(sess)}>
                            Session: {sess.hours}
                        </li>
                    ))}
                </ul>
            </div>
            {showModal && selectedSession && (
                <PopupBooking setOpenModal={setShowModal} session={selectedSession} />
            )}
        </>
    );
};

export default Sessions;
