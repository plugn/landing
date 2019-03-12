import tFrom from './tFrom';

/**
 * @typedef { en | ru | ch } langCode
 */

/**
 *
 * @param {(Array<String>) => (Object<{ [langCode]: String, * }>)} props
 * @returns { Object{ [string]: any }) }
 */
const translateItem = props => item => tFrom(props, item);

/**
 *
 * @param {Array<String>} props
 * @param {Array<Object<{ [langCode]: String, * }>>} list
 * @returns { Array<Object{ [string]: any })> }
 */
const translateList = (props, list) => list.map(translateItem(props));

export default translateList;
