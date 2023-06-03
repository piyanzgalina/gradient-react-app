import { useState } from "react";
import './InputWithOptionsStyle.css';

const InputWithOptions = ({
    label,
    value,
    options,
    handleChange,
    unit
    }) => {

    const [selectedOption, setSelectOption] = useState(false)

    return (
        <div className="input-with-options-container">


            <label
            className="input-container"
            htmlFor={label}
            > {label}{unit}
            
                <input
                    className="input option-input"
                    name={label}
                    id={label}
                    type="text"
                    value={value}
                    onChange={(e) => {
                        console.log(e)
                        handleChange(e.target.value)
                    }}
                />
            </label>


            <div className="selection-container right">

                <div
                className="selection-icon"
                onClick={() => setSelectOption((prev) => !prev)}
                >
                    {selectedOption ?
                        (<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z"/></svg>)
                        : (<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg>)
                    }
                </div>


                { selectedOption && (
                    <div className="selection-items">
                    {options.map((i, k) => (
                        <div
                            className="selection-item"
                            key={k}
                            onClick={() => {
                                handleChange(i);
                                setSelectOption(false);
                            }}
                            >
                            <div className="selection-item">
                            {i}{unit}
                            </div>
                        </div>
                    ))}
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default InputWithOptions;