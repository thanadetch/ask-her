"use client";
import Image from "next/image";
import Sticker3 from "../../public/sticker_3.gif";
import Sticker4 from "../../public/sticker_4.gif";
import React, {useState} from "react";
import Hearth from "@/app/components/Hearth";

export default function Home() {
    const [isOk, setIsOk] = useState<boolean>();
    const [size, setSize] = useState<number>(1);
    return (
        <div className={"container relative bg-pink-50 h-lvh flex gap-4 flex-col items-center justify-center"}>

            {isOk && <Hearth className={"absolute top-3 left-0"}/>}
            {isOk && <Hearth className={"absolute top-3 right-0"}/>}
            <div className={"flex flex-col items-center justify-center"}>
                {isOk === undefined && <Image src={Sticker4} className={"w-[100%] pb-7"} alt={"Sticker4"}/>}
                {isOk === true && <Image src={Sticker3} className={"w-[85%]"} alt={"1"}/>}
                {isOk === undefined && <div className={"text-pink-500 text-4xl"}>
                    Will you be my girlfriend?
                </div>}
            </div>


            {isOk == undefined && (
                <div className={"flex flex-row gap-3 items-center"}>
                    <button className="btn btn-active" onClick={() => setSize(value => value + 0.1)}>No</button>
                    <button className="btn btn-active btn-secondary btn-lg"
                            onClick={() => setIsOk(true)}
                            style={{width: 120 * size, height: 60 * size, fontSize: 18 * size}}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24 * size, height: 24 * size}}
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                        Ok
                    </button>
                </div>
            )}
            {isOk && <div className={"flex flex-col gap-4 px-4 text-pink-400 text-3xl mt-[-50px]"}>
                <div>
                    My love, You are everything for me.
                </div>
                <div>
                    I wish to wake up and see your beautiful face every morning.
                </div>
                <div>
                    I crave to share every moment, every experience with you, to hold
                    your hand through life&apos;s journey,
                </div>
                <div>
                    To take care you with all my heart and love you with all my soul.
                </div>

                <div className={'mt-4'}>
                    My dearest Janis :)
                </div>

            </div>}
        </div>
    );
}
