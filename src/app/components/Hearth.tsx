import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../public/Animation - 1707840381472.json";

interface HearthInterface {
    className?: string;
}
const Hearth = ({className}: HearthInterface) => {
    return (
        <div className={className}>
            <Lottie options={{
                animationData: animationData,
            }}
                    height={100}
                    width={100}/>
        </div>
    );
};

export default Hearth;
