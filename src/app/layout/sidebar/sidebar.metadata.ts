export interface RouteInfo {
    path: string;
    title: string;
    moduleName: string;
    iconType: string;
    icon: string;
    class: string;
    groupTitle: boolean;
    badge: string;
    badgeClass: string;
    role: string[];
    submenu: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    // Your route definitions here
  ];