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
  console.log(data);
  if (!data || !data.embed) return '';
  if (!style || typeof style !== 'object') style = {};

  

  const rawStyle = config.disableDefaultStyle ? style : rawOutputStyle.style;

  return (
    <div style={ rawStyle }>
      { ReactHtmlParser(data)}
    </div>
  );
};

export default RawOutput;
