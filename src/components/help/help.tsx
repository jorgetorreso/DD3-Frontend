import Modal from "../modal/modal";

interface IHelpProps {
    isHowToPlayModalOpen: boolean;
    setIsHowToPlayModalOpen: (isOpen: boolean) => void;
}

export const Help = ({
    isHowToPlayModalOpen,
    setIsHowToPlayModalOpen,
}: IHelpProps) => {
    return (
        <Modal isOpen={isHowToPlayModalOpen} handleClose={() => setIsHowToPlayModalOpen(false)} >
            <div className="text-center pt-[54px] pb-[32px]">
                <h3 className="text-4xl font-black text-gray-900 dark:text-white" >
                    Cómo jugar
                </h3>
            </div>
            <div className="flex max-w-[546px] flex-col gap-8 text-lg text-gray-900 dark:text-white">
                <div className="space-y-2 text-left px-[42px]">
                    <p>Adivina la palabra oculta en cinco intentos.</p>
                    <p>Cada intento debe ser una palabra válida de 5 letras.</p>
                    <p>
                        Después de cada intento el color de las letras cambia para mostrar
                        qué tan cerca estás de acertar la palabra.
                    </p>
                </div>
                <div className="text-left px-[42px]">
                    <h3 className="font-bold">Ejemplos</h3>

                    <div className="flex flex-col items-center">
                        <div>
                            <p className="mb-1 flex gap-[11px] mt-[26px] mb-[19px]">
                                <span
                                    className={`bg-[#66A060] relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    G
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    A
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    T
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    O
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    S
                                </span>
                            </p>
                            <p>La letra <b>G</b> está en la palabra y en la posición correcta.</p>
                        </div>
                        <div>
                            <p className="mb-1 flex gap-[11px] mt-[26px] mb-[19px]">
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    V
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    O
                                </span>
                                <span
                                    className={`bg-[#CEB02C] relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    C
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    A
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    L
                                </span>
                            </p>
                            <p>La letra <b>C</b> está en la palabra pero en la posición incorrecta.</p>
                        </div>
                        <div>
                            <p className="mb-1 flex gap-[11px] mt-[26px] mb-[19px]">
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    C
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    A
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    N
                                </span>
                                <span
                                    className={`relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    T
                                </span>
                                <span
                                    className={`bg-[#939B9F] relative grid aspect-square w-[76px] place-content-center rounded-md border border-black text-2xl font-bold`}
                                >
                                    O
                                </span>
                            </p>
                            <p>La letra <b>O</b> no está en la palabra.</p>
                        </div>
                    </div>

                </div>
                <div className="text-left  px-[42px]">
                    <p>
                        Puede haber letras repetidas. Las pistas son independientes para
                        cada letra.
                    </p>
                </div>
                <div className="text-center  px-[42px]">
                    <p>¡Una palabra nueva cada 5 minutos!</p>
                </div>
                <div className="flex flex-col items-center pt-[32px] pb-[27px]">
                    <button
                        className="rounded-md bg-[#66A060] px-14 py-2 text-xl font-semibold text-white"
                        onClick={() => setIsHowToPlayModalOpen(false)}
                    >
                        ¡JUGAR!
                    </button>
                </div>
            </div>
        </Modal>
    );
};
