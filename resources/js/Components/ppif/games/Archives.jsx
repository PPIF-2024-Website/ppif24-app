import axios from "axios";
import ArchivesBackground from "../background/archives-background/ArchivesBackground";
import Modal from "../Modal";
import Carousel from "./archives/Carousel";
import { useState } from "react";

export default function Archives() {
    const imagesSlide = [
        "/ppif/images/carousel-slides/Ctrus77_giant_gothic_style_biosphere_birdsseen_from_the_insideu_923be7c3-d352-42a2-ab9c-db66d502a12e.png",
        "/ppif/images/carousel-slides/deadelevators_Injured_plea_crushed_destiny_Deep_down_trauma_hou_168de6ad-abdb-4e31-bbae-a934caaf0a68.png",
        "/ppif/images/carousel-slides/deadelevators_Where_is_the_string_that_Theseus_laid_Find_me_out_72c52aa1-4fab-4363-a44c-e951428ae25b.jpg",
        "/ppif/images/carousel-slides/Glaar_dragon_figthing_a_dwarf_dragon_breath_castle_ruins_in_bac_5e566439-9115-43e3-b2f5-55efbd5c10ee.png",
        "/ppif/images/carousel-slides/Glaar_dragon_figthing_a_dwarf_dragon_breath_castle_ruins_in_bac_5e566439",
    ];

    const placeHolder = "Input Your Group's Secret Code";
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(placeHolder);
    const [response, setResponse] = useState("");

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInputValue(placeHolder);

        if(inputValue != placeHolder) {
            try {
                const res = await axios.get('/api/auth', {
                    params: {
                        "secret_code": inputValue,
                    }
                });
                setResponse(res.data);
                console.log(res.data);
                setModalIsOpen(false);
            } catch(error) {
                setResponse("Group Invalid");
            }
        }
    };

    return (
        <>
            <ArchivesBackground />
            <Modal title={"SECRET CODE"} isOpen={modalIsOpen}>
                <form onSubmit={handleSubmit}  className="relative flex h-full justify-center">
                    <div className="absolute top-32 w-full max-w-[616px] border-b-2">
                        <input
                            type="text"
                            name="secretCode"
                            id="secret_code"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onFocus={inputCheck}
                            onBlur={noInputCheck}
                            className="flex w-full justify-start border-none bg-transparent px-0 pb-2 text-3xl font-light text-white focus:outline-none focus:ring-0"
                        />
                    </div>
                    <button
                        type="submit"
                        className="absolute bottom-16 rounded-xl bg-[#3d3c3c] px-20 py-6 text-2xl shadow-[0px_6px_4px_rgba(255,255,255,0.15)] transition-all duration-100 hover:translate-y-[6px] hover:shadow-[0px_0px_4px_rgba(255,255,255,0.15)] active:scale-95"
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
                                className="w-full rounded-xl"
                                src={image}
                                alt={"image " + index}
                            />
                        ))}
                    </Carousel>
                </div>
                <div></div>
                <button
                    onClick={() => setModalIsOpen(true)}
                    className="mt-16 flex h-[76px] w-full min-w-[320px] max-w-[778px] items-center justify-center rounded-3xl bg-white/20 text-3xl backdrop-blur-sm"
                >
                    Continue
                </button>
            </div>
        </>
    );
}
