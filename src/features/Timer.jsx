import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import PlayButton from "./PlayButton"
import PauseButton from "./PauseButton"
import SettingsButton from "./SettingsButton"
import { useContext, useState, useEffect, useRef } from "react"
import SettingsContext from "./SettingsContext"

function Timer() {
    const settingsInfo = useContext(SettingsContext)
    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState("work") // work, break, null
    const [secondsLeft, setSecondsLeft] = useState(0)

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    function tick() {
        secondsLeftRef.current--
        setSecondsLeft(secondsLeftRef.current)
    }
    useEffect(() => {
        function switchMode() {
            const nextMode = modeRef.current === "work" ? "break" : "work"
            const nextSeconds = (nextMode === "work" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60
            setMode(nextMode)
            modeRef.current = nextMode
            setSecondsLeft(nextSeconds)
            secondsLeftRef.current = nextSeconds
        }

        secondsLeftRef.current = settingsInfo.workMinutes * 60
        setSecondsLeft(secondsLeftRef.current)

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return
            }
            if (secondsLeftRef.current === 0) {
                return switchMode()
            }
            tick()
        }, 1000)
        return () => clearInterval(interval)
    }, [settingsInfo])
    // const percentage = 20
    const totalSeconds = (mode === "work" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60
    const perc = Math.round((100 * secondsLeft) / totalSeconds)
    const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return (
        <div>
            <CircularProgressbar
                value={perc}
                text={`${minutes}:${seconds}`}
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
                    pathColor: mode === "work" ? "#ff0000" : "#00ff11",
                    textColor: "#eee",
                    trailColor: `rgba(120, 120, 120, ${perc / 100})`,
                    backgroundColor: "#00ff11",
                })}
            />
            <div>
                {isPaused ? (
                    <PlayButton
                        onClick={() => {
                            setIsPaused(false)
                            isPausedRef.current = false
                        }}
                    />
                ) : (
                    <PauseButton
                        onClick={() => {
                            setIsPaused(true)
                            isPausedRef.current = true
                        }}
                    />
                )}
            </div>
            <div>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </div>
        </div>
    )
}

export default Timer
