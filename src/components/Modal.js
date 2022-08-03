import React, { useEffect } from 'react'
import modals from '../modals'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { modalClose } from 'helper'

import { IoMdClose } from 'react-icons/io'


import { useUserAuth } from '../context/UserAuthContext'
 function Modal({name,data}) {
    const currentModal=modals.find(m=> m.name === name)
    const {setUpRecaptcha} = useUserAuth()
    const [isOpen, setIsOpen] = useState(true)
    const closeModal = () => {
      setIsOpen(false)
      modalClose()
    }
    if(setUpRecaptcha != null || setUpRecaptcha != undefined){
      setUpRecaptcha=true}
 
  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40  " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duraiton-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-scroll">
            <div className="flex min-h-full items-center justify-center  text-center w-full">
      
                <Dialog.Panel className="  max-w-xl transform overflow-hidden rounded-lg bg-white p-2 py-8 text-left align-middle shadow-xl transition-all">
                <label  className='  relative block group text-xl font-semibold text-center mt-2   text-primary-brand-color justify-between items-center '>
                {currentModal.name==="login" && "Giriş yap veya kayıt ol" }
                {/*currentModal.name==="login" && setUpRecaptcha ===false &&  "giriş "  verify otp için farklı bir label gelmeli*/}
                
                 {currentModal.name==="maps" &&  "Teslimat Adresi Ekleyin" } 
 
                 {currentModal.name==="register" && "Kayıt Ol" } 

<button  onClick={closeModal} className=' flex -top-1 right-6  absolute text-2xl text-black font-normal hover:cursor-pointer bg-slate-100  px-2 py-2 rounded-xl '> <IoMdClose size={24}/> </button> </label>
                <currentModal.element/>
                </Dialog.Panel>
         
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}
export default Modal;