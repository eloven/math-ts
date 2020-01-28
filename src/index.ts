import {
  all,
  allEqual,
  any,
  arrayDifference,
  arrayToCSV,
  chunk,
  compact,
  countBy,
  countOccurrences,
  deepFlatten,
  difference,
  differenceWith,
  dropElement,
  everyNth,
  filterNoUnique,
  flatten,
  forEachRight,
  groupBy,
  init2DArray,
  intersect,
  intersection,
  intToBytes2,
  isSorted,
  join,
  longsItem,
  mapObject,
  maxProfit,
  occurrence,
  pick,
  pull,
  pullAtIndex,
  pullAtValue,
  reducedFilter,
  rotate,
  rotateMatrix,
  sample,
  sampleSize,
  setArray,
  shuffle,
  similar,
  singleNumber,
  stringToUint8Array,
  uint8ArrayToString,
  union
} from './array';
import { truthCheckCollection } from './collection';
import { dateFormat, getDaysDiffBetweenDates, getNext, getPrev } from './date';
import { chainAsync, compose, curry, delay, sleep } from './function';
import {
  average,
  averageBy,
  digitize,
  factorial,
  pascal,
  size,
  standardDeviation,
  sum,
  sumPower,
  takeTime,
  toDecimal,
  toSafeInteger
} from './math';
import {
  deleteKey,
  getType,
  invertKeyValues,
  isArrayLike,
  lowercaseKeys,
  mapKeys,
  mapValues,
  merge
} from './object';
import {
  buildUrlParams,
  capitalize,
  capitalizeEveryWord,
  csvDownload,
  escapeHTML,
  escapeRegExp,
  firstUniqChar,
  fromCamelCase,
  getURLParams,
  htmlToExcel,
  isAbsoluteURL,
  mask,
  randomHexColorCode,
  reverseString,
  serializeCookie,
  sortCharactersInString,
  splitLines,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  unescapeHTML,
  words
} from './string';
import { browserWidth, isWebUrl, parseCookie, whichBrowser } from './web';

module.exports = exports = {
  browserWidth,
  buildUrlParams,
  isWebUrl,
  parseCookie,
  whichBrowser,
  capitalize,
  capitalizeEveryWord,
  csvDownload,
  escapeHTML,
  escapeRegExp,
  firstUniqChar,
  fromCamelCase,
  getURLParams,
  htmlToExcel,
  isAbsoluteURL,
  mask,
  randomHexColorCode,
  reverseString,
  serializeCookie,
  sortCharactersInString,
  splitLines,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  unescapeHTML,
  words,
  deleteKey,
  getType,
  invertKeyValues,
  isArrayLike,
  lowercaseKeys,
  mapKeys,
  mapValues,
  merge,
  average,
  averageBy,
  digitize,
  factorial,
  pascal,
  size,
  standardDeviation,
  sum,
  sumPower,
  takeTime,
  toDecimal,
  toSafeInteger,
  chainAsync,
  compose,
  curry,
  delay,
  sleep,
  dateFormat,
  getDaysDiffBetweenDates,
  getNext,
  getPrev,
  truthCheckCollection,
  all,
  allEqual,
  any,
  arrayDifference,
  arrayToCSV,
  chunk,
  compact,
  countBy,
  countOccurrences,
  deepFlatten,
  difference,
  differenceWith,
  dropElement,
  everyNth,
  filterNoUnique,
  flatten,
  forEachRight,
  groupBy,
  init2DArray,
  intToBytes2,
  intersect,
  intersection,
  isSorted,
  join,
  longsItem,
  mapObject,
  maxProfit,
  occurrence,
  pick,
  pull,
  pullAtIndex,
  pullAtValue,
  reducedFilter,
  rotate,
  rotateMatrix,
  sample,
  sampleSize,
  setArray,
  shuffle,
  similar,
  singleNumber,
  stringToUint8Array,
  uint8ArrayToString,
  union
};
