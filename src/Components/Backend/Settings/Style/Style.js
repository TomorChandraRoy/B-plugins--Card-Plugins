import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,  ColorPalette 
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {

  const { heading,colors,descriptionColor,catograyColor,buttontextBg,backgroundClor } = attributes;


  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });



  const textColor = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#00f' },
];


  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Purpose styles title", "b-blocks")}
        initialOpen={false}
      >
        <ColorsControl
          value={colors}
          onChange={(val) => setAttributes({ colors: val })}
          defaults={{ color: "black", bg: "#B1C5A4" }}
        />
        <BoxControl values={values} onChange={setValues} />
      </PanelBody>

      <PanelBody
      
        className="bPlPanelBody"
        title={__("Header Color And Description Color Change", "b-blocks")}
        initialOpen={false}
      >
        <ColorPalette
            colors={ textColor }
            value={heading}
            onChange={ ( color ) => setAttributes({headingColor:color}) }
        />
        <ColorPalette
            colors={ textColor }
            value={descriptionColor}
            onChange={ ( color ) => setAttributes({descriptionColor:color}) }
        />

      </PanelBody>

      <PanelBody
      
        className="bPlPanelBody"
        title={__("Your Tag BG Color && Button Bg Color ", "b-blocks")}
        initialOpen={false}
      >
        <ColorPalette
            colors={ textColor }
            value={catograyColor}
            onChange={ ( color ) => setAttributes({catograyColor:color}) }
        />
        
        <ColorPalette
            colors={ textColor }
            value={buttontextBg}
            onChange={ ( color ) => setAttributes({buttontextBg:color}) }
        />
        
      </PanelBody>
      <PanelBody
      
        className="bPlPanelBody"
        title={__(" Your Main Bg Color Change ", "b-blocks")}
        initialOpen={false}
      >
        <ColorPalette
            colors={ textColor }
            value={backgroundClor}
            onChange={ ( color ) => setAttributes({backgroundClor:color}) }
        />
      </PanelBody>
    </>
  );
};

export default Style;
