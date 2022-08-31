import React from 'react'

const Modal = ({ setModal, handleDeleteAll }) => {
  return (
    <div className='fixed z-50 top-0 left-0 h-[100vh] w-full flex items-center justify-center bg-gray-500 opacity-60'>
      <div className='absolute rounded-2xl flex flex-col items-center justify-center bg-white p-7 w-96 opacity-100'>
        <h1 className='text-3xl font-bold'>Delete All Tasks</h1>
        <p>
          Are you sure you want to delete all taks? This will remove the
          comment and can't be undone.
        </p>
        <div className='flex justify-between w-full mt-3'>
          <button className='text-base font-bold p-3 rounded-md cursor-pointer w-2/5 bg-gray-600 text-white' onClick={() => setModal(false)}>
            NO, CANCEL
          </button>
          <button
            className='text-base font-bold p-3 rounded-md cursor-pointer w-2/5 bg-red-600 text-white'
            onClick={() => handleDeleteAll()}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
