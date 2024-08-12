/*
 * @flow strict
 * Copyright (C) 2015 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

export component UserTagLink(
  content?: string,
  showDownvoted: boolean = false,
  subPath?: string,
  tag: string,
  username: string,
) {
  const url = '/user/' + encodeURIComponent(username) +
              '/tag/' + encodeURIComponent(tag) +
              (subPath == null ? '' : '/' + subPath) +
              (showDownvoted ? '?show_downvoted=1' : '');
  return <a href={url}>{content == null ? tag : content}</a>;
}

component TagLink(
  content?: string,
  showIcon: boolean = false,
  subPath?: string,
  tag: string,
) {
  const parts: Array<Expand2ReactOutput> = [];

  if (showIcon) {
    parts.push(
      <span className="taglink" key="icon" />,
    );
  }

  const url = '/tag/' + encodeURIComponent(tag) +
              (subPath == null ? '' : '/' + subPath);
  parts.push(
    <a href={url} key={tag}>{content == null ? tag : content}</a>,
  );

  return parts;
}

export default TagLink;
