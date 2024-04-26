/*
 * @flow strict
 * Copyright (C) 2022 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import StatusPage from '../components/StatusPage.js';

component DiscIdNotValid(discId: string) {
  return (
    <StatusPage title={l('Invalid disc ID')}>
      <p>
        {exp.l(
          'Sorry, <code>{discid}</code> is not a valid disc ID.',
          {discid: discId},
        )}
      </p>
    </StatusPage>
  );
}

export default DiscIdNotValid;
