/**
 * isEscapeKeyEvent
 * @param  {Event}  e
 * @return {Boolean}
 */
export default function isEscapeKeyEvent (e) {
  const key = e.key || e.keyCode;

  return [ 'Escape', 'Esc', 27 ].includes(key);
}
