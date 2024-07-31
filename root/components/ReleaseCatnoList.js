/*
 * @flow strict
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import commaOnlyList from '../static/scripts/common/i18n/commaOnlyList.js';

const displayCatno = (catno: string): React.Element<'span'> => (
  <span className="catalog-number" key={catno}>
    {catno}
  </span>
);

component ReleaseCatnoList(
  labels as releaseLabels: ?$ReadOnlyArray<ReleaseLabelT>,
) {
  if (!releaseLabels || !releaseLabels.length) {
    return null;
  }
  const catnos = new Set<string>();
  for (const releaseLabel of releaseLabels) {
    const catno = releaseLabel.catalogNumber;
    if (nonEmpty(catno)) {
      catnos.add(catno);
    }
  }
  return commaOnlyList(Array.from(catnos.values()).map(displayCatno));
}

export default ReleaseCatnoList;
