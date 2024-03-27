import { colord } from "colord";
import './InputHexStyle.css';

const InputHex = ({ 
    colors,
    selectedColor,
    setColors,
    setSelectedColor
    }) => {

    let rgbaColor;

    const hex2rgba = (hex) => {
        return(
            colord(hex).toRgbString()
        ); 
    };

    return (
        <div className="input-container">
            <label htmlFor="color-input">
            HEX
            </label>
           
            <input
                type="text"
                className="hex-input"
                maxLength={ 7 }
                value={ rgbaColor }
                placeholder="#"
                onChange={ (e) => {
                    rgbaColor = hex2rgba(e.target.value);
                    console.log(rgbaColor)
                    setColors(
                        colors.map((c) => 
                        c.id == selectedColor.id
                        ? {
                            code: rgbaColor,
                            position:c.position,
                            id: c.id,
                        }
                        : c 
                    ));
                    setSelectedColor((prev) => ({
                        ...prev,
                        code: rgbaColor,
                    }));
            }}
            />
        </div>
    )
}
    
export default InputHex;