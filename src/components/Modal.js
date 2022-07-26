import React from 'react'
import modals from '../modals'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { modalClose } from 'helper'

 function Modal({name,data,foodCard,setFoodCard}) {
    const currentModal=modals.find(m=> m.name === name)
    const [isOpen, setIsOpen] = useState(true)
    const closeModal = () => {
      setIsOpen(false)
      modalClose()
      setFoodCard(true)
    }


 
  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duraiton-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
      
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <label  className='  relative block group text-xs font-semibold  my-2 pb-4 text-primary-brand-color justify-between items-center mx-32'> {!foodCard ? "Teslimat Adresi Ekleyin" :"Giriş Yap veya Kayıt Ol"} 
<a ><button  onClick={closeModal} className=' ml-28 absolute text-lg text-black font-normal bg-slate-100 px-2 -my-1 rounded '>x</button></a> </label>
                <currentModal.element/>
                </Dialog.Panel>
         
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}
export default Modal;