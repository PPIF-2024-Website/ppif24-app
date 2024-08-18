import { useState } from "react";
import axios from "axios";
import Modal from "./CustomModal";
import { Link } from "@inertiajs/react";

const getRandomColorClass = () => {
    const colors = ["blue", "orange", "pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `text-ppif-${randomColor}`;
};

function DecodeMessage({ groupToken, children: button }) {
    const [decryptedMessage, setDecryptedMessage] = useState("");
    const [response, setResponse] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const randomColorClass = getRandomColorClass();

    const handle_submit = async (e) => {
        e.preventDefault();

        const token = groupToken;

        try {
            const res = await axios.get("/api/group", {
                params: {
                    token: token,
                    decode_message: decryptedMessage
                        .toLowerCase()
                        .replace(/\s+/g, ""),
                },
            });
            setResponse(
                `<span>Your Group Name is <span class="${randomColorClass}">${res.data}</span></span>`,
            );
            setModalIsOpen(true);
        } catch (error) {
            setModalIsOpen(true);
            setResponse("Decode Salah !");
        } finally {
            setDecryptedMessage("");
        }
    };

    const removeToken = () => {
        localStorage.removeItem("group_token");
        localStorage.removeItem("page_number");
        localStorage.removeItem("riddle");
    };

    return (
        <>
            <div className="flex flex-wrap justify-between gap-4 py-4">
                <form
                    className="flex w-full gap-4 md:w-[600px] md:pt-2"
                    onSubmit={handle_submit}
                >
                    <div className="group relative z-0 mb-5 flex w-full justify-center md:w-1/2">
                        <input
                            id="decode_message"
                            type="text"
                            value={decryptedMessage}
                            onChange={(e) =>
                                setDecryptedMessage(e.target.value)
                            }
                            className="peer w-[90%] appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-2 pb-1 pt-3 text-sm text-white placeholder-white focus:outline-none focus:ring-0 md:pt-1 md:text-lg"
                            placeholder="Type the Decrypted Message..."
                            autoComplete="off"
                        />
                    </div>
                    <button
                        type="submit"
                        className="hover:glow-white h-[40px] w-[100px] rounded-[15px] bg-white/20 text-center font-medium text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.75)] backdrop-blur-lg transition-all duration-200 hover:scale-105 hover:bg-white/50 md:h-[40px] md:w-[150px] md:text-lg"
                    >
                        Try
                    </button>
                </form>
                <div className="flex w-full justify-center md:w-auto md:justify-end">
                    {button}
                </div>
            </div>
            {response != "Decode Salah !" ? (
                <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
                    <h1
                        className="flex h-3/4 items-center justify-center text-center text-3xl font-semibold leading-normal tracking-wide text-white md:text-6xl"
                        dangerouslySetInnerHTML={{ __html: response }}
                    />
                    <div className="flex w-full justify-center">
                        <Link
                            href="/"
                            onClick={removeToken}
                            className="rounded-xl bg-[#3d3c3c] px-8 py-3 text-2xl text-white shadow-[0px_6px_4px_rgba(255,255,255,0.15)] transition-all duration-100 hover:translate-y-[6px] hover:shadow-[0px_0px_4px_rgba(255,255,255,0.15)] active:scale-95 md:px-20 md:py-6"
                        >
                            Continue
                        </Link>
                    </div>
                </Modal>
            ) : (
                <>
                    <div>
                        <h1 className="text-red-600">Message Salah</h1>
                    </div>
                </>
            )}
        </>
    );
}

export default DecodeMessage;
