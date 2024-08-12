/*
 * @flow strict
 * Copyright (C) 2019 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import {DELETE, INSERT} from '../../utility/editDiff.js';

import DiffSide from './DiffSide.js';

component Diff(
  extraNew?: React.Node,
  extraOld?: React.Node,
  label: string,
  newText: string,
  oldText: string,
  split: string = '',
) {
  return (
    oldText === newText ? null : (
      <tr>
        <th>{label}</th>
        <td className="old">
          <DiffSide
            filter={DELETE}
            newText={newText}
            oldText={oldText}
            split={split}
          />
          {extraOld}
        </td>
        <td className="new">
          <DiffSide
            filter={INSERT}
            newText={newText}
            oldText={oldText}
            split={split}
          />
          {extraNew}
        </td>
      </tr>
    )
  );
}

export default Diff;
