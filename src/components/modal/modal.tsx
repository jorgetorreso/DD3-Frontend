export default function Modal({ children, isOpen }: {
    children: React.ReactNode;
    isOpen: boolean;
    isStatic?: boolean;
    handleClose: () => void;
}) {

    return (
        <div className={`relative z-10 ${isOpen ? 'visible' : 'invisible'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-[#f3f3f3] bg-opacity-90 dark:bg-[#262b3c] dark:bg-opacity-90 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg  border border-black bg-white dark:bg-[#262B3C]">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}
