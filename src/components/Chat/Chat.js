import { useRef } from "react";
import axios from "../../axios";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar, IconButton } from "@material-ui/core";

import styles from "./Chat.module.css";

function Chat({ messages }) {
    const messageRef = useRef();

    const sendHandler = async (ev) => {
        ev.preventDefault();

        try {
            await axios.post("/messages/new", {
                message: messageRef.current.value,
                name: "Ramiro",
                timestamp: "23:12p.m",
                received: false
            })
        } catch (err) {
            throw err;
        } finally {
            messageRef.current.value = "";
            window.scroll({ top: window.scrollY })
        }
    }

    return (
        <div className={styles.chat} >
            <div className={styles.chat__header}>
                <Avatar />

                <div className={styles.chat__headerInfo} >
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className={styles.chat__headerRight}>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            <div className={styles.chat__body} >
                {messages.map(({ name, message, timestamp, received }, index) => (
                    <p className={received ? styles.chat__message : styles.chat__reciever} key={index}>
                        <span className={styles.chat__name}>{name}</span>
                        {message}
                        <span className={styles.chat__timestamp}>{timestamp}</span>
                    </p>
                ))}
            </div>

            <div className={styles.chat__footer}>
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Escribe un mensaje" ref={messageRef} />
                    <button type="submit" onClick={sendHandler}>Enviar Mensaje</button>
                </form>
                <MicIcon />
            </div>
        </div >
    )
}

export default Chat;
