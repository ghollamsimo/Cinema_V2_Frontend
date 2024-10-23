import React from "react";

const PopupError: React.FC = ({setOpenModal, description}) => {
    const closePopup = () => {
        setOpenModal(false);
    };
  return (
      <>
          {setOpenModal && (
              <div
                  className="fixed text-white inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                  onClick={closePopup}
              >
                  <div className="bg-[#111827] p-6 rounded-lg text-center shadow-lg">
                      <h2 className="text-xl font-bold mb-4">{description}</h2>
                      <p>Please log in to access this content.</p>
                      <button
                          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                          onClick={closePopup}
                      >
                          Close
                      </button>
                  </div>
              </div>
          )}

      </>
  )
}

export default PopupError