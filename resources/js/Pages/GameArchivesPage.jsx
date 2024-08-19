import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import axios from "axios";
import ArchivesBackground from "@/Components/ppif/background/archives-background/ArchivesBackground";
import Modal from "@/Components/ppif/games/CustomModal";
import HeaderDecodeMessage from "@/Components/ppif/games/HeaderDecodeMessage";
import DecodeForm from "@/Components/ppif/games/DecodeMessage";
import Carousel from "@/Components/ppif/games/archives/Carousel";
import TransitionedPage from "@/Components/ppif/TransitionedPage";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import { CSSTransition } from "react-transition-group";
import "@/Components/ppif/games/games.css";
import "@/Components/ppif/navbar-footer/Footer.css";
import { ToastContainer, toast, Slide } from "react-toastify";

function Page() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [response, setResponse] = useState(null);
    const [authToken, setAuthToken] = useState(null);
    const [riddleString, setRiddleString] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const savedToken = localStorage.getItem("group_token");
        const savedPageNumber = localStorage.getItem("page_number");
        const savedRiddle = localStorage.getItem("riddle");

        if (savedToken) setAuthToken(savedToken);
        if (savedPageNumber) setPageNumber(parseInt(savedPageNumber, 10));
        if (savedRiddle) setRiddleString(savedRiddle);
    }, []);

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem("group_token");
            localStorage.removeItem("page_number");
            localStorage.removeItem("riddle");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("page_number", pageNumber);
    }, [pageNumber]);

    const noInputCheck = () => {};

    const inputCheck = () => {};

    const handlePageChange = (e) => {
        e.preventDefault();

        if (pageNumber === 1) {
            setPageNumber(2);
        } else if (pageNumber === 2) {
            setPageNumber(1);
        } else {
            setPageNumber(pageNumber);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get("/api/auth", {
                params: {
                    secret_code: inputValue,
                },
            });

            if (res.data.token) {
                setAuthToken(res.data.token);
                localStorage.setItem("group_token", res.data.token);
                setModalIsOpen(false);
            }

            if (res.data.riddle) {
                setRiddleString(res.data.riddle);
                localStorage.setItem("riddle", res.data.riddle);
            }
            setResponse("");
        } catch (error) {
            setResponse("Invalid code.");
            toast.error("Invalid code.");
        }

        setInputValue("");
    };

    return (
        <>
            <Head title="Game" />
            <ArchivesBackground />
            {authToken === null || response === "Invalid code." ? (
                <>
                    <Modal
                        title="SECRET CODE"
                        isOpen={modalIsOpen}
                        setIsOpen={setModalIsOpen}
                        setResponse={setResponse}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="text-body relative flex h-full w-full flex-col items-center justify-center space-y-5 text-white sm:w-3/4 xl:w-1/2"
                        >
                            <div className="w-full">
                                <input
                                    type="text"
                                    name="secretCode"
                                    id="secret_code"
                                    placeholder="Enter your group's secret code here!"
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    className="glow-white flex w-full border-b bg-transparent p-2 font-light placeholder:text-white/50 focus:outline-none"
                                    autoComplete="off"
                                />
                            </div>
                            <button
                                type="submit"
                                className="smooth hover:glow-white w-full rounded-lg bg-white/20 p-3 uppercase tracking-widest"
                            >
                                Submit
                            </button>
                        </form>
                    </Modal>

                    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden px-12">
                        <Carousel />
                        <button
                            onClick={() => setModalIsOpen(true)}
                            className="smooth hover:glow-white text-body w-full rounded-xl bg-white/15 py-3 uppercase tracking-widest text-white hover:scale-[1.05] sm:w-3/4 md:w-1/2 md:rounded-2xl"
                        >
                            Continue
                        </button>
                    </div>

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
            ) : (
                <>
                    <CSSTransition
                        in={pageNumber === 1}
                        timeout={300}
                        unmountOnExit
                        classNames="continue"
                    >
                        <div className="h-screen w-screen overflow-hidden">
                            <div className="flex h-screen flex-col items-center justify-center">
                                <h1 className="text-heading to transparent glow-white text-heading z-10 bg-gradient-to-br from-white bg-clip-text text-center font-bold uppercase italic text-transparent">
                                    Decode the message
                                </h1>
                                <HeaderDecodeMessage
                                    text={riddleString}
                                    image="/ppif/images/decodeBackgroundDummy.png"
                                />

                                <DecodeForm groupToken={authToken}>
                                    <FolderOpenIcon
                                        onClick={handlePageChange}
                                        className="glow-white w-[60px] animate-[pulse_3s_ease-out_infinite] cursor-pointer text-white opacity-100 hover:animate-[shake_1s_ease-in_infinite] md:w-[75px] [&>path]:stroke-[0.4]"
                                    />
                                </DecodeForm>
                            </div>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        in={pageNumber !== 1}
                        timeout={300}
                        unmountOnExit
                        classNames="continue"
                    >
                        <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden px-12">
                            <Carousel />
                            <button
                                onClick={handlePageChange}
                                className="smooth hover:glow-white text-body w-full rounded-xl bg-white/15 py-3 uppercase tracking-widest text-white hover:scale-[1.05] sm:w-3/4 md:w-1/2 md:rounded-2xl"
                            >
                                Back
                            </button>
                        </div>
                    </CSSTransition>
                </>
            )}
        </>
    );
}

export default function GamesArchivePage() {
    return <TransitionedPage Page={Page} />;
}
