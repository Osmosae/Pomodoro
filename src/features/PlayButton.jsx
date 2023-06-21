/**
 * A functional component that renders a play button.
 *
 * @param {Object} props - The props object.
 * @returns {JSX.Element} - The rendered play button.
 */
function PlayButton(props) {
    return (
        // Render a button element with the props passed in
        <button {...props}>
            {/* Render an SVG element */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {/* Render two path elements to create the play button icon */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
        </button>
    )
}

export default PlayButton
