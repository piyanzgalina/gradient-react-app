import { useState } from 'react';
import './MainStyle.css'
import ColorPicker from '../Picker/ColorPicker';
import Slider from '../Slider/Slider';
import InputHex from '../InputHex/InputHex';
import InputWithOptions from '../InputWithOptions/InputWithOptions';
import Toggle from '../Toggle/Toggle';
import CodePanel from '../CodePanel/CodePanel';



export default function Main() {
    const [colors, setColors] = useState([
        {
            code: "rgba(231, 112, 112, 1)",
            position: 35,
            id: 0,
        },
        {
            code: "rgba(145, 240, 153, 1)",
            position: 100,
            id: 1,
        },
    ]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const [id, setId] = useState(2);

    const [state, setState] = useState({
        position: "0",
        rotation: 90,
        type: "radial-gradient",
    });

    const AddColor = () => {
        setId(prevId => prevId + 1)
        setColors((prevColors) => [
                ...prevColors,
                {
                    ...prevColors[colors.length - 1],
                    id: id,
                }
            ]
        );
    };

    const handlePosition = (value) => {
        setColors(
            colors.map((c) => 
            c.id == selectedColor.id
            ? {
                code: c.code,
                position: value,
                id: c.id,
            }
            : c
            )
        );

        setSelectedColor((prevColor) => ({
            ...prevColor,
            position: value,
        })
        );

    };

    const handleType = (name) => {
        setState((prevState) => ({
            ...prevState,
            type: name,
        })
        );
    };

    const handleRotation = (value) => {
        setState((prevState) => ({
            ...prevState,
            rotation: value,
        })
        );
    };


    const gradientColor = (colors) => {
        let colorSchema = "";
        [...colors]
          .sort((a, b) => a.position - b.position)
          .forEach((color) => {
            colorSchema += `${color.id > 0 ? "," : ""} ${color.code} ${color.position}%`;
          });
  
        return colorSchema;
    };

    const gradientCode = (state, colors) => {
        const code = `${state.type}(${state.type == "radial-gradient" ? "circle" : `${state.rotation}deg`},${gradientColor(colors)})`;
        return code;
    };

    const code = gradientCode(state, colors);

    return (
        <main className="main">

            <div
                className='screen'
                style={{
                    background: code,
                }}
            ></div>

            <section className='container'>

                <div className='color-gradient-settings'>

                    <div className='picker'>
                        <ColorPicker
                            color={selectedColor.code}
                            colors={colors}
                            selectedColor={selectedColor}
                            setColors={setColors}
                            setSelectedColor={setSelectedColor}
                        />
                    </div>

                    <div className=''>
                        <div className='sliders'>

                            {colors.map((color) => (
                                    <Slider 
                                        key={color.id}
                                        color={color}
                                        colors={colors}
                                        setColors={setColors}
                                        selectedColor={selectedColor}
                                        setSelectedColor={setSelectedColor}
                                    />
                                ))
                            }
                        </div>

                        <div className='color-icon-container'>
                            {colors.map((color) => (
                                <span
                                    key={color.id}
                                    className='color-icon'
                                    style={{
                                        background: color.code,
                                        border: `${
                                          color.id == selectedColor.id
                                            ? "2px solid #1f2667"
                                            : ""
                                        }`,
                                    }}
                                    onClick={() => setSelectedColor(color)}
                                >
                                </span>
                            ))}
                        
                            <span
                                className='add-color'
                                onClick={AddColor}
                            >+</span>
                        </div>
                        
                    </div>

                    <div className='inputs-container'>
                        <InputHex
                            colors={colors}
                            selectedColor={selectedColor}
                            setColors={setColors}
                            setSelectedColor={setSelectedColor}
                        />

                        <Toggle
                            active={state.type}
                            handleClick={handleType}
                        />

                        <InputWithOptions
                            label={'Position'}
                            handleChange={handlePosition}
                            options={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                            unit={'%'}
                            value={selectedColor.position}
                        />

                        <InputWithOptions
                                label={'Rotation'}
                                handleChange={handleRotation}
                                options={[0, 45, 90, 135, 180, 225, 270, 315, 360]}
                                unit={'°'}
                                value={state.rotation}
                            
                        />
                    </div>
                </div>

                <CodePanel
                    code={code}
                />

            </section>
        </main>
    )
}