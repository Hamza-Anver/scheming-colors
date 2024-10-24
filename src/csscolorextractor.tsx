import React, { useEffect, useState,  } from 'react';
var css = require('css');

// TypeScript type for the color object
interface Color {
  property: string;
  value: string;
}

// React component
const CssColorExtractor: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);

  // Function to fetch the CSS from a URL
  const fetchCSS = async (url: string): Promise<string | null> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch CSS: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // Function to extract color properties from the CSS text
  const extractColors = (cssText: string): Color[] => {
    const parsedCSS = css.parse(cssText);
    const colors: Color[] = [];

    // Iterate over the rules in the CSS
    parsedCSS.stylesheet.rules.forEach((rule: { declarations: { type: string; property: string; value: any; }[]; }) => {
      if ('declarations' in rule && rule.declarations) {
        rule.declarations.forEach((declaration: { type: string; property: string; value: any; }) => {
          if (declaration.type === 'declaration' && /color/.test(declaration.property)) {
            colors.push({
              property: declaration.property,
              value: declaration.value,
            });
          }
        });
      }
    });

    return colors;
  };

  useEffect(() => {
    // Replace with your CSS file URL
    const cssUrl = 'https://unpkg.com/simpledotcss/simple.min.css';

    // Fetch the CSS and extract colors
    const getColorsFromCSS = async () => {
      const cssText = await fetchCSS(cssUrl);
      if (cssText) {
        const extractedColors = extractColors(cssText);
        setColors(extractedColors);
      }
    };

    getColorsFromCSS();
  }, []);

  return (
    <div>
      <h1>Extracted Colors</h1>
      {colors.length > 0 ? (
        <ul>
          {colors.map((color, index) => (
            <li key={index}>
              {color.property}: {color.value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No colors found.</p>
      )}
    </div>
  );
};

export default CssColorExtractor;
