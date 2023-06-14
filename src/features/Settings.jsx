import { useContext } from "react"
import SettingsContext from "./SettingsContext"
import BackButton from "./Backbutton"

function Settings() {
    const settingsInfo = useContext(SettingsContext)
    return (
        <div className="settingsPage">
            {console.log(typeof settingsInfo.workMinutes)}
            <label>Work: {settingsInfo.workMinutes}:00</label>
            <div className="silderContainer">
                <input type="range" min={1} max={120} className="slider" defaultValue={settingsInfo.workMinutes} onChange={(event) => settingsInfo.setWorkMinutes(event.target.value)} />
            </div>
            <label>Break: {settingsInfo.breakMinutes}:00</label>
            <div className="silderContainer">
                <input type="range" min={1} max={120} className="slider" defaultValue={settingsInfo.breakMinutes} onChange={(event) => settingsInfo.setBreakMinutes(event.target.value)} />
            </div>
            <div>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
        </div>
    )
}

export default Settings
