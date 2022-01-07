import { Avatar } from "@material-ui/core";

import styles from "./SidebarChat.module.css";

function SidebarChat() {
    return (
        <div className={styles.sidebarChat}>
            <Avatar />
            <div className={styles.sidebarChat__info}>
                <h2>Chat Name</h2>
                <p>Last message of the chat</p>
            </div>
        </div>
    )
}

export default SidebarChat;
