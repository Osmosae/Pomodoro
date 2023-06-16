import Settings from "./features/Settings"
import SettingsContext from "./features/SettingsContext"
import Timer from "./features/Timer"
import { useState } from "react"
const App = () => {
    const [showSettings, setShowSettings] = useState(false)
    const [workMinutes, setWorkMinutes] = useState(30)
    const [breakMinutes, setBreakMinutes] = useState(10)

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
