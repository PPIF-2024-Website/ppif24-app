import React, { Children, useMemo } from "react";
import Items from "./Items";

export const Carousel = ({ children }) => {
    const slides = useMemo(() => {
        if (children.length > 1) {
            let items = Children.map(children, (child, index) => (
                <Items key={index} className="">
                    {child}
                </Items>
            ));

            return [
                <Items key={children.length + 1} className="">
                    {children[children.length - 1]}
                </Items>,
                ...items,
                <Items key={children.length + 2} className="">
                    {children[0]}
                </Items>,
            ];
        }

        return <Items className="">{children[0]}</Items>;
    }, [children]);
    return (
        <section className="h-full max-h-[442px] min-h-[221px] w-full min-w-[331px] max-w-[1133px] border-2 border-red-600">
            <ul className="flex border-2 border-blue-600">{slides}</ul>
        </section>
    );
};

export default Carousel;
