// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_keyby
export default (array, key) => (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {})
