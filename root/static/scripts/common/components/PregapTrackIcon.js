/*
 * @flow strict
 * Copyright (C) 2020 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

const PregapTrackIcon = (): React.Element<'div'> => (
  <div
    className="pregap-track icon img"
    title={l('This track is hidden in the pregap.')}
  />
);

export default PregapTrackIcon;