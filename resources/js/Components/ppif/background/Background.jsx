import React from "react";

function Background() {
    return (
        <div className="main-background absolute h-[500vh] w-full overflow-y-hidden">
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="flex h-screen justify-center">
                <img
                    className="absolute w-[90vw]"
                    src="/ppif/images/background/Vector.svg"
                    alt=""
                />
            </div>
        </div>
        // <div className="main-background absolute w-full overflow-x-hidden">
        //     <div className="h-screen">
        //         {/* <img src="/ppif/images/background/Vector.svg" alt="" />
        //          */}
        //         <img
        //             className="min-w h-screen w-full object-fill"
        //             src="/ppif/images/background/section1.png"
        //         />
        //     </div>
        //     <div className="h-screen">
        //         <img
        //             className="min-w h-screen w-full object-fill"
        //             src="/ppif/images/background/section2.png"
        //         />
        //     </div>
        //     <div className="h-screen">
        //         <img
        //             className="h-screen w-full object-fill"
        //             src="/ppif/images/background/section3.png"
        //         />
        //     </div>
        //     <div className="h-screen">
        //         <img
        //             className="h-screen w-full object-fill"
        //             src="/ppif/images/background/section4.png"
        //         />
        //     </div>
        //     {/* section 5 */}
        //     <div className="h-screen">
        //         <img
        //             className="h-screen w-full object-fill"
        //             src="/ppif/images/background/section5.png"
        //         />
        //         {/* <img
        //             className="w-full max-w-[2000px]"
        //             src="/ppif/images/background/Vector.svg"
        //             alt=""
        //         /> */}
        //     </div>
        // </div>
    );
}

export default Background;
