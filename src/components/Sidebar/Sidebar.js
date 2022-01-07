import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar} >
            <div className={styles.sidebar__header} >
                <Avatar src="https://yt3.ggpht.com/yti/APfAmoHXaj4e01IqqdyD0uRgXC57JordPQewcjG62-T1XQ=s108-c-k-c0x00ffffff-no-rj" />
                <div className={styles.sidebar__headerRight} >
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className={styles.sidebar__search} >
                <div className={styles.sidebar__searchContainer} >
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Buscar un chat" />
                </div>
            </div>

            <div className={styles.sidebar__chats} >
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
