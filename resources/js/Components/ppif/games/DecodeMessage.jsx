import { useState } from "react";
import axios from "axios";
import Modal from "./CustomModal";
import { Link } from "@inertiajs/react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfettiExplosion from "react-confetti-explosion";

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

    const handleSubmit = async (e) => {
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
                `<span>Your group name is <span class="${randomColorClass}">${res.data}</span></span>`,
            );
            setModalIsOpen(true);
        } catch (error) {
            setResponse("Incorrect decryption.");
            toast.error("Incorrect decryption.");
            setModalIsOpen(true);
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
                    onSubmit={handleSubmit}
                >
                    <div className="group relative z-0 mb-5 flex w-full justify-center md:w-1/2">
                        <input
                            id="decode_message"
                            type="text"
                            value={decryptedMessage}
                            onChange={(e) =>
                                setDecryptedMessage(e.target.value)
                            }
                            className="text-body peer w-[90%] appearance-none border-b-2 border-b-white/70 bg-transparent px-2 pb-1 pt-3 text-sm text-white placeholder-white placeholder:text-white/50 focus:outline-none focus:ring-0 md:pt-1"
                            placeholder="Type the decrypted message..."
                            autoComplete="off"
                        />
                    </div>
                    <button
                        type="submit"
                        className="hover:glow-white smooth text-body h-[40px] w-[100px] rounded-[15px] bg-white/20 text-center font-medium uppercase tracking-widest text-white backdrop-blur-md md:h-[40px] md:w-[150px]"
                    >
                        Try
                    </button>
                </form>
                <div className="flex w-full justify-center md:w-auto md:justify-end">
                    {button}
                </div>
            </div>
            {response != "Incorrect decryption." ? (
                <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
                    <h1
                        className="flex h-3/4 items-center justify-center text-center text-3xl font-semibold leading-normal tracking-wide text-white md:text-6xl"
                        dangerouslySetInnerHTML={{ __html: response }}
                    />
                    <div className="flex w-full items-center justify-center">
                        <ConfettiExplosion
                            zIndex={20}
                            force={1}
                            duration={10000}
                            particleCount={250}
                            width={1600}
                            colors={[
                                "var(--ppif-orange)",
                                "var(--ppif-blue)",
                                "var(--ppif-pink)",
                            ]}
                            height="160vh"
                            className="absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)]"
                        />
                        <Link
                            href="/"
                            onClick={removeToken}
                            className="text-subheading smooth hover:glow-white md:rounded-2xlro w-full rounded-xl bg-white/10 py-3 text-center uppercase tracking-widest text-white md:py-6"
                        >
                            Continue
                        </Link>
                    </div>
                </Modal>
            ) : (
                <>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        closeOnClick
                        draggable={false}
                        transition={Slide}
                        theme="dark"
                        toastClassName="bg-black/20 backdrop-blur-md font-sans uppercase tracking-widest font-light text-footer"
                    />
                </>
            )}
        </>
    );
}

export default DecodeMessage;
