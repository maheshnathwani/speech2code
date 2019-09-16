// Comments
require('codemirror/addon/comment/comment');
require('codemirror/addon/comment/continuecomment');
// Brackets and tag pairing
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/edit/closetag');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/edit/matchtags');
// Layout
require('codemirror/addon/edit/trailingspace');
require('codemirror/addon/fold/brace-fold');
require('codemirror/addon/fold/comment-fold');
require('codemirror/addon/fold/foldcode');
require('codemirror/addon/fold/foldgutter');
require('codemirror/addon/fold/indent-fold');
require('codemirror/addon/fold/xml-fold');
require('codemirror/addon/selection/active-line');
require('codemirror/addon/scroll/annotatescrollbar');

// Dialog
require('codemirror/addon/dialog/dialog');
// Hints
require('codemirror/addon/hint/show-hint');
require('codemirror/addon/hint/javascript-hint');
require('codemirror/addon/hint/css-hint');
require('codemirror/addon/hint/html-hint');
require('codemirror/addon/hint/anyword-hint');
// Lint
require('csslint/dist/csslint');
require('jshint/dist/jshint');
(window as any).CSSLint = require('csslint/dist/csslint');
require('codemirror/addon/lint/lint');
require('codemirror/addon/lint/html-lint');
require('codemirror/addon/lint/css-lint');
require('codemirror/addon/lint/javascript-lint');
require('codemirror/addon/lint/json-lint');
(window as any).JSHINT = require('jshint/dist/jshint').JSHINT;

// Search
require('codemirror/addon/search/search');
require('codemirror/addon/search/searchcursor');
require('codemirror/addon/search/matchesonscrollbar');
require('codemirror/addon/search/jump-to-line');
