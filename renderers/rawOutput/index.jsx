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

const RawOutput = ({ data, style, config }) => {
  if (!data || !data.html) return '';
  if (!style || typeof style !== 'object') style = {};

  console.log('HTMLLL:::',data.html);

  const rawStyle = config.disableDefaultStyle ? style : rawOutputStyle.style;

  return (
    <div style={ rawStyle }>
      { ReactHtmlParser(data.html)}
    </div>
  );
};

export default RawOutput;
