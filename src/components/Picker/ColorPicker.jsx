import { RgbaStringColorPicker } from "react-colorful";
import './PickerStyle.css'


const ColorPicker = ({
  color,
  colors,
  selectedColor,
  setColors,
  setSelectedColor}) => {

  return (
    <>
          <RgbaStringColorPicker
            onChange={(e) => {
                setSelectedColor({
                    ...selectedColor,
                    code: e,
                });
                
                setColors(colors.map((c) => 
                        c.id == selectedColor.id
                        ? {
                            code: e,
                            position:c.position,
                            id: c.id,
                        }
                        : c 
                    ))
            }}
          color={color} />
    </>
  )
};

export default ColorPicker;