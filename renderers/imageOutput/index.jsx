/** ImageOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component - Adombang Munang Mbomndih
  * @version 1.0.2 - 2020.05.21 - Codex width overrides user defined width - Adombang Munang Mbomndih
  * @version 1.0.3 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import imageOutputStyle from './imageOutputStyle';
//#endregion

const supportedStyles = ['img', 'figure', 'figcaption'];

const ImageOutput = ({ data, style, config }) => {
  if (!data || !data.file || !data.file.url) return '';
  if (!style || typeof style !== 'object') style = {};

  supportedStyles.forEach(customStyle => {
    if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
  });

  const imageStyle = config.disableDefaultStyle ? style.img : { ...imageOutputStyle.imageStyle, ...style.img };
  imageStyle.width = data.stretched ? '100%' : '';

  const figureStyle = config.disableDefaultStyle ? style.figure : { ...imageOutputStyle.figureStyle, ...style.figure };

  if (!data.withBorder) figureStyle.border = 'none';
  if (!data.withBackground) figureStyle.backgroundColor = 'none';

  const figcaptionStyle = config.disableDefaultStyle ? style.figcaption : { ...imageOutputStyle.figcaptionStyle, ...style.figcaption };

  return (
    <figure style={ figureStyle }>
      <img src={ data.file.url } alt={ data.alt ?? data.caption ?? '' } style={ imageStyle } />
      { data.caption && <figcaption style={ figcaptionStyle }>{ ReactHtmlParser(data.caption) }</figcaption> }
    </figure>
  );
};

export default ImageOutput;
