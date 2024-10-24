import React, { useState } from 'react';
import { Offcanvas, Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface CSSRuleObject {
    [selector: string]: {
        [property: string]: string;
    };
}

interface ColorExtractorState {
    cssLink: string;
    errorMessage: string;
    cssJson: CSSRuleObject;
}

interface ToolbarProps {
    cssStylesheet: string; // CSS passed from the parent component
    updateCss: (newCss: string) => void; // Function passed from the parent to update CSS
}

const CollapsibleToolbar: React.FC<ToolbarProps> = ({ cssStylesheet, updateCss }) => {
    const [show, setShow] = useState<boolean>(false);
    const [modalShow, setModalShow] = useState<boolean>(false); // Modal state
    const [state, setState] = useState<ColorExtractorState>({
        cssLink: '',
        errorMessage: '',
        cssJson: {},
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleModalClose = () => setModalShow(false); // Close modal
    const handleModalShow = () => setModalShow(true); // Show modal

    // Handle input change for the CSS link
    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState({ ...state, cssLink: e.target.value });
    };

    // Function to load and parse the CSS without adding it to the page
    const loadAndParseCSS = async (): Promise<void> => {
        const { cssLink } = state;

        // Reset the state
        setState({ ...state, errorMessage: '', cssJson: {} });

        try {
            const response = await fetch(cssLink);
            if (!response.ok) {
                throw new Error('Failed to load the stylesheet.');
            }

            const cssText = await response.text();
            const cssJson = convertCSSToJSON(cssText);

            if (Object.keys(cssJson).length > 0) {

                setState({ ...state, errorMessage: '', cssJson });
                updateCss(convertJSONToCSS(cssJson));
            } else {
                setState({ ...state, errorMessage: 'No valid CSS rules found in the CSS file.', cssJson: {} });
            }
        } catch (error) {
            setState({ ...state, errorMessage: 'Invalid stylesheet URL or failed to load [' + error + ']', cssJson: {} });
        }
    };
    // Function to check if a value is a valid color (hex, rgb, rgba, or named color)
    const isColorValue = (value: string): boolean => {
        const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
        const rgbColorRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
        const rgbaColorRegex = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d(\.\d+)?)\)$/;
        const namedColorRegex = /^(red|blue|green|yellow|purple|orange|black|white|gray|pink)$/i;

        return hexColorRegex.test(value) || rgbColorRegex.test(value) || rgbaColorRegex.test(value) || namedColorRegex.test(value);
    };

    // Function to convert CSS to a JSON object
    const convertCSSToJSON = (cssText: string): CSSRuleObject => {
        const cssJson: CSSRuleObject = {};
        const cssRuleRegex = /([^{]+)\{([^}]+)\}/g;
        let match: RegExpExecArray | null;

        while ((match = cssRuleRegex.exec(cssText)) !== null) {
            const selector = match[1].trim();
            const properties = match[2].trim();

            if (!cssJson[selector]) {
                cssJson[selector] = {};
            }

            const propertyRegex = /([^:]+):\s*([^;]+);?/g;
            let propertyMatch: RegExpExecArray | null;
            while ((propertyMatch = propertyRegex.exec(properties)) !== null) {
                const property = propertyMatch[1].trim();
                const value = propertyMatch[2].trim();
                cssJson[selector][property] = value;

            }
        }
        console.log(cssJson);
        return cssJson;
    };

    // Convert JSON object back to CSS string for visualization
    const convertJSONToCSS = (cssJson: CSSRuleObject): string => {
        let cssString = '';

        for (const selector in cssJson) {
            cssString += `${selector} {\n`;
            for (const property in cssJson[selector]) {
                cssString += `  ${property}: ${cssJson[selector][property]};\n`;
            }
            cssString += '}\n';
        }

        return cssString;
    };

    // Function to handle color change
    const handleColorChange = (selector: string, property: string, newColor: string) => {
        const updatedCSSJson = { ...state.cssJson };
        updatedCSSJson[selector][property] = newColor;
        setState({ ...state, cssJson: updatedCSSJson });
        updateCss(convertJSONToCSS(updatedCSSJson));
    };

    // Function to copy the CSS to clipboard
    const copyCSSToClipboard = () => {
        const cssString = convertJSONToCSS(state.cssJson);
        navigator.clipboard.writeText(cssString);
        alert('CSS copied to clipboard!');
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                zIndex: 1000,
            }}
        >
            {/* Button to toggle the sidebar */}
            <Button onClick={handleShow}>Open Toolbar</Button>

            {/* Collapsible Sidebar */}
            <Offcanvas show={show} onHide={handleClose} placement="end" backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>CSS to JSON Converter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Text Input Field */}
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Enter CSS Stylesheet Link:</Form.Label>
                        <Form.Control type="text" placeholder="Enter CSS URL" value={state.cssLink} onChange={handleLinkChange} />
                    </Form.Group>

                    {/* Button to load and parse CSS */}
                    <Button variant="primary" onClick={loadAndParseCSS}>
                        Load and Parse
                    </Button>

                    {/* Error message display */}
                    {state.errorMessage && <p style={{ color: 'red' }}>{state.errorMessage}</p>}

                    {/* Display and edit CSS colors */}
                    {Object.keys(state.cssJson).length > 0 && (
                        <div>
                            <h3>Edit Colors:</h3>
                            <Form>
                                {Object.keys(state.cssJson).map((selector, selectorIndex) => {
                                    // Filter out properties that don't have valid color values
                                    const colorProperties = Object.keys(state.cssJson[selector]).filter(
                                        (property) => isColorValue(state.cssJson[selector][property])
                                    );

                                    // Only render the selector if it has color properties
                                    if (colorProperties.length > 0) {
                                        return (
                                            <div key={selectorIndex}>
                                                {/* Render the selector title only once */}
                                                <h5>{selector}</h5>
                                                {colorProperties.map((property, propertyIndex) => (
                                                    <Form.Group key={propertyIndex} className="mb-3">
                                                        <Form.Label>{property}</Form.Label>
                                                        <Form.Control
                                                            type="color"
                                                            value={state.cssJson[selector][property]}
                                                            onChange={(e) =>
                                                                handleColorChange(selector, property, e.target.value)
                                                            }
                                                        />
                                                    </Form.Group>
                                                ))}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </Form>
                            <Button variant="secondary" onClick={handleModalShow}>
                                Show CSS
                            </Button>
                        </div>
                    )}

                    {/* Modal to show CSS with syntax highlighting */}
                    <Modal show={modalShow} onHide={handleModalClose} size="lg" style={{ maxHeight: '80vh' }}>
                        <Modal.Header closeButton>
                            <Modal.Title>Converted CSS</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                            <SyntaxHighlighter language="css" style={tomorrow}>
                                {convertJSONToCSS(state.cssJson)}
                            </SyntaxHighlighter>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={copyCSSToClipboard}>
                                Copy CSS
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CollapsibleToolbar;
