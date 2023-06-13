import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import PlayButton from "./PlayButton"
import PauseButton from "./PauseButton"
import SettingsButton from "./SettingsButton"

function Timer() {
    const percentage = 20
    return (
        <div>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",
                    // Text size
                    textSize: "16px",
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                    // Colors
                    pathColor: `rgba(199, 62, 62, ${percentage / 100})`,
                    textColor: "#eee",
                    trailColor: `rgba(120, 120, 120, ${percentage / 100})`,
                    backgroundColor: "#00ff11",
                })}
            />
            <div>
                <PlayButton />
                <PauseButton />
            </div>
            <div>
                <SettingsButton />
            </div>
        </div>
    )
}

export default Timer
