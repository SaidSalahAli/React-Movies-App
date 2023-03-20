import { Dialog, Transition } from "@headlessui/react";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Fragment } from "react";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const MainModel = ({ children, setModelLopen, modelOpen }) => {
  const cancelButtonRef = useRef();
  
  return (
    <div className="flex justify-between">
      <Transition show={modelOpen} as={Fragment} appear>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto text-center"
          initialFocus={cancelButtonRef}
          onClose={() => setModelLopen(false)}>
          <div className="flex justify-center mt-96 ">
            
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scele-95"
              enterTo="opacity-100 scele-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scele-100"
              leaveTo="opacity-0 scele-95">
              {children}
            </Transition.Child>

              <button
                onClick={() => setModelLopen(false && false)}
                type="button"
                className=" 
                transitions  w-10 h-10 flex-colo text-base  text-white  bg-subMain rounded-full hover:bg-white  hover:text-subMain">
                <IoClose />
              </button>

          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MainModel;
