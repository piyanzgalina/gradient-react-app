import './ToggleStyle.css';

const Toggle = ({
    handleClick,
    active,
}) => {

    return(
        <div>
            <button
                className="toggle left"
                style={{
                   backgroundColor: `${
                    active == "linear-gradient"
                    ? "#1f2667"
                    : "transparent"
                   }`,
                }}
                name="linear-gradient"
                onClick={(e) => handleClick(e.target.name)}
            >
                Linear
            </button>

            <button
                className="toggle right"
                style={{
                   backgroundColor: `${
                    active == "radial-gradient"
                    ? "#1f2667"
                    : "transparent"
                   }`,
                }}
                name="radial-gradient"
                onClick={(e) => handleClick(e.target.name)}
            >
                Radial
            </button>
        </div>

    )
};

export default Toggle;