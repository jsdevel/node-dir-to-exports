'use strict';

// Attempt to load all base modules including this module.
//
// This module should not get loaded for obvious reasons.
//
// We should also ignore subdirectories and files that don't end in '.js'.
require('../../')('./**/*');
