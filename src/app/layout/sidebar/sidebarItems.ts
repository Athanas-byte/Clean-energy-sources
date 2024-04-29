import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
    {
        path: "./admin/dashboard/home",
        title: "Dashboard",
        moduleName: "dashboard",
        iconType: "feather",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["ADMIN"],
        submenu: [],
        icon: ""
    },
    {
        path: "",
        title: "Employees",
        moduleName: "employees",
        iconType: "feather",
        icon: "user",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["ADMIN"],
        submenu: [
            {
                path: "./employees/available-employees",
                title: "Available employees",
                moduleName: "employees",
                iconType: "feather",
                icon: "",
                class: "",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["ADMIN"],
                submenu:[

                ],

            },
            {
                path: "./employees/employee-remunerations",
                title: "Employee remunerations",
                moduleName: "employees",
                iconType: "feather",
                icon: "",
                class: "",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["ADMIN"],
                submenu:[

                ],

            },
            {
                path: "./employees/employee-profiles",
                title: "Employee profiles",
                moduleName: "employees",
                iconType: "feather",
                icon: "",
                class: "",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: ["ADMIN"],
                submenu:[

                ],

            },
        ]
    }
]