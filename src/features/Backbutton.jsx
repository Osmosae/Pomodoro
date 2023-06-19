/**
 * Renders a back button with an SVG icon and text.
 * @param {object} props - The props for the button component.
 * @returns {JSX.Element} - The rendered back button.
 */
function BackButton(props) {
    return (
        <button {...props} className="backButton">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            Back
        </button>
    )
}

export default BackButton
