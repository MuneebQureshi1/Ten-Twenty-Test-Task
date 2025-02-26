
import {dashboardSvg, mediaLibrarySvg, moreSvg, watchSvg } from "../assets/svgs/BottomBarIcons";
import { Theme } from "./Theme";

export const svg={
    activeWatchIcon:watchSvg(Theme.bottomBarActiveText),
    InActiveWatchIcon:watchSvg(Theme.bottomBarInactiveText),
    activeDashboardIcon:dashboardSvg(Theme.bottomBarActiveText),
    inActiveDashboardIcon:dashboardSvg(Theme.bottomBarInactiveText),
    activeMediaIcon:mediaLibrarySvg(Theme.bottomBarActiveText),
    inActiveMediaIcon:mediaLibrarySvg(Theme.bottomBarInactiveText),
    activeMoreIcon:moreSvg(Theme.bottomBarActiveText),
    inActiveMoreIcon:moreSvg(Theme.bottomBarInactiveText)
}