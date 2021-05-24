/** RawOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  *
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import rawOutputStyle from './rawOutputStyle';
//#endregion

const supportedStyles = ['video', 'figure', 'figcaption'];

const RawOutput = ({ data, style, config }) => {
  if (!data || !data.embed) return '';
  if (!style || typeof style !== 'object') style = {};

  supportedStyles.forEach(customStyle => {
    if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
  });

  const figureStyle = config.disableDefaultStyle ? style.figure : { ...rawOutputStyle.figureStyle, ...style.figure };

  return (
    <figure style={ figureStyle }>
      { ReactHtmlParser(data.) } //AQUI VAI O HTML PAULOTARSO
    </figure>
  );
};

export default RawOutput;
