/*
 * @flow strict
 * Copyright (C) 2019 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import {CatalystContext} from '../../context.mjs';
import useTable from '../../hooks/useTable.js';
import {
  defineCheckboxColumn,
  defineNameColumn,
  defineTypeColumn,
  instrumentDescriptionColumn,
  removeFromMergeColumn,
} from '../../utility/tableColumns.js';

component InstrumentList(
  checkboxes?: string,
  instruments: $ReadOnlyArray<InstrumentT>,
  mergeForm?: MergeFormT,
  order?: string,
  sortable?: boolean,
 ) {
  const $c = React.useContext(CatalystContext);

  const columns = React.useMemo(
    () => {
      const checkboxColumn = $c.user && (nonEmpty(checkboxes) || mergeForm)
        ? defineCheckboxColumn({mergeForm, name: checkboxes})
        : null;
      const nameColumn = defineNameColumn<InstrumentT>({
        order,
        sortable,
        title: l('Instrument'),
      });
      const typeColumn = defineTypeColumn({
        order,
        sortable,
        typeContext: 'instrument_type',
      });

      return [
        ...(checkboxColumn ? [checkboxColumn] : []),
        nameColumn,
        typeColumn,
        instrumentDescriptionColumn,
        ...(mergeForm && instruments.length > 2
          ? [removeFromMergeColumn]
          : []),
      ];
    },
    [$c.user, checkboxes, instruments, mergeForm, order, sortable],
  );

  return useTable<InstrumentT>({columns, data: instruments});
}

export default InstrumentList;
