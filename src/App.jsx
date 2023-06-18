import Settings from "./features/Settings"
import SettingsContext from "./features/SettingsContext"
import Timer from "./features/Timer"
import { useState } from "react"

/**
 * App component
 *
 * This component renders the main application UI.
 * It manages the state for showing settings, work minutes,
 * and break minutes.
 */
const App = () => {
    // State variables
    const [showSettings, setShowSettings] = useState(false)
    const [workMinutes, setWorkMinutes] = useState(30)
    const [breakMinutes, setBreakMinutes] = useState(10)
    // Render the main application UI
    return (
        <main>
            <SettingsContext.Provider
                value={{
                    showSettings,
                    setShowSettings,
                    workMinutes,
                    breakMinutes,
                    setWorkMinutes,
                    setBreakMinutes,
                }}
            >
                {showSettings ? <Settings /> : <Timer />}
            </SettingsContext.Provider>
        </main>
    )
}

export default App
