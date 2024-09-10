import React, {useRef} from "react";
import './VideoPlayer.css';
import videoUrl from '../../assets/jjc.mp4'

export const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }
    return(
        <div className={`video_player ${playState ? '' : 'hide'} `} ref={player} onClick={closePlayer}>
            <video src={videoUrl} autoPlay muted controls/>
        </div>
    );
}