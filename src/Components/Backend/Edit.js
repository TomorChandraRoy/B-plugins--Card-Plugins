import Settings from "./Settings/Settings";
import { useBlockProps } from "@wordpress/block-editor";
import {
  Button,
  Flex,
  FlexItem,
  ResponsiveWrapper,
} from "@wordpress/components";
import { RichText } from "@wordpress/block-editor";
import Style from "../Common/Style";



const Edit = (props) => {
  const { attributes, setAttributes,clientId } = props;
  const { cardimg, heading, description, price, buttontext, catogray,headingColor,descriptionColor,catograyColor,buttontextBg,backgroundClor } = attributes;
  console.log(cardimg);
  



  return (
    <>

      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
      <Style attributes={attributes} id={`block-${clientId}`} />

      <div className="bg-border" style={{backgroundColor:backgroundClor}}>
        <div>
          <ResponsiveWrapper naturalWidth={2000} naturalHeight={1500}>
            <img className="card-img" src={cardimg} />
          </ResponsiveWrapper>

          <RichText
            className="heading"
            tagName="h2"
            value={heading}
            style={{color:headingColor}}
            onChange={(newContent) => setAttributes({ heading: newContent })}
          />


          <RichText
            tagName="p"
            value={description}
            style={{color:descriptionColor}}
            onChange={dec => setAttributes({ description: dec })}
          />
          <div className="catory">

            {catogray.map((category, index) => (
                <div key={index} >
                  <button className="button1" style={{backgroundColor:catograyColor}}>
                    {category}
                  </button>
                </div>
            ))}

          </div>

          <Flex>
            <FlexItem>
              <RichText className="price"
                value={`$ ${price}`}
                onChange={(pricee) => {
                  const numValue = pricee.replace(/\$/g, "");
                  setAttributes({ price: numValue })}}

              />
            </FlexItem>

            <FlexItem>
  
              <Button className="button" style={{backgroundColor:buttontextBg}} >
                {buttontext}
              </Button>
            </FlexItem>
          </Flex>
        </div>
      </div>
      </div>

    </>
  );
};
export default Edit;
