import React from "react";

export const items = [
    // {
    //     icon1: "bi bi-list",
    //     icon2: "bi bi-x-lg",
    //     className : "sidebar-icon-open"
    // },
    {
        title: "Dashboard",
        icon: "bi bi-speedometer",
        path: "/jobseekerhome"
    },

    {
        title: "Products",
        icon: "bi bi-bag",
        children: [
            {
                title: "Our Products",
                icon: "bi bi-bag-check",
                path: "/productsStruct"
            },
            {
                title: "Add Product",
                icon: "bi bi-bag-plus",
                path: "/productsStruct"
            }
        ]
    },
    {
        title: "Orders",
        icon: "bi bi-cart",
        path: "/jsdetails"
    },
    {
        title: "Customers",
        icon: "bi bi-people",
        path: "/cuxStructs"
    },
    {
        title: "Reports",
        icon: "bi bi-pie-chart",
        path: "/reportsStruct"
    },
    {
        title: "Register",
        icon: "bi bi-file-text",
        children: [
            {
                title: "Admins",
                icon: "bi bi-person",
                path: "/adminStruct"
            },
            {
                title: "Add Admin",
                icon: "bi bi-person-add",
                path: "/Signup"
            }
        ]
    },
    {
        title: "Logout",
        icon: "bi bi-box-arrow-right",
        path: "/logout",
        isLastItem: true
    }
];

export const ConsultantSidebarData = [
    {
        title: "Dashboard",
        icon: "bi bi-speedometer",
        link: "/consultanthome"
    },
    {
        title: "Appointments",
        icon: "bi bi-calendar-check",
        link: "/consultantAppointments"
    },
    {
        title: "Details",
        icon: "bi bi-person",
        link: "/consultantDetails"
    },
    {
        title: "Logout",
        icon: "bi bi-box-arrow-right",
        link: "/logout",
        isLastItem: true
    }
];

export const DropDownData = [
    {
        title: "Profile",
        icon: "bi bi-person"
    },
    {
        title: "Settings",
        icon: "bi bi-gear"
    },
    {
        title: "Logout",
        icon: "bi bi-box-arrow-right"
    }
];

