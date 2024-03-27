import './CodePanelStyle.css';
import { useState, useEffect } from 'react';

const CodePanel = ({
    code
}) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        setIsCopied(false)}, [code]
    )

    return(
        <section
            className='code-panel-container'>

            <div>
                <pre className='code-container'>
                    <code>
                        <span className='blue'>background: </span>
                        {code}
                    </code>
                </pre>
            </div>
            <button
                onClick={() => {
                    navigator.clipboard.writeText(code)
                    setIsCopied((prev) => !prev)
                }}
                style={{
                    background: `${isCopied ? code : '#545475'}`,
                    color: '#fff',
                }}
                className="copy-btn"
                >
                {isCopied ? "Copied 👌" : "📁 Copy to Clipboard"}
            </button>

        </section>
    )
};

export default CodePanel;

