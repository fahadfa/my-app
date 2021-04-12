git remote set-url origin https://<user>:<token>@github.com/<user>/<repo> .
Try npm run deploy again
"Cannot read property 'email' of null"

If, when deploying, you get Cannot read property 'email' of null, try the following:

git config --global user.name '<your_name>'
git config --global user.email '<your_email>'
Try npm run deploy again ting to prepare the repo for build
3:51:28 AM: No cached dependencies found. Cloning fresh repo
3:51:28 AM: git clone https://github.com/Sarfraz21/my-app
3:51:29 AM: Preparing Git Reference pull/2/head
3:51:30 AM: Different publish path detected, going to use the one specified in the Netlify configuration file: 'build' versus 'build/' in the Netlify UI
3:51:31 AM: Starting build script
3:51:31 AM: Installing dependencies
3:51:31 AM: Python version set to 2.7
3:51:32 AM: v12.18.0 is already installed.
3:51:32 AM: Now using node v12.18.0 (npm v6.14.4)
3:51:33 AM: Started restoring cached build plugins
3:51:33 AM: Finished restoring cached build plugins
3:51:33 AM: Attempting ruby version 2.7.1, read from environment
3:51:34 AM: Using ruby version 2.7.1
3:51:34 AM: Using PHP version 5.6
3:51:34 AM: Started restoring cached node modules
3:51:34 AM: Finished restoring cached node modules
3:51:35 AM: Installing NPM modules using NPM version 6.14.4
3:52:05 AM: > core-js@2.6.11 postinstall /opt/build/repo/node_modules/babel-runtime/node_modules/core-js
3:52:05 AM: > node -e "try{require('./postinstall')}catch(e){}"
3:52:05 AM: > core-js@3.6.5 postinstall /opt/build/repo/node_modules/core-js
3:52:05 AM: > node -e "try{require('./postinstall')}catch(e){}"
3:52:05 AM: > core-js-pure@3.6.5 postinstall //build/repo/node_modules/core-js-pure
3:52:05 AM: > node -e "try{require('./postinstall')}catch(e){}"
3:52:07 AM: npm WARN SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/webpack-dev-server/node_modules/fsevents):
3:52:07 AM: npm WARN notsup SKIPPING DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
3:52:07 AM: npm WARN optional SKIPPING DEPENDENCY: fsevents@1.2.13 (node_modules/watchpack-chokidar2/node_modules/fsevents):
3:52:07 AM: npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
3:52:07 AM: npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/jest-haste-map/node_modules/fsevents):
3:52:07 AM: npm WARN notsup SKIPPING DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
3:52:07 AM: npm WARN optional SKIPPING DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
3:52:07 AM: npm WARN notsup SKIPPING DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
3:52:08 AM: added 1643 packages from 792 contributors and audited 1647 packages in 32.285s
3:52:09 AM: 74 packages are looking for funding
3:52:09 AM:   run `npm fund` for details
3:52:09 AM: found 5 vulnerabilities (1 low, 2 moderate, 2 high)
3:52:09 AM:   run `npm audit fix` to fix them, or `npm audit` for details
3:52:09 AM: NPM modules installed
3:52:10 AM: Started restoring cached go cache
3:52:10 AM: Finished restoring cached go cache
3:52:10 AM: go version go1.14.4 linux/amd64
3:52:10 AM: go version go1.14.4 linux/amd64
3:52:10 AM: Installing missing commands
3:52:10 AM: Verify run directory
3:52:11 AM: ​
3:52:11 AM: ────────────────────────────────────────────────────────────────
3:52:11 AM:   Netlify Build                                                 
3:52:11 AM: ────────────────────────────────────────────────────────────────
3:52:11 AM: ​
3:52:11 AM:  Version
3:52:11 AM:   build 9.8.6
3:52:11 AM: ​
3:52:11 AM: Flags
3:52:11 AM:   deployId: 6048180efaf0a90007ee50e6
3:52:11 AM:   mode: buildbot
3:52:11 AM: ​
3:52:11 AM: ❯ Current directory
3:52:11 AM:   /opt/build/repo
3:52:11 AM: ​
3:52:11 AM: ❯ Config file
3:52:11 AM:   No config file was defined: using default values.
3:52:11 AM: ​
3:52:11 AM: ❯ Context
3:52:11 AM:   deploy-preview
3:52:11 AM: ​
3:52:11 AM: ────────────────────────────────────────────────────────────────
3:52:11 AM:   1. Build command from Netlify app                             
3:52:11 AM: ────────────────────────────────────────────────────────────────
3:52:11 AM: ​
3:52:11 AM: $ npm run build
3:52:12 AM: > my-app@0.1.0 build /opt/build/repo
3:52:12 AM: > react-scripts build
3:52:13 AM: Creating an optimized production build...
3:52:22 AM: 
3:52:22 AM: Treating warnings as errors because process.env.CI = true.
3:52:22 AM: Most CI servers set it automatically.
3:52:22 AM: 
3:52:22 AM: Failed to compile.
3:52:22 AM: 
3:52:22 AM: ./src/App.js
3:52:22 AM:   Line 1:17:  'useState' is defined but never used     no-unused-vars
3:52:22 AM:   Line 1:27:  'useEffect' is defined but never used    no-unused-vars
3:52:22 AM:   Line 4:10:  'UserContext' is defined but never used  no-unused-vars
3:52:22 AM: ./src/Product/Product.js
3:52:22 AM:   Line 25:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
3:52:22 AM: ./src/Paints/Paint.js
3:52:22 AM:   Line 2:8:    'data' is defined but never used                  no-unused-vars
3:52:22 AM:   Line 8:9:    'cartProduct' is assigned a value but never used  no-unused-vars
3:52:22 AM:   Line 13:11:  'paint' is assigned a value but never used        no-unused-vars
3:52:22 AM: ./src/components/Navbar.js
3:52:22 AM:   Line 34:57:  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener                                                                                                                                                                                                                                      react/jsx-no-target-blank
3:52:22 AM:   Line 58:15:  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener                                                                                                                                                                                                                                      react/jsx-no-target-blank
3:52:22 AM:   Line 66:42:  Anchors must have content and the content must be accessible by a screen reader                                                                                                                                                                                                                                                                                   jsx-a11y/anchor-has-content
3:52:22 AM:   Line 66:42:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
3:52:22 AM: npm ERR! code ELIFECYCLE
3:52:22 AM: npm ERR! errno 1
3:52:22 AM: npm ERR! my-app@0.1.0 build: `react-scripts build`
3:52:22 AM: npm ERR! Exit status 1
3:52:22 AM: npm ERR!
3:52:22 AM: npm ERR! Failed at the my-app@0.1.0 build script.
3:52:22 AM: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
3:52:22 AM: npm ERR! A complete log of this run can be found in:
3:52:22 AM: npm ERR!     /buildhome/.npm/_logs/2021-03-10T00_52_22_567Z-debug.log
3:52:22 AM: ​
3:52:22 AM: ────────────────────────────────────────────────────────────────
3:52:22 AM:   "build.command" failed                                        
3:52:22 AM: ────────────────────────────────────────────────────────────────
3:52:22 AM: ​
3:52:22 AM:   Error message
3:52:22 AM:   Command failed with exit code 1: npm run build
3:52:22 AM: ​
3:52:22 AM:   Error location
3:52:22 AM:   In Build command from Netlify app:
3:52:22 AM:   npm run build
3:52:22 AM: ​
3:52:22 AM:   Resolved config
3:52:22 AM:   build:
3:52:22 AM:     command: npm run build
3:52:22 AM:     commandOrigin: ui
3:52:22 AM:     environment:
3:52:22 AM:       - REVIEW_ID
3:52:22 AM:     publish: /opt/build/repo/build
3:52:22 AM: Caching artifacts
3:52:22 AM: Started saving node modules
3:52:22 AM: Finished saving node modules
3:52:22 AM: Started saving build plugins
3:52:22 AM: Finished saving build plugins
3:52:22 AM: Started saving pip cache
3:52:22 AM: Finished saving pip cache
3:52:22 AM: Started saving emacs cask dependencies
3:52:22 AM: Finished saving emacs cask dependencies
3:52:22 AM: Started saving maven dependencies
3:52:22 AM: Finished saving maven dependencies
3:52:22 AM: Started saving boot dependencies
3:52:22 AM: Finished saving boot dependencies
3:52:22 AM: Started saving rust rustup cache
3:52:22 AM: Finished saving rust rustup cache
3:52:22 AM: Started saving go dependencies
3:52:22 AM: Finished saving go dependencies
3:52:25 AM: Build failed due to a user error: Build script returned non-zero exit code: 2
3:52:25 AM: Failing build: Failed to build site
3:52:25 AM: Failed during stage 'building site': Build script returned non-zero exit code: 2
3:52:25 AM: Finished processing build request in 57.243655504s
