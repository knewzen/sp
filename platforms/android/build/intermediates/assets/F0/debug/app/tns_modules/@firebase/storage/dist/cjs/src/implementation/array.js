"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns true if the object is contained in the array (compared with ===).
 * @template T
 */
function contains(array, elem) {
    return array.indexOf(elem) !== -1;
}
exports.contains = contains;
/**
 * Returns a shallow copy of the array or array-like object (e.g. arguments).
 * @template T
 */
function clone(arraylike) {
    return Array.prototype.slice.call(arraylike);
}
exports.clone = clone;
/**
 * Removes the given element from the given array, if it is contained.
 * Directly modifies the passed-in array.
 * @template T
 */
function remove(array, elem) {
    var i = array.indexOf(elem);
    if (i !== -1) {
        array.splice(i, 1);
    }
}
exports.remove = remove;

//# sourceMappingURL=array.js.map
