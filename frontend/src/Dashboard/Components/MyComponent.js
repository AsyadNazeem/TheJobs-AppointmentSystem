import React, {useState} from "react";
import Sidebar from "../JobSeeker/Sidebar";
import {items, DropDownData} from "./Data/Data.js";
import ConsultantSidebar from "../Consultent/ConsultantSidebar";

export default function MyComponent() {
    const [open1, setOpen1] = useState(true);

    return (
        <div>
            <div className={open1 ? 'sidebar' : "sidebar-open"}>
                {items.map((item, index) =>
                    <Sidebar key={index}
                                  className = {item.className}
                                  item={item}
                                  isLastItem={index === items.length - 1}
                    />)}
            </div>
            {/*<div className="dropdown">*/}
            {/*    {DropDownData.map((item1, index) =>*/}
            {/*        <TopBar key={index}*/}
            {/*                item={item1}*/}
            {/*        />)}*/}
            {/*</div>*/}
        </div>
    )
}
