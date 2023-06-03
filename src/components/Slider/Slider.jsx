import './SliderStyle.css';

const Slider = ({
    color,
    colors,
    setColors,
    setSelectedColor
 }) => {


    return (
        <div className="slider-container">
            <input
            style={{
                backgroundColor: `${color.code}`,
            }}
            type="range"
            min="1"
            max="100"
            className="range"
            value={color.position}
            onChange={(e) => {
                setSelectedColor({
                    ...color,
                    position: e.target.value,
                  });
                setColors(
                    colors.map((c) =>
                    c.id == color.id
                    ? {
                        position: e.target.value,
                        code: c.code,
                        id: c.id,
                    }
                    : c
                    )
                );
            }}
            />
            {colors.length > 2 && (
                <button
                className="remove"
                onClick={() => {
                    setColors(colors.filter((c) => c.id !== color.id));
                }}>-</button>
            )}
        </div>
    )
}

export default Slider;