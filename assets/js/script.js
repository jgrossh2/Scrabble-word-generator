// Scrabble Word Generator

// page elements
var twoLetterBtnEl = document.getElementById('twoLetterBtn');
var threeLetterBtnEl = document.getElementById('threeLetterBtn');
var randomLetterBtnEl = document.getElementById('randomLetterBtn');
var highScoreBtnEl = document.getElementById('highScoreBtn');
var letterContainerEl = document.getElementById('possible-letters');
var searchContentEl = document.getElementById('search-content');
var resultsContainerEl = document.getElementById('results-container');
var letterEl = document.querySelector(".letter");
var spaceEl = document.querySelector(".space");
var aEl = document.getElementById('a');

// global page variables
var wordLength = 0;
var dropLetters = [];
// var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letterEl = document.querySelector(".letter");
var spaceEl = document.querySelector(".space");
// var oldTile = [];
// var dragged = [];

// get user input area
// spaceEl.textContent = "Drag Letters Here! "

// drag letters
var dragLetters = function (event) {
    event.preventDefault();
    console.log("works")
}
//row 1 and dropzone
$(function () {
    $(".sortable1, .sortable4").sortable({
        // revert: true,
        containment: "#keyboard",
        tolerance: "pointer",
        cursor: "move",
        appendTo: "body",
        helper: "clone",
        placeholder: "highlight",
        connectWith: ".sortable4",
        items: ".tiles",
        start: function (event, ui) {
            ui.helper.addClass("dragging");
            $(".dropped").addClass("dropZone");
        },
        stop: function (event, ui) {
            $(".dropped").removeClass("dropZone");
        },
        remove: function (event, ui) {
            // $(this).sortable('disable');
            ui.item.clone().appendTo(".sortable4");
            $(this).sortable('cancel');
            // console.log(this);
            var done = $(ui.item).clone().attr('id');
            console.log(done);
            var oldTile = document.getElementById(done);
            $(oldTile).addClass("gray");
            //    $(oldTile).sortable(); 
            //    var check = $(oldTile).sortable('instance');
            //    console.log(check);
            //    $(oldTile).sortable("disable");
            //    $(oldTile).sortable('enable');
            //    console.log(oldTile);
        },
        over: function (event, ui) {
        },
        out: function (event, ui) {
        },
    }).disableSelection();
    $(".sortable4").sortable({
        connectWith: ".sortable4"
    }).disableSelection();
});
//row 2 and dropzone
$(function () {
    $(".sortable2, .sortable4").sortable({
        // revert: true,
        containment: "#keyboard",
        tolerance: "pointer",
        cursor: "move",
        appendTo: "body",
        helper: "clone",
        placeholder: "highlight",
        connectWith: ".sortable4",
        start: function (event, ui) {
            ui.helper.addClass("dragging");
            $(".dropped").addClass("dropZone");
        },
        stop: function (event, ui) {
            $(".dropped").removeClass("dropZone");
        },
        remove: function (event, ui) {
            ui.item.clone().appendTo(".sortable4");
            $(this).sortable('cancel');
            var done = $(ui.item).clone().attr('id');
            // console.log(done);
            var oldTile = document.getElementById(done);
            $(oldTile).addClass("gray");
            // $(oldTile).sortable();
            // var check = $(oldTile).sortable('instance');
            // console.log(check);
            // $(oldTile).sortable('disable');
        }
    }).disableSelection();
    $(".sortable4").sortable({
        connectWith: ".sortable4"
    }).disableSelection();
});
//row 3 and drop area
$(function () {
    $(".sortable3, .sortable4").sortable({
        // revert: true,
        containment: "#keyboard",
        tolerance: "pointer",
        cursor: "move",
        appendTo: "body",
        helper: "clone",
        placeholder: "highlight",
        connectWith: ".sortable4",
        start: function (event, ui) {
            ui.helper.addClass("dragging");
            $(".dropped").addClass("dropZone");
        },
        stop: function (event, ui) {
            $(".dropped").removeClass("dropZone");
        },
        remove: function (event, ui) {
            ui.item.clone().appendTo(".sortable4");
            $(this).sortable('cancel');
            var done = $(ui.item).clone().attr('id');
            // console.log(done);
            var oldTile = document.getElementById(done);
            $(oldTile).addClass("gray");
            // $(oldTile).sortable();
            // var check = $(oldTile).sortable('instance');
            // console.log(check);
            // $(oldTile).sortable('disable');

        }
    }).disableSelection();
    $(".sortable4").sortable({
        connectWith: ".sortable4"
    }).disableSelection();
});
//make dropzone
$(".dropped").droppable({
    accept: ".letter",
    tolerance: "touch",
    revert: false,
    drop: function (event, ui) {
        // console.log(ui);
        // console.log("drop");
        $(".dropped").addClass("dropZone");
        // $(this).sortable('disable');
        // var helper = ui.helper.clone(true);
        // $(".letter").draggable('disable');
        // finds object and then letter value of that object
        var dragged = ui.draggable[0].dataset.letter;
        // console.log(dragged);
        // var droppedDone = $(dragged).attr('id');
        // console.log(droppedDone);
        // var dragTile = document.getElementById(droppedDone);
        // dragTile.sortable('disable');

        //add drop letters to array
        dropLetters.push(dragged);
    },
    over: function (event, ui) {
    },
    out: function (event, ui) {
    },
    update: function (event) {
    }
});
letterEl.addEventListener("click", dragLetters)

// event listeners to gather user input and start generator function
twoLetterBtnEl.addEventListener('click', function () {
    // get possible letters from form
    var letters = dropLetters.join('');
    // reset global variable
    var wordLength = 0;
    // set search criteria
    var wordLength = 2;
    // call word generator
    genWordList(wordLength, letters);
});

threeLetterBtnEl.addEventListener('click', function () {
    // get possible letters from form
    var letters = dropLetters.join('');
    // reset global variable
    var wordLength = 0;
    // set search criteria
    var wordLength = 3;
    // call word generator
    genWordList(wordLength, letters);
});

randomLetterBtnEl.addEventListener('click', function () {
    // sort letters based on value before sending to genWordList
    function sortFunc(a, b) {
        var priorityLetters = ['z', 'q', 'x', 'j', 'k', 'w', 'y', 'v', 'f', 'h', 'o', 'm', 'c', 'b', 'g', 'd', 'u', 's', 'l', 't', 'r', 'n', 'o', 'i', 'a', 'e'];
        return priorityLetters.indexOf(a) - priorityLetters.indexOf(b);
    }
    dropLetters.sort(sortFunc);

    // get possible letters from form
    var letters = dropLetters.join('');

    // get total letter count
    letterCounter(letters);
    function letterCounter(letters) {
        // reset global variable
        wordLength = 0;
        var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var ar = alphabet.split("");
        for (var i = 0; i < letters.length; i++) {
            if (ar.indexOf(letters[i]) > -1) {
                wordLength = wordLength + 1;
            }
        }
        return wordLength;
    }
    // call word generator
    genWordList(wordLength, letters);
});

// generate all possible combinations of inputted letters
var genWordList = function (wordLength, letters) {
    // reset form container
    spaceEl.innerHTML = " ";
    var results = [];
    var arrayCounter = 0;

    var generate = function (possWord) {
        for (var i = 0; i < letters.length; i++) {
            if (arrayCounter <= 11) {
                possWord += letters[i];
                if (possWord.length === wordLength) {
                    if (dict.includes(possWord)) {
                        results.push(possWord);
                        arrayCounter++;
                    }
                } else {
                    generate(possWord);
                }
                possWord = possWord.slice(0, -1);
                // break from loop to cut down on load time    
            } else {
                break;
            }
        }
    }
    generate("");

    // store user search / results
    localStorage.setItem(letters, results);

    // get data from API
    getDefData(results);

    // display letter array to page
    displayLetters(letters, results);

    return console.log(results);
};

// display searched letters
var displayLetters = function (letters, results) {
    if (results.length === 0) {
        searchContentEl.textContent = '';
        searchContentEl.textContent = 'No Words Found';
    } else {
        searchContentEl.textContent = '';
        searchContentEl.textContent = letters;
    }
}

// function fetches definition data for each in an array of words and returns subset of data packaged as an object
var getDefData = function (results) {

    // empty array to capture object-response resulting from each word in the results array
    var wordObjArr = [];

    // generate API data for each word
    for (var i = 0; i < results.length; i++) {
        // api variables
        let word = results[i];
        var pexelURL = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
        var API_key = "563492ad6f91700001000001294e0c620d364f5597a8efd5b7667ccf";

        // fetch both APIs
        var apiUrls = [
            fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${smkmw}`),
            fetch(pexelURL, {
                headers: {
                    // Accept: 'application/json',
                    Authorization: API_key
                    //credentials: 'include'
                }
            }),
        ];
        // submit https request
        Promise.all(apiUrls).then(function (responses) {
            // using map() method to get a response array of json objects, 
            return Promise.all(responses.map(function (response) {
                return response.json();
            }))
                // word object definition
                .then(function (response) {
                    // console.log(response)
                    var wordDef = response[0][0];
                    var imgSrc = response[1];

                    // properties that are inconsistently available within response data
                    var audio;
                    if (wordDef.hwi.prs) {
                        audio = wordDef.hwi.prs[0].sound.audio
                    } else {
                        audio = console.log("Sorry, there is no audio available for " + word) // to be added as message on page
                    }
                    var image_s;
                    if (imgSrc.photos[0]) {
                        image_s = imgSrc.photos[0].src.small
                    } else {
                        image_s = console.log("Sorry, there is no image available for " + word) // to be added as message on page
                    }
                    var image_m;
                    if (imgSrc.photos[0]) {
                        image_m = imgSrc.photos[0].src.medium
                    } else {
                        image_m = ''
                    }
                    var image_l;
                    if (imgSrc.photos[0]) {
                        image_l = imgSrc.photos[0].src.large
                    } else {
                        image_l = ''
                    }
                    var photographer;
                    if (imgSrc.photos[0]) {
                        photographer = imgSrc.photos[0].photographer
                    } else {
                        photographer = ''
                    }
                    var photog_url;
                    if (imgSrc.photos[0]) {
                        photog_url = imgSrc.photos[0].photographer_url
                    } else {
                        photog_url = ''
                    }

                    // collating properties from both api responses into single object
                    var wordObj = {
                        word: wordDef.hwi.hw,
                        class: wordDef.fl,
                        definition: wordDef.shortdef,
                        audio: audio,
                        offensive: wordDef.meta.offensive,
                        image_s: image_s,
                        image_m: image_m,
                        image_l: image_l,
                        photographer: photographer,
                        photog_url: photog_url,
                    }
                    wordObjArr.push(wordObj);
                    return wordObj;
                })
                .catch((error) => {
                    console.error('Error: ', error);
                })
        });
    };
    displayWordData(wordObjArr);
};

// function takes api object array and parses for display
var displayWordData = function (wordObjArr) {

    setTimeout(function tick() {
        // loop through each object generated from the word-results array
        for (var i = 0; i < wordObjArr.length; i++) {
            var wordData = wordObjArr[i]
            console.log(wordData)
            // check to see whether term is offensive
            if (!wordData.offensive) {
                // create DOM elements
                var resultLI = document.createElement('li');
                resultLI.setAttribute('class', 'col-12');

                // display word within result container header
                var resultHeader = document.createElement('div');
                resultHeader.setAttribute('class', 'collapsible-header');
                resultHeader.innerHTML = '<p>' + wordData.word + '</p>';
                resultLI.append(resultHeader);

                // create div body element for class, audio button, definitions, and image-modal
                var resultBody = document.createElement('div');
                resultBody.setAttribute('class', 'collapsible-body');
                resultBody.innerHTML = '<span>' + wordData.class + '</span>';

                // loop through each homonym and display within element for that word
                for (var j = 0; j < wordData.definition.length; j++) {
                    n = j + 1
                    var resultDef = document.createElement('p');
                    resultDef.textContent = n + ') ' + wordData.definition[j];
                    resultBody.append(resultDef);
                }

                // display audio-button to page; takes 'audio' property from data object to create link for audio playback; conditions outlined in the Merriam-Webster api documentation are used to determine the 'subdir' value, which is a component of the audio-link href
                var aud;
                if (wordData.audio) {
                    aud = (wordData.audio.split('', 3))
                } else {
                    aud = ''
                }
                // this regular expression refers to any number (\d) or punctuation symbol (\W)
                var regex = RegExp('[\\d\\W]')
                var subdir = ''
                if (aud[0] + aud[1] + aud[2] === 'bix') {
                    subdir = 'bix'
                } else if (aud[0] + aud[1] === 'gg') {
                    subdir = 'gg'
                } else if (regex.test(aud[0])) {
                    subdir = 'number'
                } else {
                    subdir = aud[0]
                }
                console.log(subdir)
                var audioLink = 'https://media.merriam-webster.com/audio/prons/en/us/ogg/' + subdir + '/' + wordData.audio + '.ogg';

                // create 'audio' element for word playback 
                var audioEl = document.createElement('audio');
                // the 'audio' element will use the first direction it understands
                audioEl.innerHTML = "<source src=" + audioLink + " type='audio/ogg'>"
                                    "<p>Your audio does not support HTML5 audio.</p>";
                var audioBtn = document.createElement('button');
                audioBtn.setAttribute('type', 'button');
                audioBtn.innerHTML = "<span><img class='btn-floating waves-effect waves-light' id='audio-icon' src='assets/iconfinder_speaker-high-sound-volume-voice_32x32.png'></span></a>"
                audioBtn.addEventListener('click', playAudio);
                audioBtn.setAttribute('onClick', 'playAudio()');
                resultBody.append(audioBtn);

                function playAudio() {
                    audioEl.play();
                }

                // Get the modal
                var modal = document.getElementById("myModal");

                // Use 'getElementById' to get the ID of where the Img will be displayed
                var picBodyEl = document.getElementById('img-body');

                // Use 'getElementById' to get the ID of where the photographer name will be displayed
                var photographerEl = document.getElementById("ph-body");
                photographerEl.setAttribute('src', wordData.photographer);

                // Get the button that opens the modal
                var imgBtn = document.createElement('a')//addEventListener('click', onclick);
                imgBtn.setAttribute('class', 'btn-floating waves-effect waves-light red disabled')
                imgBtn.innerHTML = '<span><img id="info-icon" src="assets/iconfinder_Information_Circle_4781829.png"></span>'

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];
                // When the user clicks the button, open the modal 
                imgBtn.onclick = function () {
                    modal.style.display = "block";
                }// When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                }// When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }

                resultBody.append(imgBtn);
                resultLI.append(resultBody);
                resultsContainerEl.append(resultLI);
            }
            else {
                resultHeader.innerHTML = "<p>This word did not make it past our sensors.</p>"
            }
        }
    }, 1500);
};

function myFunction() {
    console.log("test2")
    var searchTerm = document.querySelector('#searchTerm').value;
    fetch(
        'https://api.giphy.com/v1/gifs/search?q=' +
        searchTerm +
        '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response.data[0]);
            var responseContainerEl = document.querySelector('#response-container');
            responseContainerEl.innerHTML = '';
            var gifImg = document.createElement('img');
            gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
            responseContainerEl.appendChild(gifImg);
        });
}

function searchFunction() {
    console.log("test")
    var srchTerm = document.querySelector('#srchTerm').value;
    fetch(
        'https://api.giphy.com/v1/gifs/search?q=' +
        srchTerm +
        '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response.data[0]);
            var responseContEl = document.querySelector('#response-cont');
            responseContEl.innerHTML = '';
            var gifVideo = document.createElement('img');
            gifVideo.setAttribute('src', response.data[0].images.fixed_height.url);
            responseContEl.appendChild(gifVideo);
        });
}