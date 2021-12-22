# React boilerplate with prestyled components

Hi bytabo react developers,

this is our bytabo react boilerplate. You can easily use it. If there are change requestes or bugs be free to report them :-)

##Setup boilerplate for new project
1. Clone repo and remove .git folder
2. Add new repo by `git remote add...`
3. Run `npm install`
3. Run `npm start`
4. Generate favicon at https://realfavicongenerator.net/ and put downloaded files into src/assets/img/touch-icons

The red marked issues are fixed soon by JH


### Currently open issues:
* update webpack to the newest version
* implement tests (Lorenzo)
* use styled components spacing (currently not running with current styled-components version)
* <span style="color:red">i18n</span>
* component generation (take from Max' react-boilerplate)
* <span style="color:red">add pre-commit package (look at Max)</span>
* update readme with things to know / do at setup
* have a look at src/utils -> are these all really relevant?
* use connected-router? if yes write in state (look at Max)
* <span style="color:red">update eslint rules:</span>
  * empty body
  * arrow-parens
  * radix param in parseInt
  * remove keydown require at div click
* <span style="color:red">FIX: pass dropdown width</span>
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
