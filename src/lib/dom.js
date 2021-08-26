/**
 * safeguarded generator
 * @param       {string} methodName
 * @param       {any} defaultValue
 * @return      {function} (...args) => any
 */
export function _ (methodName, defaultValue) {
  return function (...args) {
    if (!hasDOM()) return defaultValue;

    return document[methodName](...args);
  };
}

export const addEventListener = _('addEventListener');
export const body = hasDOM() && document.body || {};
export const querySelector = _('querySelector', null);
export const removeEventListener = _('removeEventListener');

function hasDOM () {
  return typeof window === 'object' && typeof window.document === 'object';
}
