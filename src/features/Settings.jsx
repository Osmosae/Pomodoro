import { useContext } from "react"
import SettingsContext from "./SettingsContext"

function Settings() {
    const settingsInfo = useContext(SettingsContext)
    return (
        <div className="settingsPage">
            <label htmlFor="">Work Minutes: </label>
            <div className="silderContainer">
                <input type="range" min={1} max={120} className="slider" defaultValue={settingsInfo.workMinutes} />
            </div>
            <label htmlFor="">Break Minutes: </label>
            <div className="silderContainer">
                <input type="range" min={1} max={120} className="slider" defaultValue={settingsInfo.breakMinutes} />
            </div>
        </div>
    )
}

export default Settings
