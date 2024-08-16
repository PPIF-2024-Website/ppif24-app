import axios from "axios";
import ArchivesBackground from "@/Components/ppif/background/archives-background/ArchivesBackground";
import Modal from "@/Components/ppif/CustomModal";
import { useState, useEffect } from "react";
import HeaderDecodeMessage from "@/Components/ppif/games/HeaderDecodeMessage";
import DecodeForm from "@/Components/ppif/games/DecodeMessage";
import { Head } from "@inertiajs/react";
import imageSlide from "@/Components/ppif/games/archives/ImageSlide";
import Carousel from "@/Components/ppif/games/archives/Carousel";
import Background from "@/Components/ppif/background/Background";

export default function GameArchives() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const placeHolder = "Input Your Group's Secret Code";
    const [inputValue, setInputValue] = useState(placeHolder);

    const [response, setResponse] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    const [riddleString, setRiddleString] = useState("");

    const [pageNumber, setPageNumber] = useState(1);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const savedToken = localStorage.getItem("group_token");
        const savedPageNumber = localStorage.getItem("page_number");
        const savedRiddle = localStorage.getItem("riddle");

        if (savedToken) {
            setAuthToken(savedToken);
        }

        if (savedPageNumber) {
            setPageNumber(parseInt(savedPageNumber, 10));
        }

        if (savedRiddle) {
            setRiddleString(savedRiddle);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("page_number", pageNumber);
    }, [pageNumber]);

    const noInputCheck = () => {
        if (inputValue === "") {
            setInputValue(placeHolder);
        }
    };

    const inputCheck = () => {
        if (inputValue === placeHolder) {
            setInputValue("");
        }
    };

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
        setInputValue(placeHolder);

        if (inputValue != placeHolder) {
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
            } catch (error) {
                setResponse("Group Invalid");
            }
        }
    };

    return (
        <>
            <Head title="Game" />
            <ArchivesBackground />
            {/* <Background /> */}
            {authToken === null || response === "Group Invalid" ? (
                <>
                    <Modal
                        title={"SECRET CODE"}
                        isOpen={modalIsOpen}
                        setIsOpen={setModalIsOpen}
                        setResponse={setResponse}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="relative flex h-full justify-center"
                        >
                            <div className="absolute top-16 w-full max-w-[616px] border-b-2 sm:top-32">
                                <input
                                    type="text"
                                    name="secretCode"
                                    id="secret_code"
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    onFocus={inputCheck}
                                    onBlur={noInputCheck}
                                    className="flex w-full justify-start border-none bg-transparent px-0 pb-2 text-lg font-light text-white focus:outline-none focus:ring-0 sm:text-3xl"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="absolute bottom-72 text-2xl text-red-600">
                                {response}
                            </div>
                            <button
                                type="submit"
                                className="absolute bottom-16 rounded-xl bg-[#3d3c3c] px-8 py-3 text-2xl text-white shadow-[0px_6px_4px_rgba(255,255,255,0.15)] transition-all duration-100 hover:translate-y-[6px] hover:shadow-[0px_0px_4px_rgba(255,255,255,0.15)] active:scale-95 sm:px-20 sm:py-6"
                            >
                                Submit
                            </button>
                        </form>
                    </Modal>
                    <div className="archives flex h-screen w-screen flex-col items-center justify-center">
                        <h1 className="title glow-white sm:text-heading mb-6 text-3xl font-bold italic text-white antialiased sm:mb-3">
                            ARCHIVES
                        </h1>
                        <div className="box-glow-white flex h-min max-h-[505px] w-screen min-w-[320px] max-w-[1186px] items-center justify-center overflow-hidden bg-white/20 py-5 drop-shadow-[0_0_20px_rgba(255,255,255,0.75)] backdrop-blur-sm md:h-full md:w-full lg:rounded-3xl lg:px-0">
                            <Carousel
                                setCurrentIndex={setCurrentIndex}
                                currentIndex={currentIndex}
                                slides={imageSlide}
                            />
                            <div className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-[200px] rounded-lg bg-gradient-to-r from-white/[0.3] to-transparent blur-lg"></div>
                            <div className="pointer-events-none absolute right-0 top-0 z-[1] h-full w-[200px] rounded-lg bg-gradient-to-r from-transparent to-white/[0.3] blur-lg"></div>
                        </div>

                        {/* CAROUSEL PAGINATION */}
                        <div className="mb-20 mt-10 flex h-full max-h-[32px] w-screen justify-center space-x-4 sm:max-h-[43px] sm:space-x-10">
                            {[0, 1, 2, 3].map((index) => (
                                <div
                                    key={index}
                                    className={`aspect-square rounded-full backdrop-blur-sm transition-all duration-300 ${
                                        currentIndex === index
                                            ? "bg-white/75"
                                            : "box-glow-white bg-white/20"
                                    }`}
                                ></div>
                            ))}
                        </div>
                        {/* CAROUSEL PAGINATION END*/}

                        <button
                            onClick={() => setModalIsOpen(true)}
                            className="box-glow-white flex h-14 min-w-[320px] max-w-[778px] items-center justify-center rounded-xl bg-white/20 text-3xl text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/50 sm:h-[76px] sm:w-full sm:rounded-3xl"
                        >
                            Continue
                        </button>
                    </div>
                </>
            ) : (
                <>
                    {pageNumber === 1 ? (
                        <div className="h-screen w-screen overflow-hiddene">
                            <div className="flex h-screen flex-col items-center justify-center">
                                <h1 className="text-heading glow-white z-10 text-center font-bold italic text-white">
                                    DECODE THE MESSAGE
                                </h1>
                                <HeaderDecodeMessage
                                    text={riddleString}
                                    image="/ppif/images/decodeBackgroundDummy.png"
                                />

                                <DecodeForm groupToken={authToken}>
                                    <button onClick={handlePageChange}>
                                        <img
                                            src="/ppif/images/folderImage.png"
                                            className="z-50 w-[60px] object-contain md:pt-2"
                                            alt="archive-button"
                                        />
                                    </button>
                                </DecodeForm>
                            </div>
                        </div>
                    ) : (
                        <div className="archives flex h-screen w-screen flex-col items-center justify-center">
                            <h1 className="title glow-white sm:text-heading mb-6 text-3xl font-bold italic text-white antialiased sm:mb-3">
                                ARCHIVES
                            </h1>
                            <div className="box-glow-white flex h-min max-h-[505px] w-screen min-w-[320px] max-w-[1186px] items-center justify-center overflow-hidden bg-white/20 py-5 drop-shadow-[0_0_20px_rgba(255,255,255,0.75)] backdrop-blur-sm md:h-full md:w-full lg:rounded-3xl lg:px-0">
                                <Carousel
                                    setCurrentIndex={setCurrentIndex}
                                    currentIndex={currentIndex}
                                    slides={imageSlide}
                                />
                                <div className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-[200px] rounded-lg bg-gradient-to-r from-white/[0.3] to-transparent blur-lg"></div>
                                <div className="pointer-events-none absolute right-0 top-0 z-[1] h-full w-[200px] rounded-lg bg-gradient-to-r from-transparent to-white/[0.3] blur-lg"></div>
                            </div>

                            {/* CAROUSEL PAGINATION */}
                            <div className="mb-20 mt-10 flex h-full max-h-[32px] w-screen justify-center space-x-4 sm:max-h-[43px] sm:space-x-10">
                                {[0, 1, 2, 3].map((index) => (
                                    <div
                                        key={index}
                                        className={`aspect-square rounded-full backdrop-blur-sm transition-all duration-300 ${
                                            currentIndex === index
                                                ? "bg-white/75"
                                                : "box-glow-white bg-white/20"
                                        }`}
                                    ></div>
                                ))}
                            </div>
                            {/* CAROUSEL PAGINATION END*/}

                            <button
                                onClick={handlePageChange}
                                className="box-glow-white flex h-14 min-w-[320px] max-w-[778px] items-center justify-center rounded-xl bg-white/20 text-3xl text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/50 sm:h-[76px] sm:w-full sm:rounded-3xl"
                            >
                                Back
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
