'use client';

import { useCallback, useEffect, useState, use } from 'react';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel,
}) => {
    const[showModal, setShowModal] = useState(isOpen);

useEffect(() => {
    setShowModal(isOpen);
}, [isOpen]);

const handleClose = useCallback(() => {
    if (disabled) {
        return;
    }
    setShowModal(false);
    setTimeout(() => {
        onClose();
    }, 300);
}, [disabled, onClose]);

const handleSubmit = useCallback(() => {
    if(disabled) {
        return;
    }

    onSubmit();
}, [disabled, onSubmit]);

const handleSecondaryAction = useCallback(() => {
    if(disabled || !secondaryAction) {
        return;
    }
    secondaryAction();
}, [disabled, secondaryAction]);

if(!isOpen) {
    return null;
}

    return (
    <>
        
        <div
            className="
                fixed   
                justify-center
                flex
                overflow-x-hidden
                overflow-y-auto
                
                inset-0
                z-20
                outline-none
                focus:outline-none
                ">
        </div>

        <div
            className="
                relative
                w-full
                md:w-4/6
                lg:w-3/6
                xl:w-2/5
                my-6
                mx-auto
                h-full
                lg:h-auto
                md:h-auto
                z-60"
                >
            {/*content*/}
            <div
                className={`
                    translate
                    duration-300
                    h-full
                    z-60
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}>
                    <div className="
                        translate 
                        h-full 
                        lg:h-auto 
                        md:h-auto 
                        border-0 
                        rounded-lg 
                        shadow-lg 
                        relative flex 
                        flex-col 
                        w-full 
                        bg-grey
                        outline-none 
                        z-60
                        focus:outline-none">
                        {/*header*/}
                        <div
                            className="
                                flex
                                items-center
                                p-6
                                rounded-t
                                justified-center
                                relative
                                border-b-[1px]
                                z-60
                                bg-grey">
                        </div>
                    </div>
                    

            </div>
        </div>

        
    </>
    );
}

export default Modal;