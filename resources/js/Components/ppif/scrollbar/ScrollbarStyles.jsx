import React from "react";

const ScrollbarStyles = () => {
    return (
        <style>
            {`
        /* STYLING SCROLLBAR */
        ::-webkit-scrollbar {
            width: 15px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 10px;
            margin-top: 20px;
             margin-bottom: 20px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.18);
            border-radius: 10px;

        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.18);
        }
      `}
        </style>
    );
};

export default ScrollbarStyles;
