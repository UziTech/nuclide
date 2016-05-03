'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import path from 'path';
import ini from 'ini';
import {fsPromise} from '../../nuclide-commons';

import type {HgRepositoryDescription} from '..';

/**
 * This function returns HgRepositoryDescription filled with a repoPath and
 * originURL iff it finds that the given directory is within an Hg repository.
 */
function findHgRepository(directoryPath: string): ?HgRepositoryDescription {
  const fs = require('fs-plus');
  let workingDirectoryPath = directoryPath;
  let repoPath = path.join(workingDirectoryPath, '.hg');
  let originURL = null;
  for (;;) {
    const dirToTest = path.join(workingDirectoryPath, '.hg');
    if (fs.isDirectorySync(dirToTest)) {
      repoPath = dirToTest;
      if (fs.isFileSync(path.join(dirToTest, 'hgrc'))) {
        const config = ini.parse(fs.readFileSync(path.join(dirToTest, 'hgrc'), 'utf8'));
        if (typeof config.paths === 'object' && typeof config.paths.default === 'string') {
          originURL = config.paths.default;
        }
      }
      break;
    }
    if (isRootDir(workingDirectoryPath)) {
      return null;
    } else {
      workingDirectoryPath = getParentDir(workingDirectoryPath);
    }
  }
  return {repoPath, originURL, workingDirectoryPath};
}

function isRootDir(directoryPath: string): boolean {
  return fsPromise.isRoot(directoryPath);
}

function getParentDir(directoryPath: string): string {
  return path.resolve(directoryPath, '..');
}

module.exports = findHgRepository;
