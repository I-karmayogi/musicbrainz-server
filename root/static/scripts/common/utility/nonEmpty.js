/*
 * @flow strict
 * Copyright (C) 2015 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If you modify these, please do the same in root/vars.js
export function empty<T>(value: ?T | ''): value is ?'' {
  return value === null || value === undefined || value === '';
}

export default function nonEmpty<T>(value: ?T | ''): implies value is T {
  return value !== null && value !== undefined && value !== '';
}
