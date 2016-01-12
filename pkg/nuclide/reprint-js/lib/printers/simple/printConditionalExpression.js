

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var markers = require('../../constants/markers');
var wrapExpression = require('../../wrappers/simple/wrapExpression');

function printConditionalExpression(print, node) {
  var wrap = function wrap(x) {
    return wrapExpression(print, node, x);
  };
  return wrap([markers.openScope, markers.scopeIndent, print(node.test), markers.scopeSpaceBreak, '?', markers.noBreak, markers.space, print(node.consequent), markers.scopeSpaceBreak, ':', markers.noBreak, markers.space, print(node.alternate), markers.scopeDedent, markers.closeScope]);
}

module.exports = printConditionalExpression;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50Q29uZGl0aW9uYWxFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFjQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUNuRCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7QUFFdkUsU0FBUywwQkFBMEIsQ0FDakMsS0FBWSxFQUNaLElBQTJCLEVBQ3BCO0FBQ1AsTUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLENBQUcsQ0FBQztXQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztHQUFBLENBQUM7QUFDakQsU0FBTyxJQUFJLENBQUMsQ0FDVixPQUFPLENBQUMsU0FBUyxFQUNqQixPQUFPLENBQUMsV0FBVyxFQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNoQixPQUFPLENBQUMsZUFBZSxFQUN2QixHQUFHLEVBQ0gsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3RCLE9BQU8sQ0FBQyxlQUFlLEVBQ3ZCLEdBQUcsRUFDSCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDckIsT0FBTyxDQUFDLFdBQVcsRUFDbkIsT0FBTyxDQUFDLFVBQVUsQ0FDbkIsQ0FBQyxDQUFDO0NBQ0o7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyIsImZpbGUiOiJwcmludENvbmRpdGlvbmFsRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuLyogQGZsb3cgKi9cblxuLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB0eXBlIHtDb25kaXRpb25hbEV4cHJlc3Npb259IGZyb20gJ2FzdC10eXBlcy1mbG93JztcbmltcG9ydCB0eXBlIHtMaW5lcywgUHJpbnR9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1vbic7XG5cbmNvbnN0IG1hcmtlcnMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMvbWFya2VycycpO1xuY29uc3Qgd3JhcEV4cHJlc3Npb24gPSByZXF1aXJlKCcuLi8uLi93cmFwcGVycy9zaW1wbGUvd3JhcEV4cHJlc3Npb24nKTtcblxuZnVuY3Rpb24gcHJpbnRDb25kaXRpb25hbEV4cHJlc3Npb24oXG4gIHByaW50OiBQcmludCxcbiAgbm9kZTogQ29uZGl0aW9uYWxFeHByZXNzaW9uLFxuKTogTGluZXMge1xuICBjb25zdCB3cmFwID0geCA9PiB3cmFwRXhwcmVzc2lvbihwcmludCwgbm9kZSwgeCk7XG4gIHJldHVybiB3cmFwKFtcbiAgICBtYXJrZXJzLm9wZW5TY29wZSxcbiAgICBtYXJrZXJzLnNjb3BlSW5kZW50LFxuICAgIHByaW50KG5vZGUudGVzdCksXG4gICAgbWFya2Vycy5zY29wZVNwYWNlQnJlYWssXG4gICAgJz8nLFxuICAgIG1hcmtlcnMubm9CcmVhayxcbiAgICBtYXJrZXJzLnNwYWNlLFxuICAgIHByaW50KG5vZGUuY29uc2VxdWVudCksXG4gICAgbWFya2Vycy5zY29wZVNwYWNlQnJlYWssXG4gICAgJzonLFxuICAgIG1hcmtlcnMubm9CcmVhayxcbiAgICBtYXJrZXJzLnNwYWNlLFxuICAgIHByaW50KG5vZGUuYWx0ZXJuYXRlKSxcbiAgICBtYXJrZXJzLnNjb3BlRGVkZW50LFxuICAgIG1hcmtlcnMuY2xvc2VTY29wZSxcbiAgXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJpbnRDb25kaXRpb25hbEV4cHJlc3Npb247XG4iXX0=