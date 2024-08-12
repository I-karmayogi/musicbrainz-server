/*
 * @flow strict
 * Copyright (C) 2019 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

component FullChangeDiff(
  label: React.Node,
  newContent: React.Node,
  oldContent: React.Node,
) {
  return (
    oldContent === newContent ? null : (
      <tr>
        <th>{label}</th>
        <td className="old">{oldContent}</td>
        <td className="new">{newContent}</td>
      </tr>
    )
  );
}

export default FullChangeDiff;
