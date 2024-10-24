import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { storeReservation } from "../redux/slices/ReservationSlice.ts";
import { toast } from "react-toastify";

const PopupBooking: React.FC = ({ setOpenModal, session }) => {
    const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    const handleSeatClick = (seatId: string, status: string) => {
        if (status === "Booked") {
            toast.error('This seat is already booked.')
            return;
        }
        setSelectedSeat(seatId);
        toast.success('Seat has been selected')
    };

    const handleBooking = () => {
        if (token && selectedSeat) {
            const sessionId = session._id;
            dispatch(storeReservation({ session_id: sessionId, seat: selectedSeat }));
            setOpenModal(false);
            toast.success('Seat has been reserved')
        } else {
            console.error("Error: Token or seat selection missing.");
        }
    };

    return (
        <div className="fixed inset-0 z-50">
            <div className="min-h-screen px-4 text-center">
                <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>
                <div className="inline-block py-8 h-screen w-full max-w-4xl">
                    <div
                        className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-[#0E131F] dark:border dark:border-gray-700 dark:text-neutral-100 shadow-xl h-full">
                        <div
                            className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                            <h3 className="text-lg font-medium leading-6 text-white">Booking</h3>
                            <span className="absolute left-3 top-3">
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>

                        <div className='flex items-center justify-center m-12'>
                            <div
                                className='border border-gray-600 shadow-2xl w-full relative rounded-l-2xl rounded-r-2xl overflow-hidden'>
                                <span
                                    className='absolute top-2 left-1/2 transform -translate-x-1/2 bg-white px-2'>screen</span>
                            </div>
                        </div>


                        <div className="p-6">
                            <div
                                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-center">
                                {session.seat_id.map((seat, index) => (
                                    <div
                                        key={seat.seat_id}
                                        onClick={() => handleSeatClick(seat.seat_id, seat.status)}
                                        className={`${
                                            seat.status === "Booked"
                                                ? "bg-red-500"
                                                : selectedSeat === seat.seat_id
                                                    ? "bg-green-500"
                                                    : "bg-gray-400"
                                        } cursor-pointer text-center rounded text-white p-2 w-full h-10 flex items-center justify-center`}
                                    >
                                        {index + 1}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {selectedSeat && (
                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={handleBooking}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                                >
                                    Book Now
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupBooking;
