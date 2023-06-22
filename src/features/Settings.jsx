import { useContext } from "react"
import SettingsContext from "./SettingsContext"
import BackButton from "./Backbutton"

/**
 * This function renders the settings page with sliders to set work and break minutes.
 * It receives the settings information from the SettingsContext using useContext.
 * It also renders a BackButton component to allow the user to navigate back.
 */
function Settings() {
    const settingsInfo = useContext(SettingsContext)
    return (
        <div className="settingsPage">
            {/* Render label for work minutes */}
            <label>Work: {settingsInfo.workMinutes}:00</label>

            <div className="silderContainer">
                {/* Render slider for work minutes */}
                <input type="range" min={1} max={120} className="slider" defaultValue={settingsInfo.workMinutes} onChange={(event) => settingsInfo.setWorkMinutes(event.target.value)} />
            </div>

            {/* Render label for break minutes */}
            <label>Break: {settingsInfo.breakMinutes}:00</label>

            <div className="silderContainer">
                {/* Render slider for break minutes */}
                <input type="range" min={1} max={120} className="slider" defaultValue={settingsInfo.breakMinutes} onChange={(event) => settingsInfo.setBreakMinutes(event.target.value)} />
            </div>

            <div>
                {/* Render BackButton component */}
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
        </div>
    )
}

export default Settings
