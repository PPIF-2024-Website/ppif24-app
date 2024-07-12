import Carousel from "./archives/Carousel";

export default function Archives() {
    const imagesSlide = [
        "/ppif/images/carousel-slides/Ctrus77_giant_gothic_style_biosphere_birdsseen_from_the_insideu_923be7c3-d352-42a2-ab9c-db66d502a12e.png",
        "/ppif/images/carousel-slides/deadelevators_Injured_plea_crushed_destiny_Deep_down_trauma_hou_168de6ad-abdb-4e31-bbae-a934caaf0a68.png",
        "/ppif/images/carousel-slides/deadelevators_Where_is_the_string_that_Theseus_laid_Find_me_out_72c52aa1-4fab-4363-a44c-e951428ae25b.jpg",
        "/ppif/images/carousel-slides/Glaar_dragon_figthing_a_dwarf_dragon_breath_castle_ruins_in_bac_5e566439-9115-43e3-b2f5-55efbd5c10ee.png",
        "/ppif/images/carousel-slides/Glaar_dragon_figthing_a_dwarf_dragon_breath_castle_ruins_in_bac_5e566439",
    ];

    return (
        <div className="archives flex h-screen w-screen flex-col items-center justify-center">
            <h1 className="title mb-3 text-5xl font-bold italic text-white antialiased sm:text-7xl">
                ARCHIVES
            </h1>
            <div className="flex h-full max-h-[505px] min-h-[400px] w-full min-w-[320px] max-w-[1186px] items-center justify-center bg-white/30 drop-shadow-[0_0_20px_rgba(255,255,255,0.75)] backdrop-blur-sm md:rounded-3xl">
                <Carousel>
                    {imagesSlide.map((image, index) => (
                        <img
                            className="h-full w-full"
                            src={image}
                            alt={"image " + index}
                        />
                    ))}
                </Carousel>
            </div>
            <div></div>
            <button className="mt-16 flex h-[76px] w-full min-w-[320px] max-w-[778px] items-center justify-center rounded-3xl bg-white/30 text-3xl backdrop-blur-sm">
                Continue
            </button>
        </div>
    );
}
