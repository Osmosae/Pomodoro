import Settings from "./features/Settings"
import Timer from "./features/Timer"
import { useState } from "react"
const App = () => {
    const [showSettings, setShowSettings] = useState(true)
    return <main>{showSettings ? <Settings /> : <Timer />}</main>
}

export default App
