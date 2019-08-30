chrome.storage.sync.get('enabledOptions', ({ enabledOptions }) => {
  enabledOptions.map(option => {
    const fn = window[option];
    if (fn) fn();
  });
});

const observeEl = (el, cb, options = { childList: true, subtree: true }) => {
  const targetNode = document.querySelector(el);
  const observer = new MutationObserver(cb);
  observer.observe(targetNode, options);
};

const checkUrl = (...args) => {
  const array = args.filter(string => window.location.href.includes(string));
  return !!array.length;
};

const injectJs = (name) => {
    var styles = `var editors = document.querySelectorAll('#fwEditor');var aceCssEditor = ace.edit(editors[0]);var aceJsEditor = ace.edit(editors[1]);aceCssEditor.renderer.setShowGutter(true);aceJsEditor.renderer.setShowGutter(true);var x = document.getElementsByClassName("fw-code-editor");var y = document.getElementsByClassName("fw-material-card")[0];y.style.maxWidth = '80%';y.style.width = '100%';x[0].style.height = '800px';x[1].style.height = '800px';x[0].style.width = '100%';x[1].style.width = '100%';document.getElementsByClassName('col-md-10 col-sm-12 col-xs-12')[0].style.width = "100%";document.getElementsByClassName('col-md-10 col-sm-12 col-xs-12')[1].style.width = "100%";aceCssEditor.resize(true);aceJsEditor.resize(true);`;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerText = styles;
    document.head.appendChild(script);
}

const injectExp = (name) => {
    var stylesExp = `window.PERQHub.experience.launch(${name});`;
    const scriptExp = document.createElement('script');
    scriptExp.type = 'text/javascript';
    scriptExp.innerText = stylesExp;
    document.head.appendChild(scriptExp);
}

const injectCss = (name) => {
  const style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.href = chrome.extension.getURL(`css/${name}.css`);

  document.head.appendChild(style);
}

const injectHTML = (name) => {
    // Experience buttons
    const modalSection = document.createElement('div');
    modalSection.setAttribute('id', 'mydiv');
    modalSection.setAttribute('class', 'menu-button');
    modalSection.innerHTML = "<svg id='settingCog' style='vertical-align: sub;width: 25px;' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='cog' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-cog fa-w-16 fa-fw fa-lg'><path fill='currentColor' d='M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z'></path></svg><a id='exitIntent'><div class='EIPrompt'>Exit Intent</div><svg style='width: 48%;vertical-align: sub;' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='times-circle' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-times-circle fa-w-16 fa-fw fa-lg'><path fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z' class=''></path></svg></a><a id='expCalc'><div class='ECPrompt'>Expense Calculator</div><svg style='width: 40%;vertical-align: sub;' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='calculator' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' class='svg-inline--fa fa-calculator fa-w-14 fa-fw fa-lg'><path fill='currentColor' d='M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z' class=''></path></svg></a><a id='FPM'><div class='FPMPrompt'>Floor Plan Match</div><svg style='width: 55%;vertical-align: sub;' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='solar-panel' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' class='svg-inline--fa fa-solar-panel fa-w-20 fa-lg'><path fill='currentColor' d='M431.98 448.01l-47.97.05V416h-128v32.21l-47.98.05c-8.82.01-15.97 7.16-15.98 15.99l-.05 31.73c-.01 8.85 7.17 16.03 16.02 16.02l223.96-.26c8.82-.01 15.97-7.16 15.98-15.98l.04-31.73c.01-8.85-7.17-16.03-16.02-16.02zM585.2 26.74C582.58 11.31 568.99 0 553.06 0H86.93C71 0 57.41 11.31 54.79 26.74-3.32 369.16.04 348.08.03 352c-.03 17.32 14.29 32 32.6 32h574.74c18.23 0 32.51-14.56 32.59-31.79.02-4.08 3.35 16.95-54.76-325.47zM259.83 64h120.33l9.77 96H250.06l9.77-96zm-75.17 256H71.09L90.1 208h105.97l-11.41 112zm16.29-160H98.24l16.29-96h96.19l-9.77 96zm32.82 160l11.4-112h149.65l11.4 112H233.77zm195.5-256h96.19l16.29 96H439.04l-9.77-96zm26.06 256l-11.4-112H549.9l19.01 112H455.33z' class=''></path></svg></a><a id='NCW'><div class='NCWPrompt'>New Customer Welcome</div><svg style='width: 55%;vertical-align: sub;' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='door-open' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' class='svg-inline--fa fa-door-open fa-w-20 fa-fw fa-lg'><path fill='currentColor' d='M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z' class=''></path></svg></a><a id='specialOff'><div class='SOPrompt'>Special Offers</div><svg  style='width: 46%;vertical-align: sub;' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='tag' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-tag fa-w-16 fa-lg'><path fill='currentColor' d='M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z' class=''></path></svg></a><a id='clearC'><div class='RLSPrompt'>Reset Local Storage</div><svg style='width: 55%;vertical-align: sub;' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='broom' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' class='svg-inline--fa fa-broom fa-w-20 fa-fw fa-lg'><path fill='currentColor' d='M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z' class=''></path></svg></a><a id='selectorTool'><div class='CAPrompt'>Selector Tool</div><svg style='width: 55%;vertical-align: sub;' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='search-location' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-search-location fa-w-16 fa-lg'><path fill='currentColor' d='M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z' class=''></path></svg></a>";
    document.body.appendChild(modalSection);
}

var hubExp = () => {
    setTimeout(function(){
        var element = document.querySelector("script[src*='.fatwin.com/api/websiteplugins/config/hub']");
        if (element) {
            injectCss('hubExp1');
            injectHTML('hubExp');

            //Make the DIV element draggagle:
            dragElement(document.getElementById("mydiv"));

            function dragElement(elmnt) {
              var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
              if (document.getElementById(elmnt.id + "Cog")) {
                /* if present, the header is where you move the DIV from:*/
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
              } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
              }

              function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
              }

              function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
              }

              function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
              }
            }

            // When the user clicks the button, open the experience
            document.getElementById("exitIntent").addEventListener("click", function(){
                injectExp('36');
            });

            // When the user clicks the button, open the experience
            document.getElementById("expCalc").addEventListener("click", function(){
                var newStyles = `
                    var PageScraper = _FW.container.get('PageScraper');
                    PageScraper.prototype.handleNotFoundText = _FW.tryFn(function(selectors, attributeId) {
                        var sel = selectors.join();
                        if (sel.indexOf('name')>=0) {
                            return "Name not found";
                        } else if (sel.indexOf('price')>=0) {
                            return "Price not found";
                        } else if (sel.indexOf('price')>=0) {
                            return "Price not found";
                        } else if (sel.indexOf('image')>=0) {
                            return "Image not found";
                        } else if (sel.indexOf('bed')>=0) {
                            return "Bed not found";
                        } else if (sel.indexOf('square')>=0) {
                            return "Sqft not found";
                        }
                    });`;
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.innerText = newStyles;
                document.head.appendChild(script);
                injectExp('38');
            });

            // When the user clicks the button, open the experience
            document.getElementById("FPM").addEventListener("click", function(){
                injectExp('41');
            });

            // When the user clicks the button, open the experience
            document.getElementById("NCW").addEventListener("click", function(){
                injectExp('44');
            });

            // When the user clicks the button, open the experience
            document.getElementById("specialOff").addEventListener("click", function(){
                injectExp('42');
            });

            // When the user clicks the button, open the experience
            document.getElementById("clearC").addEventListener("click", function(){
                localStorage.clear();
                location.reload(true);
            });
            var selectorSwitch = 0;
            // When the user clicks the button, it will prompt them with some options
            document.getElementById("selectorTool").addEventListener("click", function(e){
                // Inject selector tool
                javascript:(function(){
                    var sGadget=document.createElement('script');
                    sGadget.setAttribute('type','text/javascript');
                    sGadget.setAttribute('src',chrome.extension.getURL(`selectorgadget.js`));
                    document.getElementById('mydiv').appendChild(sGadget);
                })();
                
                setTimeout(function(){
                    // When the user clicks the button, it will copy the selector text
                    document.getElementById("copyBTN").addEventListener("click", function(){
                    var copyText = document.getElementById("_sg_path_field");
                    copyText.select();
                    document.execCommand("copy");
                    });
                }, 500);
            });
        } else {
            // Do nothing
            console.warn("Hub doesn't exist - Please turn on Fatwin extension or try the testing tool on a live site");
        }
    }, 1000);
};

var highlightCSSDHairOnFire = () => {
  const isCSSDPage = checkUrl(
    'https://perqindianapolis.atlassian.net/projects/CSSD/queues'
  );

  if (isCSSDPage) {
    injectCss('highlightCSSDHairOnFire');

    const prioritize = () => {
      console.log('Checking priorities...');
      const list = document.querySelectorAll(
        '.queues-redesign-container .customfield_12300'
      );

      list.forEach(item => {
        const priority = item.textContent.trim();
        if (priority.toLowerCase() === 'hair on fire') {
          item
            .closest('div > div[style*="display: flex;"]')
            .classList.add('fw-hof');
        }
      });
    };

    prioritize();
    observeEl('#content', prioritize);
  }
};

var showCIJiraColors = () => {
  const isCIPage = checkUrl('https://perqindianapolis.atlassian.net/projects/CI/queues');

  if (isCIPage) {
    injectCss('showCIJiraColors');

    const issuesCommonParent =
      'div[style="display: flex; box-sizing: border-box; border-top: 1px solid transparent; border-bottom: 1px solid transparent; height: auto; min-height: 40px; margin-left: 0px; box-shadow: none;"]';

    const prioritize = () => {
      console.log('Setting priorities...');
      const issuesArray = Array.from(
        document.querySelectorAll('.queues-redesign-container .issuekey')
      );
      const list = issuesArray.map(issue => issue.closest(issuesCommonParent));
      let currentItemDate = null;

      list.forEach(item => {
        if (item) {
          const dueDateText = item.querySelector('.duedate').textContent.trim();
          const dueDate = moment(dueDateText, 'DD/MMM/YY');
          const priority = dateCheck(dueDate);
          if (priority) {
            // item.classList.add(priority);
            item.closest(issuesCommonParent).classList.add(priority);
            item.closest(issuesCommonParent).style.backgroundColor = 'unset';
          }

          if (!currentItemDate) {
            currentItemDate = dueDate;
          } else if (
            !dueDate.isSame(currentItemDate) &&
            dueDate.toString() !== 'Invalid date'
          ) {
            item.classList.add('new-section');
            currentItemDate = dueDate;
          }
        }
      });
    };

    const dateCheck = dueDate => {
      if (dueDate.toString() === 'Invalid date') {
        // don't do anything
        return false;
      }

      if (dueDate.isSame(moment(), 'days')) {
        return 'due-today';
      }
      if (dueDate.isBefore(moment(), 'days')) {
        return 'overdue';
      }

      const diff = dueDate.diff(moment(), 'weeks');

      switch (diff) {
        case 0:
          return 'due-this-week';
        case 1:
          return 'due-next-week';
        case 2:
          return 'due-two-weeks';
        case 3:
          return 'due-three-weeks';
        default:
          // later than three weeks; not important
          break;
      }
    };

    prioritize();
    observeEl('#content', prioritize);
  }
};

var showPTSDJiraColors = () => {
  const isPTSDPage = checkUrl('https://perqindianapolis.atlassian.net/projects/PTSD/queues/custom/1');

  if (isPTSDPage) {
    injectCss('showPTSDJiraColors');

    const issuesCommonParent =
      'div[style="display: flex; box-sizing: border-box; border-top: 1px solid transparent; border-bottom: 1px solid transparent; height: auto; min-height: 40px; margin-left: 0px; box-shadow: none;"]';

    const prioritize = () => {
      console.log('Setting issue priorities...');
      const issuesArray = Array.from(
        document.querySelectorAll('.queues-redesign-container .issuekey')
      );
      const list = issuesArray.map(issue => issue.closest(issuesCommonParent));
      let currentItemTime = null;

      list.forEach(item => {
        if (item) {
          //var dueTimeText = item.querySelector('.sc-dXfzlN').textContent.trim();
          var dueTimeText = item.querySelector('sc-btewqU').textContent.trim();
          var tempVal = dueTimeText.split(" ");
          dueTimeText = tempVal[0].trim();
          const priority = timeCheck(dueTimeText);
          if (priority) {
            // item.classList.add(priority);
            item.closest(issuesCommonParent).classList.add(priority);
            item.closest(issuesCommonParent).style.backgroundColor = 'unset';
          }

          if (!currentItemTime) {
            currentItemTime = dueTimeText;
          } else if (dueTimeText.indexOf("4h")>-1) {
            item.classList.add('new-section');
            currentItemTime = dueTimeText;
          }
        }
      });
    };

    const timeCheck = dueTime => {
      if (dueTime.toString() === 'Invalid date') {
        // don't do anything
        return false;
      }
        
      if (dueTime.indexOf("-")>-1) {
        return 'overduePTSD';
      } if (dueTime.indexOf("h")<0) {
        return 'due-lessthan-hour';
      } if (dueTime == "1h") {
        return 'due-hour';
      } if (dueTime == "2h") {
        return 'due-two-hours';
      } if (dueTime == "3h") {
        return 'due-three-hours';
      } if (dueTime == "4h") {
        return 'due-four-hours';
      } else {
          return 'due-four-hours';
      }
    };

    prioritize();
    observeEl('#content', prioritize);
  }
};

var dripAccountSearch = () => {
  const isDripPage = checkUrl('getdrip.com');

  if (isDripPage) {
    injectCss('dripAccountSearch');

    const configureListeners = () => {
      const accountSearch = document.querySelector('.fw-account-search');
      const accountContainerSelector = '.main-nav__accounts';
      const accountContainer = document.querySelector(accountContainerSelector);
      const accountsNodes = document.querySelectorAll(
        '.main-nav__accounts > .dropdown-menu > ul > li'
      );
      const accountsList = Array.from(accountsNodes);

      // add focus highlighting for visual feedback when tabbing through results
      accountsList.map(account => {
        account.querySelector('a').onfocus = e => {
          e.target.classList.add('fw-focus');
        };
        account.querySelector('a').onblur = e => {
          e.target.classList.remove('fw-focus');
        };
      });

      // filter accounts based on search value
      accountSearch.addEventListener('input', e => {
        accountsList.filter(it => {
          const text = it.textContent.toLowerCase();
          const value = e.target.value.toLowerCase();
          if (!text.includes(value)) {
            it.classList.add('fw-hide');
          } else {
            it.classList.remove('fw-hide');
          }
        });
      });

      // focus the search field when opening the accounts list
      accountContainer.addEventListener('click', () => {
        setTimeout(() => {
          accountSearch.focus();
        }, 100);
      });

      // observe the accounts list to see when it is open and closed
      // reset the search field when it's closed
      observeEl(
        accountContainerSelector,
        accountContainer => {
          const open = accountContainer[0].target.classList.contains('open');
          if (!open) {
            setTimeout(() => {
              accountSearch.value = '';
              document.querySelectorAll('.fw-hide').forEach(item => {
                item.classList.remove('fw-hide');
              });
            }, 500);
          }
        },
        {
          attributes: true,
          attributeFilter: ['class'],
          childList: false,
          characterData: false,
        }
      );
    };

    // ------- SEARCH FIELD HTML -----------------//
    // <div class="fw-account-search-container">
    //     <input
    //		  type="text"
    //		  class="quick-search
    //		  fw-account-search"
    //		  placeholder="Search for an account"
    //	   >
    // </div>

    // recreate the above
    const createSearchElement = () => {
      const container = document.createElement('div');
      container.classList.add('fw-account-search-container');

      const input = document.createElement('input');
      input.classList.add('quick-search', 'fw-account-search');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', 'Search for an account');

      container.appendChild(input);
      return container;
    };

    // inject the created element
    const renderSearchElement = () => {
      const element = createSearchElement();
      const target = document.querySelector(
        '.main-nav__accounts .dropdown-menu'
      );
      const reference = document.querySelector(
        '.main-nav__accounts .dropdown-menu > ul'
      );

      target.insertBefore(element, reference);
    };

    renderSearchElement();
    configureListeners();
  }
};

var blinkCSSDHubAndLeadNurture = () => {
  const isCSSDPage = checkUrl(
    'https://perqindianapolis.atlassian.net/projects/CSSD/queues/custom',
    '/browse/CSSD'
  );

  if (isCSSDPage) {
    injectCss('blinkCSSDHubAndLeadNurture');
    
    const checkForLeadNurture = () => {
      console.log('Checking for Lead Nurture...');
      const label = document.querySelector('[title="Client has Lead Nurture"]');
      const value = document.querySelector(
        '[title="Client has Lead Nurture"] + div'
      );

      if (label && value) {
        label.classList.add('blink');
        value.classList.add('blink');
      }
    };

    const checkForHub = () => {
      console.log('Checking for Hub...');
      const label = document.querySelector('[title="Multifamily HUB"]');
      const value = document.querySelector('[title="Multifamily HUB"] + div');

      if (label && value) {
        label.classList.add('blink');
        value.classList.add('blink');
      }
    };

    const runChecks = () => {
      checkForLeadNurture();
      checkForHub();
    };

    runChecks();
    observeEl('#content', runChecks);
  }
};

var milkywayKeyboardShortcuts = () => {
  const isFatwinPage = checkUrl('https://perq.fatwin.net/#');

  if (isFatwinPage) {
    document.addEventListener('keydown', e => {
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyS') {
        openSearch();
      }
    });

    const openSearch = () => {
      const dropDown = document.querySelector('.dropdown');
      const isOpen = dropDown.classList.contains('open');
      const button = document.querySelector('.dropdown button');
      const searchInput = document.querySelector('.fw-search-client input');

      if (isOpen) {
        // close dropdown
        button.click();
      } else {
        // open drowdown and focus input
        button.click();
        searchInput.focus();
        searchInput.value = '';
      }
    };
  }
};

var resizeWindow = () => {
    if ((window.location.href.indexOf(".fatwin.net/#/websiteplugins/")>-1) && (window.location.href.indexOf("/pages")<0) && (window.location.href.indexOf("/webexperiences")<0) && (window.location.href.indexOf("/callstoaction")<0) && (window.location.href.indexOf("/summary")<0)) {
        console.log("Resizing window");
        injectJs('resizeWindow');
    }
    window.addEventListener('hashchange', function(e){
        if ((window.location.href.indexOf(".fatwin.net/#/websiteplugins/")>-1) && (window.location.href.indexOf("/pages")<0) && (window.location.href.indexOf("/webexperiences")<0) && (window.location.href.indexOf("/callstoaction")<0) && (window.location.href.indexOf("/summary")<0)) {
            console.log("Resizing window");
            injectJs('resizeWindow');
        }
    })
}

var checkForFatwinCode = () => {
  let count = 1;
  const interval = setInterval(() => {
    const scripts = Array.from(document.scripts).filter(it =>
      it.src.includes('fatwin.com/api')
    );
    
    if (scripts.length > 0) {
      clearInterval(interval);
      console.log('FATWIN Scripts: ', scripts);
      const url = window.location.href;
      chrome.runtime.sendMessage({
        action: 'updateIcon',
        value: true,
        url,
      });
    } else if (count === 3) {
        clearInterval(interval);
        console.log('PERQ Implementation Tools: No FATWIN scripts found after three checks');
        const url = window.location.href;
        chrome.runtime.sendMessage({
          action: 'updateIcon',
          value: false,
          url,
        });
    } else {
      count++;
    }
  }, 1500);
};

var emailLogEnhancements = () => {
  const isEmailLogPage = checkUrl('http://10.101.10.12');

  if (isEmailLogPage) {
    injectCss('emailLogEnhancements');
  }
}