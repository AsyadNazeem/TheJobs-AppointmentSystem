import React from 'react';
import "../Style/Consultant.css";

const { ConsultantSidebarData } = require("../Components/Data/Data");

export default function ConsultantSidebar() {
    const sortedSidebarData = ConsultantSidebarData.sort((a, b) => {
        if (a.isLastItem) {
            return 1; // Move 'a' to the end
        } else if (b.isLastItem) {
            return -1; // Move 'b' to the end
        }
        return 0;
    });

    return (
        <nav id="Csidebar">
            <ul className="sidebar-list">
                {sortedSidebarData.map((item, index) => {
                    return (
                        <li
                            key={index}
                            id={window.location.pathname === item.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = item.link;
                            }}
                            className="row">
                            <span className="icon"><i className={item.icon} /></span>
                            <span className="title">{item.title}</span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
