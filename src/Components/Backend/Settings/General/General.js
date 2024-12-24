import { __ } from '@wordpress/i18n';
import { FormTokenField, PanelBody, TextareaControl, TextControl, __experimentalNumberControl as NumberControl,  IconButton } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';



const General = ({ attributes, setAttributes }) => {

  const { heading, description, catogray, price,buttontext,cardimg } = attributes;


  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Headeing and decription', 'b-blocks')} initialOpen={false}>
        <TextControl
          label={__('Heading Text', 'b-blocks')} //'your-text-domain'
          value={heading}
          onChange={(newContent) => setAttributes({ heading: newContent })}
          placeholder={__('Your Title Add...', 'b-blocks')}
        />

        <TextareaControl
          label="Description"
          value={description}
          onChange={dec => setAttributes({ description: dec })}
          placeholder={__('Your description Add...', 'b-blocks')}
        />

      </PanelBody>


      <PanelBody className='bPlPanelBody' title={__('Your Tag ', 'b-blocks')} initialOpen={false}>
        <FormTokenField
          value={catogray}
          onChange={(tokens) => setAttributes({ catogray: tokens })}
          placeholder={__('Your catogray Add...', 'b-blocks')}
        />

      </PanelBody>


      <PanelBody className='bPlPanelBody' title={__('Your Price & Button Name', 'b-blocks')} initialOpen={false}>

        <NumberControl
        label={__('Price', 'b-blocks')}
          onChange={(pricee) => setAttributes({ price: pricee })}
          placeholder={__('Your Price Add...', 'b-blocks')}
          value={price}
        />

        <TextControl
          label={__('Button Name', 'b-blocks')} //'your-text-domain'
          value={buttontext}
          onChange={(name) => setAttributes({ buttontext: name })}
          placeholder={__('Enter buttontext Add...', 'b-blocks')}
        />
      </PanelBody>


      <PanelBody className='bPlPanelBody' title={__('Upload Image', 'b-blocks')} initialOpen={false}>
        <MediaUpload
         type="image"
				onSelect={ ( media ) =>setAttributes({cardimg: media.url })
				}
				value={ cardimg }
	
        render={({ open }) => (
          <IconButton
              onClick={open}
              icon="upload"
              placeholder={__('Enter Image Add...', 'b-blocks')}
              className="editor-media-placeholder_button is-button is-default is-large"
          >
              Upload a Photo
          </IconButton>
)}

        />
    </PanelBody>

    </>

  )
}

export default General