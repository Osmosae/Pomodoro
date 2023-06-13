import Settings from "./features/Settings"
import SettingsContext from "./features/SettingsContext"
import Timer from "./features/Timer"
import { useState } from "react"
const App = () => {
    const [showSettings, setShowSettings] = useState(true)
    return (
        <main>
            <SettingsContext.Provider
                value={{
                    workMinutes: 25,
                    breakMinutes: 10,
                }}
            >
                {showSettings ? <Settings /> : <Timer />}
            </SettingsContext.Provider>
        </main>
    )
}

export default App
