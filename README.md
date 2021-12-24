# React boilerplate with prestyled components

Hi bytabo react developers,

this is our bytabo react boilerplate. You can easily use it. If there are change requestes or bugs be free to report
them :-)

## Setup boilerplate for new project

1. Clone repo and remove .git folder
2. Add new repo by `git remote add...`
3. Run `npm install`
3. Run `npm start`
4. Generate favicon at https://realfavicongenerator.net/ and put downloaded files into src/assets/img/touch-icons

## i18n

The npm package react-intl is used for translating content. Use the FormattedMessage property to translate strings. If
you want to switch language you can use the hook "setLanguage" in src/containers/LanguageProvider/hooks.js. Just define
fallback string in the messages.js object. When the projekt is almost finished you can extract all used messages into a
generated json to translate all strings at one time. Run `npm run extract-translations` for doing this. In the
src/translations folder a new folder "generated" will be created, which file you can rename, edit and replace. Also
comment in the codeline with console.error in src/containers/LanguageProvider/index.js to log missing translations.

## Open issues

The red marked issues are fixed soon by JH

### Currently open issues:
* update webpack to the newest version
* implement tests (Lorenzo)
* use styled components spacing (currently not running with current styled-components version)
* component generation (take from Max' react-boilerplate)
* <span style="color:red">add pre-commit package (look at Max)</span>
* update readme with things to know / do at setup
* have a look at src/utils -> are these all really relevant?
* use connected-router? if yes write in state (look at Max)
* <span style="color:red">update eslint rules:</span>
  * switch case indent
* <span style="color:red">FIX: pass dropdown width</span>
* <span style="color:red">Order dependencies</span>
* use loadables from Max?
* look for a better usage for redux/saga (Alex)
* reset state on page leave
* todos current saga logic
  * edit utils used by saga
  * remove package invariant?
  * remove package @babel/polyfill?
  * show toast if saga fails
* <span style="color:red">add more basic components:</span>
  * Modal with blurred background
  * inputs
