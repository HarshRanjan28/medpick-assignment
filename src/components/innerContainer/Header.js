import React from "react";
import {headerSideIcon} from "../../utils/header-side-icon";
import arrowleft from '../../logo/arrowleft.png';
import B from '../../logo/B.png';

const Header = () => {
    return (
        <div className="w-full flex my-4">
            <div className="w-1/2 flex items-center">
                <span className="rounded-full shadow-md w-[44px] h-[44px] flex justify-center items-center mx-5">
                    <img src={arrowleft} alt="" />
                </span>
                <span className="w-[201px] h-[47px] font-raleway font-semibold text-5xl leading-tight text-left mx-5">Incidents.</span>
            </div>

            <div className="flex">
                <div className="w-[185px] h-[44px] shadow-lg rounded-full flex justify-center items-center mx-5">
                    <div className="rounded-full shadow-md w-[40px] h-[40px] flex justify-center items-center bg-black">
                        <img src={B} alt="logo" />
                    </div>

                    <span className="ml-2">Non Bio Medical</span>
                </div>
                <div className="w-[185px] h-[44px] shadow-lg rounded-full flex justify-center items-center mx-5">
                    <span>Vijaynagar</span>
                </div>

                <div className="flex">
                    {headerSideIcon.map((icons, index) => {
                        return index === headerSideIcon.length - 1 ? (
                            <div className="bg-black rounded-full shadow-md w-[44px] h-[44px] flex justify-center items-center mx-5">
                                <img src={icons} alt="" />
                            </div>
                        ) : (
                            <div className="rounded-full shadow-md w-[44px] h-[44px] flex justify-center items-center mx-5">
                                <img src={icons} alt="icons" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;
