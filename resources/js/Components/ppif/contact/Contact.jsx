import React from "react";
import ContactCard from "./ContactCard";

const InstagramLogo = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`scale-[0.85] ${className}`}
    >
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
            {" "}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C9.284 2 8.944 2.01133 7.87733 2.06C6.81267 2.10867 6.08533 2.278 5.44933 2.52533C4.78267 2.776 4.178 3.16933 3.678 3.67867C3.16948 4.17809 2.77591 4.78233 2.52467 5.44933C2.27867 6.08533 2.10867 6.81333 2.06 7.878C2.012 8.944 2 9.28333 2 12C2 14.7167 2.01133 15.056 2.06 16.1227C2.10867 17.1873 2.278 17.9147 2.52533 18.5507C2.776 19.2173 3.16933 19.822 3.67867 20.322C4.1781 20.8305 4.78234 21.2241 5.44933 21.4753C6.08533 21.722 6.81267 21.8913 7.87733 21.94C8.944 21.9887 9.284 22 12 22C14.716 22 15.056 21.9887 16.1227 21.94C17.1873 21.8913 17.9147 21.722 18.5507 21.4747C19.2173 21.224 19.822 20.8307 20.322 20.3213C20.8305 19.8219 21.2241 19.2177 21.4753 18.5507C21.722 17.9147 21.8913 17.1873 21.94 16.1227C21.9887 15.056 22 14.716 22 12C22 9.284 21.9887 8.944 21.94 7.87733C21.8913 6.81267 21.722 6.08533 21.4747 5.44933C21.2236 4.78204 20.83 4.17755 20.3213 3.678C19.8219 3.16948 19.2177 2.77591 18.5507 2.52467C17.9147 2.27867 17.1867 2.10867 16.122 2.06C15.056 2.012 14.7167 2 12 2ZM12 3.802C14.67 3.802 14.9867 3.812 16.0413 3.86C17.016 3.90467 17.5453 4.06667 17.898 4.20467C18.3647 4.38533 18.698 4.60267 19.048 4.952C19.398 5.302 19.6147 5.63533 19.7953 6.102C19.9327 6.45467 20.0953 6.984 20.14 7.95867C20.188 9.01333 20.198 9.33 20.198 12C20.198 14.67 20.188 14.9867 20.14 16.0413C20.0953 17.016 19.9333 17.5453 19.7953 17.898C19.6353 18.3324 19.3799 18.7253 19.048 19.048C18.7254 19.38 18.3324 19.6354 17.898 19.7953C17.5453 19.9327 17.016 20.0953 16.0413 20.14C14.9867 20.188 14.6707 20.198 12 20.198C9.32933 20.198 9.01333 20.188 7.95867 20.14C6.984 20.0953 6.45467 19.9333 6.102 19.7953C5.66764 19.6353 5.27467 19.3799 4.952 19.048C4.62012 18.7253 4.36475 18.3323 4.20467 17.898C4.06733 17.5453 3.90467 17.016 3.86 16.0413C3.812 14.9867 3.802 14.67 3.802 12C3.802 9.33 3.812 9.01333 3.86 7.95867C3.90467 6.984 4.06667 6.45467 4.20467 6.102C4.38533 5.63533 4.60267 5.302 4.952 4.952C5.27463 4.62003 5.66761 4.36465 6.102 4.20467C6.45467 4.06733 6.984 3.90467 7.95867 3.86C9.01333 3.812 9.33 3.802 12 3.802Z"
                fill="#ffffff"
            ></path>{" "}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 15.3367C11.5618 15.3367 11.128 15.2504 10.7231 15.0827C10.3183 14.915 9.95047 14.6692 9.64064 14.3594C9.3308 14.0495 9.08502 13.6817 8.91734 13.2769C8.74965 12.8721 8.66335 12.4382 8.66335 12C8.66335 11.5618 8.74965 11.1279 8.91734 10.7231C9.08502 10.3183 9.3308 9.95046 9.64064 9.64062C9.95047 9.33078 10.3183 9.08501 10.7231 8.91732C11.128 8.74964 11.5618 8.66333 12 8.66333C12.885 8.66333 13.7336 9.01487 14.3594 9.64062C14.9851 10.2664 15.3367 11.1151 15.3367 12C15.3367 12.8849 14.9851 13.7336 14.3594 14.3594C13.7336 14.9851 12.885 15.3367 12 15.3367ZM12 6.86C10.6368 6.86 9.32942 7.40153 8.36549 8.36547C7.40155 9.32941 6.86002 10.6368 6.86002 12C6.86002 13.3632 7.40155 14.6706 8.36549 15.6345C9.32942 16.5985 10.6368 17.14 12 17.14C13.3632 17.14 14.6706 16.5985 15.6345 15.6345C16.5985 14.6706 17.14 13.3632 17.14 12C17.14 10.6368 16.5985 9.32941 15.6345 8.36547C14.6706 7.40153 13.3632 6.86 12 6.86ZM18.6353 6.76667C18.6353 7.0889 18.5073 7.39794 18.2795 7.6258C18.0516 7.85366 17.7426 7.98167 17.4204 7.98167C17.0981 7.98167 16.7891 7.85366 16.5612 7.6258C16.3334 7.39794 16.2053 7.0889 16.2053 6.76667C16.2053 6.44443 16.3334 6.13539 16.5612 5.90753C16.7891 5.67968 17.0981 5.55167 17.4204 5.55167C17.7426 5.55167 18.0516 5.67968 18.2795 5.90753C18.5073 6.13539 18.6353 6.44443 18.6353 6.76667Z"
                fill="#ffffff"
            ></path>{" "}
        </g>
    </svg>
);

const LineLogo = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
            {" "}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C17.5141 2 22 5.6405 22 10.1152C22 11.9059 21.3056 13.5189 19.8565 15.1083H19.8569C17.7589 17.5229 13.0673 20.4642 12 20.914C10.9622 21.3513 11.0824 20.6672 11.1299 20.3969C11.1312 20.3892 11.1325 20.3819 11.1337 20.3749C11.1592 20.2245 11.2765 19.5188 11.2765 19.5188C11.3101 19.2634 11.345 18.8673 11.2441 18.6146C11.1321 18.3363 10.6888 18.1918 10.3632 18.1214C5.55755 17.4864 2 14.1267 2 10.1152C2 5.6405 6.48633 2 12 2ZM9.97218 7.95281H9.2631C9.15766 7.95281 9.07208 8.03839 9.07208 8.14374V12.508C9.07208 12.6135 9.15766 12.699 9.2631 12.699H9.97218C10.0777 12.699 10.1631 12.6135 10.1631 12.508V8.14374C10.1631 8.03839 10.0777 7.95281 9.97218 7.95281ZM8.47184 12.508C8.47184 12.6135 8.38636 12.6989 8.28091 12.6989H5.47142C5.36598 12.6989 5.2805 12.6135 5.2805 12.508V8.14381C5.2805 8.03836 5.36598 7.95288 5.47142 7.95288H6.18069C6.28566 7.95288 6.37152 8.03874 6.37152 8.14381V11.6079H8.28091C8.38589 11.6079 8.47184 11.6938 8.47184 11.7987V12.508ZM15.8637 12.6989H18.6732C18.7787 12.6989 18.8641 12.6135 18.8641 12.508V11.7987C18.8641 11.6938 18.7782 11.6079 18.6732 11.6079H16.7639V10.8715H18.6732C18.7787 10.8715 18.8641 10.786 18.8641 10.6805V9.97128C18.8641 9.8663 18.7782 9.78035 18.6732 9.78035H16.7639V9.0439H18.6732C18.7787 9.0439 18.8641 8.95842 18.8641 8.85297V8.14381C18.8641 8.03874 18.7782 7.95288 18.6732 7.95288H15.8637C15.7583 7.95288 15.6728 8.03836 15.6728 8.14381V12.508C15.6728 12.6135 15.7583 12.6989 15.8637 12.6989ZM14.091 7.95281H14.8001C14.9056 7.95281 14.9911 8.03839 14.9911 8.14374V12.508C14.9911 12.6135 14.9056 12.699 14.8001 12.699H14.0949C14.0776 12.699 14.0609 12.6964 14.045 12.6922L14.0437 12.692L14.0422 12.6916C14.0377 12.6903 14.0333 12.6888 14.029 12.6873L14.023 12.6851C14.0198 12.6839 14.0168 12.6826 14.0136 12.6811C14.0105 12.6797 14.0075 12.6782 14.0045 12.6766C14.0025 12.6757 14.0007 12.6746 13.9988 12.6736C13.9948 12.6713 13.9907 12.6689 13.9868 12.6663L13.9847 12.6648C13.966 12.6521 13.9492 12.6362 13.9354 12.6167L11.9361 9.91675V12.508C11.9361 12.6135 11.8506 12.699 11.7452 12.699H11.036C10.9306 12.699 10.8451 12.6135 10.8451 12.508V8.14374C10.8451 8.03839 10.9306 7.95281 11.036 7.95281H11.7412C11.7435 7.95281 11.7456 7.95309 11.7479 7.95318C11.7513 7.95328 11.7546 7.95337 11.758 7.95375L11.7683 7.95487L11.7764 7.95618L11.7877 7.95862L11.7946 7.9604C11.7985 7.96153 11.8023 7.96274 11.8062 7.96415L11.8124 7.9664C11.8161 7.9679 11.8199 7.96949 11.8235 7.97118L11.8296 7.97418C11.8332 7.97596 11.8367 7.97793 11.8401 7.97999L11.8459 7.98346C11.8495 7.9858 11.8529 7.98805 11.8561 7.9904L11.8613 7.99424C11.8649 7.99714 11.8682 8.00005 11.8716 8.00305L11.8752 8.00633C11.8792 8.01008 11.883 8.01411 11.8867 8.01823L11.8879 8.01964C11.8934 8.02583 11.8986 8.03239 11.9033 8.03932L13.9 10.7359V8.14374C13.9 8.03839 13.9855 7.95281 14.091 7.95281Z"
                fill="#ffffff"
            ></path>{" "}
        </g>
    </svg>
);

const DiscordLogo = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
            <path
                d="M18.8944 4.34399C17.5184 3.71467 16.057 3.256 14.5317 3C14.3397 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14394 4.13067C8.9946 3.77866 8.77059 3.33067 8.58925 3C7.05328 3.256 5.59194 3.71467 4.22555 4.34399C1.46289 8.41865 0.716219 12.3973 1.08955 16.3226C2.92421 17.6559 4.6949 18.4666 6.43463 19C6.86129 18.424 7.2453 17.8053 7.57597 17.1546C6.94663 16.92 6.3493 16.632 5.7733 16.2906C5.92263 16.184 6.07197 16.0667 6.21064 15.9493C9.68796 17.5387 13.4544 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5237 17.1546C15.8543 17.8053 16.2384 18.424 16.665 19C18.4037 18.4666 20.185 17.6559 22.0101 16.3226C22.4687 11.7787 21.2837 7.83202 18.8944 4.34399ZM8.05596 13.9013C7.01061 13.9013 6.15728 12.952 6.15728 11.7893C6.15728 10.6267 6.98928 9.67731 8.05596 9.67731C9.11194 9.67731 9.97591 10.6267 9.95457 11.7893C9.95457 12.952 9.11194 13.9013 8.05596 13.9013ZM15.065 13.9013C14.0197 13.9013 13.1653 12.952 13.1653 11.7893C13.1653 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9637 11.7893C16.9637 12.952 16.1317 13.9013 15.065 13.9013Z"
                fill="#ffffff"
            ></path>{" "}
        </g>
    </svg>
);

const WhatsAppLogo = ({ className }) => (
    <svg
        fill="#ffffff"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 308 308"
        xmlSpace="preserve"
        className={`${className} scale-[0.8]`}
    >
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
            <g>
                <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path>
                <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path>
            </g>
        </g>
    </svg>
);

export default function Contact({ id }) {
    const logos = [
        {
            Logo: InstagramLogo,
            bgColor:
                "from-[#833AB4] group-hover:drop-shadow-[0_0_15px_#833AB4]",
            link: "https://www.instagram.com/ppif.umn/",
            Text: () => (
                <span>
                    Follow us at <span className="font-bold">@ppif.umn</span>!
                </span>
            ),
        },
        {
            Logo: LineLogo,
            bgColor:
                "from-[#06C755] group-hover:drop-shadow-[0_0_15px_#06C755]",
            link: "https://line.me/ti/g2/...",
            Text: () => (
                <span>
                    Join our LINE Group{" "}
                    <span className="font-bold">PPIF UMN 2024</span>!
                </span>
            ),
        },
        {
            Logo: DiscordLogo,
            bgColor:
                "from-[#5865F2] group-hover:drop-shadow-[0_0_15px_#5865F2]",
            link: "https://discord.gg/YrEcdQau7w",
            Text: () => (
                <span>
                    Join our Discord Server{" "}
                    <span className="font-bold">PPIF UMN</span>!
                </span>
            ),
        },
        {
            Logo: WhatsAppLogo,
            link: "https://chat.whatsapp.com/IsEg6vPTR5m0nJAccBzkRF",
            bgColor:
                "from-[#25D366] group-hover:drop-shadow-[0_0_15px_#25D366]",
            Text: () => (
                <span>
                    Join our WhatsApp Group
                    <span className="font-bold">PPIF UMN</span>!
                </span>
            ),
        },
    ];

    return (
        <div
            id={id}
            className="flex h-screen w-full flex-col items-center justify-center px-6 py-12 text-white md:px-12 lg:p-20"
        >
            <div className="text-heading mb-8 flex space-x-4 text-center min-[600px]:mb-16">
                <span className="glow-blue font-extrabold italic text-ppif-blue">
                    CONTACT
                </span>{" "}
                <span className="glow-white font-light">Us</span>
            </div>

            <div className="grid grid-cols-2 gap-4 min-[600px]:gap-x-8 min-[600px]:gap-y-8 xl:grid-cols-4 xl:gap-y-0">
                {logos.map(({ Logo, bgColor, link }, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center justify-center rounded-xl p-8 min-[600px]:p-12"
                    >
                        <div
                            className={`smooth absolute left-0 top-0 h-full w-full origin-bottom-left rounded-xl bg-gradient-to-r to-transparent group-hover:rotate-12 ${bgColor} opacity-50 group-hover:opacity-100`}
                        ></div>
                        <div className="smooth absolute left-0 top-0 h-full w-full origin-bottom-left rounded-xl border-[2px] border-white/10 bg-white/5 p-12 shadow-inner backdrop-blur-md"></div>
                        <a href={link} target="__blank">
                            <Logo className="smooth group-hover:glow-white w-[50px] shrink-0 cursor-pointer opacity-75 group-hover:opacity-100 min-[380px]:w-[100px] min-[600px]:w-[125px]" />
                        </a>
                        {/* <div className="text-footer smooth absolute -bottom-[85px] left-0 rounded-lg bg-white/10 px-6 py-4 text-center font-light uppercase tracking-widest opacity-0 group-hover:opacity-100">
                            <Text />
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
