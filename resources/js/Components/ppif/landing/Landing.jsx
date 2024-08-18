import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import PpifLogo from "./PpifLogo";
import { isMobile } from "react-device-detect";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/opacity.css";

export default function Landing({ id }) {
    return (
        <div
            id={id}
            className="flex h-screen w-full select-none items-end justify-center overflow-hidden"
        >
            <div className="absolute flex h-screen w-full items-center justify-center">
                <Canvas>
                    <pointLight position={[-0.5, 0, 1]} intensity={3} />

                    {!isMobile && (
                        <OrbitControls enableZoom={false} enablePan={false} />
                    )}

                    <EffectComposer>
                        <Bloom
                            intensity={3}
                            luminanceThreshold={0.1}
                            luminanceSmoothing={7}
                        />
                    </EffectComposer>

                    <Suspense fallback={null}>
                        <PpifLogo scale={0.4} />
                    </Suspense>
                </Canvas>

                {/* <LazyLoadImage
                    src="/ppif/images/landing/ppif-emblem-glow.svg"
                    className="w-[250px] min-[420px]:w-[400px]"
                    alt="PPIF 2024 Logo"
                    effect="opacity"
                    wrapperProps={{
                        style: { transitionDelay: "0.1s" },
                    }}
                /> */}
            </div>
            <a
                href="#about-if"
                className="absolute mb-12 flex cursor-pointer flex-col items-center space-y-6 text-white"
            >
                <p className="hidden xl:block">click to scroll down</p>
                <p className="xl:hidden">touch to scroll down</p>
                <ArrowDownIcon className="w-6 animate-bounce [&>path]:stroke-[2.5]" />
            </a>
        </div>
    );
}
