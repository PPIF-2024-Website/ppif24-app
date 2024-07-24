import axios from "axios";
import ArchivesBackground from "@/Components/ppif/background/archives-background/ArchivesBackground";
import Modal from "@/Components/ppif/CustomModal";
import Carousel from "@/Components/ppif/games/archives/Carousel";
import { useState, useEffect } from "react";
import HeaderDecodeMessage from "@/Components/ppif/games/HeaderDecodeMessage";
import DecodeForm from "@/Components/ppif/games/DecodeMessage";
import { Head } from "@inertiajs/react";
import imagesSlide from "@/Components/ppif/games/archives/ImageSlide";

export default function GameArchives() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const placeHolder = "Input Your Group's Secret Code";
    const [inputValue, setInputValue] = useState(placeHolder);

    const [response, setResponse] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    const [riddleString, setRiddleString] = useState("");

    const [pageNumber, setPageNumber] = useState(1);

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

        console.log(pageNumber);
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
                            <div className="absolute top-32 w-full max-w-[616px] border-b-2">
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
                                    className="flex w-full justify-start border-none bg-transparent px-0 pb-2 text-3xl font-light text-white focus:outline-none focus:ring-0"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="absolute bottom-72 text-2xl text-red-600">
                                {response}
                            </div>
                            <button
                                type="submit"
                                className="absolute bottom-16 rounded-xl bg-[#3d3c3c] px-20 py-6 text-2xl text-white shadow-[0px_6px_4px_rgba(255,255,255,0.15)] transition-all duration-100 hover:translate-y-[6px] hover:shadow-[0px_0px_4px_rgba(255,255,255,0.15)] active:scale-95"
                            >
                                Submit
                            </button>
                        </form>
                    </Modal>
                    <div className="archives flex h-screen w-screen flex-col items-center justify-center">
                        <h1 className="title mb-3 text-5xl font-bold italic text-white antialiased drop-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] sm:text-7xl">
                            ARCHIVES
                        </h1>
                        <div className="flex h-full max-h-[505px] min-h-[400px] w-full min-w-[320px] max-w-[1186px] items-center justify-center bg-white/20 px-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.75)] backdrop-blur-sm md:rounded-3xl lg:px-0">
                            <Carousel>
                                {imagesSlide.map((image, index) => (
                                    <img
                                        key={index}
                                        className="w-full rounded-xl"
                                        src={image}
                                        alt={"image " + index}
                                    />
                                ))}
                            </Carousel>
                        </div>
                        <button
                            onClick={() => setModalIsOpen(true)}
                            className="mt-16 flex h-[76px] w-full min-w-[320px] max-w-[778px] items-center justify-center rounded-3xl bg-white/20 text-3xl text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/50"
                        >
                            Continue
                        </button>
                    </div>
                </>
            ) : (
                <>
                    {pageNumber === 1 ? (
                        <div className="h-screen w-screen">
                            <div className="flex h-screen flex-col items-center justify-center">
                                <h1 className="z-10 py-4 text-center text-[36px] font-bold italic text-white drop-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] md:text-[50px]">
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
                            <h1 className="title mb-3 text-5xl font-bold italic text-white antialiased drop-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] sm:text-7xl">
                                ARCHIVES
                            </h1>
                            <div className="flex h-full max-h-[505px] min-h-[400px] w-full min-w-[320px] max-w-[1186px] items-center justify-center bg-white/20 px-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.75)] backdrop-blur-sm md:rounded-3xl lg:px-0">
                                <Carousel>
                                    {imagesSlide.map((image, index) => (
                                        <img
                                            key={index}
                                            className="w-full rounded-xl"
                                            src={image}
                                            alt={"image " + index}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                            <button
                                onClick={handlePageChange}
                                className="mt-16 flex h-[76px] w-full min-w-[320px] max-w-[778px] items-center justify-center rounded-3xl bg-white/20 text-3xl text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/50"
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
