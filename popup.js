const checkboxNodes = document.querySelectorAll('input[type="checkbox"]');
const checkboxes = Array.from(checkboxNodes);
const checkmark = document.querySelector('.checkmark');
const alertmark = document.querySelector('.alertmark');
var globalCount = 0;
var initial = document.getElementById("initialTxt");
var values = document.getElementById("valuesTxt");
var result = document.getElementById("resultText");
var resultArea = document.getElementById("resultArea");
var initial2 = document.getElementById("initialTxt2");
var initial3 = document.getElementById("dripTxt");
var values2 = document.getElementById("valuesTxt2");
var result2 = document.getElementById("resultText2");
var resultArea2 = document.getElementById("resultArea2");

// Formats string into useable text for virtual tour/lead routing/zip code routing
formatString.onclick = function() {
    if (initial.value === '' && values.value === '') {
        // Do nothing
    } else {
        resultArea.style.display = "block";
        // Format virtual tour string here
        var urls = initial.value.replace(/(\r\n|\n|\r)/gm,",");
        var nums = values.value.replace(/(\r\n|\n|\r)/gm,",");
        var finalURL = urls.split(",");
        var finalNum = nums.split(",");
        var finalVal = "";
        for (var i = 0; i < finalURL.length; i++) {
            finalVal += "'" + finalURL[i] + "': '" + finalNum[i] + "'," + "\n";
        }
        result.value = finalVal;
    }
}

showCIJiraColors.onclick = function () {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
    });
}

showPTSDJiraColors.onclick = function () {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
    });
}

// Formats string into useable text for virtual tour/lead routing/zip code routing
formatString2.onclick = function() {
    if (initial2.value === '' && values2.value === '') {
        // Do nothing
    } else {
        resultArea2.style.display = "block";
        // Format virtual tour string here
        var vals = initial2.value.replace(/(\r\n|\n|\r)/gm,",");
        var emails = values2.value.replace(/(\r\n|\n|\r)/gm,",");
        var finalURL = vals.split(",");
        var finalNum = emails.split(",");
        var finalVal = "";
        for (var i = 0; i < finalURL.length; i++) {
            finalVal += "{id: '" + finalURL[i] + "', internalEmail: '" + finalNum[i] + "'}," + "\n";
        }
        result2.value = "var emailLookupList = [" + "\n" + finalVal + "\n" + "{id: 'Value Not Found', internalEmail: defaultInternalEmail}" + "\n" + "];";
    }
}

// Formats string into useable text for virtual tour/lead routing/zip code routing
formatString3.onclick = function() {
    if (initial3.value === '') {
        // Do nothing
    } else {
        // Format virtual tour string here
        var values = initial3.value.replace(/(\r\n|\n|\r)/gm,",");
        var finalVals = values.split(",");
        var final = "";
        var i = 0;
        while(i < 1) {
            final += finalVals[0] + " DRIP integration is set up with these auto pop URLs: " + "\n" + "| " + finalVals[1] + " | Design Assessment | " + finalVals[1] + "?px=da |" + "\n" + "| " + finalVals[2] + " | Design Consultation | " + finalVals[2] + "?px=dc |" + "\n" + "| " + finalVals[3] + " | Chair Consultation | " + finalVals[3] + "?px=cc |" + "\n" + "| " + finalVals[4] + " | Mattress Consultation | " + finalVals[4] + "?px=mc |" + "\n" + "| " + finalVals[5] + " | Sofa Consultation | " + finalVals[5] + "?px=sc |" + "\n";
            i = 1;
        }
        initial3.value = final.trim();
    }
}

// Inserts CSS if it hasn't already, otherwise removes it
function insertCSS() {
    if (globalCount == 0) {
        chrome.tabs.insertCSS({code: "iframe{border:6px solid red !important;}"});
        globalCount = 1;
        document.getElementById("alert").style.cssText = 'display: block';       
        alertmark.style.display = 'none';
        setTimeout(() => {
          alertmark.style.display = 'block';
        }, 10);
    } else {
        chrome.tabs.insertCSS({code: "iframe{border:0 !important;}"});
        globalCount = 0;
        document.getElementById("alert").style.cssText = 'display: none';
    }
}

// Removes CSS from page
function removeCSS() {
    if (globalCount != 0) {
        chrome.tabs.insertCSS({code: "iframe{border:0 !important;}"});
        globalCount = 0;
    } else {
        // Do nothing;
    }
}

openFormat.onclick = function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        document.getElementById("container").style.cssText = 'width: 325px';
        /*document.getElementById("toggle1").style.cssText = 'width: 118px';
        document.getElementById("toggle2").style.cssText = 'width: 102px';
        document.getElementById("toggle3").style.cssText = 'width: 105px; background-color: #00CC00';*/
        document.getElementById("imageLogo").style.cssText = 'margin-right: 60px';
        document.getElementById("toggle1").disabled = false;
        document.getElementById("toggle2").disabled = false;
        document.getElementById("toggle3").disabled = false;
        document.getElementById("openFormat2").disabled = false;
        document.getElementById("openFormat3").disabled = false;
    } else {
        content.style.display = "block";
        document.getElementById("container").style.cssText = 'width: 400px';
        /*document.getElementById("toggle1").style.cssText = 'width: 130px';
        document.getElementById("toggle2").style.cssText = 'width: 135px';
        document.getElementById("toggle3").style.cssText = 'width: 135px; background-color: #00CC00';*/
        document.getElementById("imageLogo").style.cssText = 'margin-right: 98px';
        document.getElementById("toggle1").disabled = true;
        document.getElementById("toggle2").disabled = true;
        document.getElementById("toggle3").disabled = true;
        document.getElementById("openFormat2").disabled = true;
        document.getElementById("openFormat3").disabled = true;
    }
}

openFormat2.onclick = function () {
    this.classList.toggle("active");
    var content2 = this.nextElementSibling;
    if (content2.style.display === "block") {
        content2.style.display = "none";
        document.getElementById("container").style.cssText = 'width: 325px';
        document.getElementById("imageLogo").style.cssText = 'margin-right: 60px';
        document.getElementById("toggle1").disabled = false;
        document.getElementById("toggle2").disabled = false;
        document.getElementById("toggle3").disabled = false;
        document.getElementById("openFormat").disabled = false;
        document.getElementById("openFormat3").disabled = false;
    } else {
        content2.style.display = "block";
        document.getElementById("container").style.cssText = 'width: 400px';
        document.getElementById("imageLogo").style.cssText = 'margin-right: 98px';
        document.getElementById("toggle1").disabled = true;
        document.getElementById("toggle2").disabled = true;
        document.getElementById("toggle3").disabled = true;
        document.getElementById("openFormat").disabled = true;
        document.getElementById("openFormat3").disabled = true;
    }
}

openFormat3.onclick = function () {
    this.classList.toggle("active");
    var content3 = document.getElementById("content3");
    if (content3.style.display == "block") {
        content3.style.display = "none";
        document.getElementById("container").style.cssText = 'width: 325px';
        document.getElementById("imageLogo").style.cssText = 'margin-right: 60px';
        document.getElementById("toggle1").disabled = false;
        document.getElementById("toggle2").disabled = false;
        document.getElementById("toggle3").disabled = false;
        document.getElementById("openFormat").disabled = false;
        document.getElementById("openFormat2").disabled = false;
    } else {
        content3.style.display = "block";
        document.getElementById("container").style.cssText = 'width: 400px';
        document.getElementById("imageLogo").style.cssText = 'margin-right: 98px';
        document.getElementById("toggle1").disabled = true;
        document.getElementById("toggle2").disabled = true;
        document.getElementById("toggle3").disabled = true;
        document.getElementById("openFormat2").disabled = true;
        document.getElementById("openFormat").disabled = true;
    }
}

// When iframe button is clicked, checks for iframes on page
checkForIframe.onclick = function(element) {
    // Runs query on current active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var someVar = {text: 'test', foo: 1, bar: false};
        // Executes script that returns a jSON string of the outerHTML of entire page
        chrome.tabs.executeScript({
            code: '(' + function(params) {
                return {success: true, html: document.all[0].outerHTML};
            } + ')(' + JSON.stringify(someVar) + ');'
        }, function(results) {
            // Conditional that checks the HTML for an iframe on the page, outputs an alert
            if (results[0].html.indexOf("frameborder=")>-1) {
                // Calls function to insert CSS
                insertCSS();
            } else {
                // Custom alert prompt when no iframe is found on page
                document.getElementById("greenAlert").style.cssText = 'display: block';
                checkmark.style.display = 'none';
                setTimeout(() => {
                  checkmark.style.display = 'block';
                }, 10);
            }
        });
    });
};

// When close button is clicked, it closes the extension window
closeButton.onclick = function() {
    removeCSS();
    window.close();
}

// Removes alert box at bottom of screen
closebtn.onclick = function() {
    document.getElementById("alert").style.cssText = 'display: none';
}

// Removes alert box at bottom of screen
closegreenAlert.onclick = function() {
    document.getElementById("greenAlert").style.cssText = 'display: none';
}

//Copies text from result field
copyButton.onclick = function() {
    var copyText = document.getElementById("resultText");
    copyText.select();
    document.execCommand("copy");
}

// Clears input/result fields and sets focus on the initial input field
clearButton.onclick = function() {
    resultArea.style.display = "none";
    result.value = "";
    initial.value = "";
    values.value = "";
    initial.focus();
}

//Copies text from result field
copyButton2.onclick = function() {
    var copyText = document.getElementById("resultText2");
    copyText.select();
    document.execCommand("copy");
}

//Copies text from result field
copyButton3.onclick = function() {
    var copyText = document.getElementById("dripTxt");
    copyText.select();
    document.execCommand("copy");
}

// Clears input/result fields and sets focus on the initial input field
clearButton2.onclick = function() {
    resultArea2.style.display = "none";
    result2.value = "";
    initial2.value = "";
    values2.value = "";
    initial2.focus();
}

// Stores enabled options in Chrome local storage for remembering clicked options after extension is closed out
chrome.storage.sync.get('enabledOptions', ({ enabledOptions }) => {
  if (enabledOptions.length) {
    console.log(`Enabling the following options:
      ${enabledOptions.join('\n')}
    `);
  }

  enabledOptions.map(option =>
    document
      .querySelector(`input[name="${option}"]`)
      .setAttribute('checked', true)
  );
});

checkboxes.map(box => {
  box.addEventListener('change', e => {
    console.log(e);
    console.log(`Checked status: ${e.target.checked}`);
      
    if (e.target.checked) {
        chrome.storage.sync.get('enabledOptions', ({ enabledOptions }) => {
            enabledOptions.push(e.target.name);
            console.log(enabledOptions);
            chrome.storage.sync.set({ enabledOptions });
        });
    } else {
        chrome.storage.sync.get('enabledOptions', ({ enabledOptions }) => {
            const index = enabledOptions.indexOf(e.target.name);
            if (index > -1) {
                enabledOptions.splice(index, 1);
                console.log(enabledOptions);
                chrome.storage.sync.set({ enabledOptions });
            }
            value = 0;
        });
    }

    checkmark.style.display = 'none';
    setTimeout(() => {
      checkmark.style.display = 'block';
    }, 10);
  });
});

const form = document.querySelector('.options-list');
form.onsubmit = e => {
  e.preventDefault();
  console.log('Form submitted...');

  const enabledOptions = Array.from(e.target)
    .map(item => {
      if (item.checked) {
        return item.name;
      }
      return null;
    })
    .filter(it => it !== null);
  console.log(enabledOptions);
  chrome.storage.sync.set({ enabledOptions }, () => {
    chrome.storage.sync.get('enabledOptions', data => {
      console.log(data);
    });
  });
};

const form2 = document.querySelector('.options-list2');
form2.onsubmit = e => {
  e.preventDefault();
  console.log('Form submitted...');

  const enabledOptions = Array.from(e.target)
    .map(item => {
      if (item.checked) {
        return item.name;
      }
      return null;
    })
    .filter(it => it !== null);
  console.log(enabledOptions);
  chrome.storage.sync.set({ enabledOptions }, () => {
    chrome.storage.sync.get('enabledOptions', data => {
      console.log(data);
    });
  });
};

const form3 = document.querySelector('.options-list3');
form3.onsubmit = e => {
  e.preventDefault();
  console.log('Form submitted...');

  const enabledOptions = Array.from(e.target)
    .map(item => {
      if (item.checked) {
        return item.name;
      }
      return null;
    })
    .filter(it => it !== null);
    console.log(enabledOptions);
    chrome.storage.sync.set({ enabledOptions }, () => {
        chrome.storage.sync.get('enabledOptions', data => {
            console.log(data);
        });
    });
};

// Loads previous view upon opening extension
window.onload = function () {
    chrome.storage.sync.get(['key'], function(result) {
        //console.log(result.key);
        if (result.key) {
            // Sets view accordingly
            if (result.key === 'ImplementationView') {
                console.log('View is set to ' + result.key);
                document.getElementById("toggle1").style.cssText = 'background-color: #00CC00';
                document.getElementById("toggle2").style.cssText = 'background-color: #009900';
                document.getElementById("toggle3").style.cssText = 'background-color: #009900';
                document.getElementById("ImplementationView").style.display = "block";
                document.getElementById("CSMView").style.display = "none";
                document.getElementById("PluginView").style.display = "none";
            } else if (result.key === 'CSMView') {
                console.log('View is set to ' + result.key);
                document.getElementById("toggle1").style.cssText = 'background-color: #009900';
                document.getElementById("toggle2").style.cssText = 'background-color: #00CC00';
                document.getElementById("toggle3").style.cssText = 'background-color: #009900';
                document.getElementById("ImplementationView").style.display = "none";
                document.getElementById("CSMView").style.display = "block";
                document.getElementById("PluginView").style.display = "none";
            } else if (result.key === 'PluginView') {
                console.log('View is set to ' + result.key);
                document.getElementById("toggle1").style.cssText = 'background-color: #009900';
                document.getElementById("toggle2").style.cssText = 'background-color: #009900';
                document.getElementById("toggle3").style.cssText = 'background-color: #00CC00';
                document.getElementById("ImplementationView").style.display = "none";
                document.getElementById("CSMView").style.display = "none";
                document.getElementById("PluginView").style.display = "block";
            } else {
                console.log("Default View");
                document.getElementById("toggle1").style.cssText = 'background-color: #00CC00';
                document.getElementById("toggle2").style.cssText = 'background-color: #009900';
                document.getElementById("toggle3").style.cssText = 'background-color: #009900';
                document.getElementById("ImplementationView").style.display = "block";
                document.getElementById("CSMView").style.display = "none";
                document.getElementById("PluginView").style.display = "none";
            }
        } else {
            console.log("Default View");
            document.getElementById("toggle1").style.cssText = 'background-color: #00CC00';
            document.getElementById("toggle2").style.cssText = 'background-color: #009900';
            document.getElementById("toggle3").style.cssText = 'background-color: #009900';
            document.getElementById("ImplementationView").style.display = "block";
            document.getElementById("CSMView").style.display = "none";
            document.getElementById("PluginView").style.display = "none";
        }
    });
}

// Changes to Implementation view
toggle1.onclick = function () {
    document.getElementById("toggle1").style.cssText = 'background-color: #00CC00';
    document.getElementById("toggle2").style.cssText = 'background-color: #009900';
    document.getElementById("toggle3").style.cssText = 'background-color: #009900';
    document.getElementById("ImplementationView").style.display = "block";
    document.getElementById("CSMView").style.display = "none";
    document.getElementById("PluginView").style.display = "none";
    // Sets view in Chrome storage
    var value = "ImplementationView"
    chrome.storage.sync.set({key: value}, function() {
      console.log('Setting value to ' + value);
    });
}

// Changes to CSM/Sales view
toggle2.onclick = function () {
    document.getElementById("toggle1").style.cssText = 'background-color: #009900';
    document.getElementById("toggle2").style.cssText = 'background-color: #00CC00';
    document.getElementById("toggle3").style.cssText = 'background-color: #009900';
    document.getElementById("ImplementationView").style.display = "none";
    document.getElementById("CSMView").style.display = "block";
    document.getElementById("PluginView").style.display = "none";
    // Sets view in Chrome storage
    var value = "CSMView"
    chrome.storage.sync.set({key: value}, function() {
      console.log('Setting value to ' + value);
    });
}

// Changes to Plugin view
toggle3.onclick = function () {
    document.getElementById("toggle1").style.cssText = 'background-color: #009900';
    document.getElementById("toggle2").style.cssText = 'background-color: #009900';
    document.getElementById("toggle3").style.cssText = 'background-color: #00CC00';
    document.getElementById("ImplementationView").style.display = "none";
    document.getElementById("CSMView").style.display = "none";
    document.getElementById("PluginView").style.display = "block";
    // Sets view in Chrome storage
    var value = "PluginView"
    chrome.storage.sync.set({key: value}, function() {
      console.log('Setting value to ' + value);
    });
}