/** ChecklistOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import checklistOutputStyle from './checklistOutputStyle';
import checklistStyle from './style.css';
//#endregion

const supportedStyles = ['container', 'item', 'checkbox', 'label'];

const ChecklistOutput = ({ data, style, config }) => {
  if (!data || !data.items || !Array.isArray(data.items) || data.items.length < 1) return '';
  if (!style || typeof style !== 'object') style = {};

  supportedStyles.forEach(customStyle => {
    if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
  });

  const containerStyle = config && config.disableDefaultStyle ? style.container : { ...checklistOutputStyle.container, ...style.container };
  const itemStyle = config && config.disableDefaultStyle ? style.item : { ...checklistOutputStyle.item, ...style.item };
  const checkboxStyle = config && config.disableDefaultStyle ? style.checkbox : { ...checklistOutputStyle.checkbox, ...style.checkbox };
  const labelStyle = config && config.disableDefaultStyle ? style.label : { ...checklistOutputStyle.label, ...style.label };

  let content = [];

  if (typeof data === 'object') {
    if (data.items && Array.isArray(data.items)) content = data.items.map((item, index) =>
      <div key={ index } style={ itemStyle }>
        <input id={ index } style={ checkboxStyle } type='checkbox' checked={ item.checked } />
        <label for={ index } style={ labelStyle }>{ ReactHtmlParser(item.text) }</label>
      </div>
    );
  }

  if (content.length <= 0) return '';

  return <ul style={ containerStyle } className='checklistUL'>{ content }</ul>;
};

export default ChecklistOutput;
