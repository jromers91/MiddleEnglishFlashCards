$(document).ready(function(){
    var deck = new Array();
    var currcard = null;

    Init();
    Draw();
    changeColor($);
    submit();
    enter();
    Show();
    
    //Event Handler
    function submit() {
    $("#clickme").click(function() {
        var useranswer = $("#answer").val();
        //$("#status").html(useranswer);
        if (currcard.answertext == useranswer) {
            greenBorder();
            //alert("correct");
            //ClearText();
            //clearTranslation();
            setTimeout(function(){ Draw(); ClearText(); }, 2000);
            //Draw(); // GET the next card
          }
          else {
            redBorder();
            //alert("try again");
            //ClearText();
            //clearTranslation();
          }
      });
    }

    function Show() {
      $('#click-answer').click(function() {
        $('.translation').toggleClass('show')
      })
    }

    function enter() {
      $("#answer").keyup(function (event) {
      if (event.keyCode == 13) {
        $("#clickme").click();
      }
    });
  }

      function ClearText() {
        $("#answer").val("");
        $('.translation').removeClass('show');
        $("#answer").removeClass();
        //$("#status").html("X");
      }

      /*function clearTranslation() {
        $('.translation').removeClass('show');
        $("#answer").removeClass();
      }*/


      function changeColor($) {
        $('.deck-button').click(function () {
            $(this).toggleClass('highlight')
        })
    }

      function Draw() {
        currcard  =  deck.shift();
        $('#word-type').text(currcard.wordtype);
        $("#a").attr("src", currcard.picture);
        $('#word').text(currcard.word);
        $('#translation').text(currcard.answertext);
      }

      function greenBorder() {
        $("#answer").removeClass('red');
        $("#answer").addClass('green')
      }

      function redBorder() {
        $("#answer").addClass('red')
      }

    function Init() {
    
    var arr = [

    // General Words 1 - 96
    // Knight's Tale 07 - 115
    // Reeve's Tale 116 - 129
    // Wife's Bath 130 - 148
    // Nun's Priest 149 - 160
    // Second Nun 161 - 170
    // Canon Yeoman 171 - 181
    // Manciple 182 - 193
        
    card1 = {
        card: 1,
        wordtype: "General Words",
        picture: "https://imgur.com/4r5UdHH.png",
        word: "al, al be that",
        answertext: "although" 
    },
    
    card2 = {
        card: 2,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "als",
        answertext : "also"
      },

      card3 = {
        card: 3,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "anon",
        answertext : "at once"
      },

      card4 = {
        card: 4,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "artow",
        answertext : "art thou"
      },

      card5 = {
        card: 5,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "as",
        answertext : "as"
      },

      card6 = {
        card: 6,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "atte",
        answertext : "at"
      },

      card7 = {
        card: 7,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "aventure",
        answertext : "chance"
      },

      card8 = {
        card: 8,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "axe",
        answertext : "ask"
      },

      card9 = {
        card: 9,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ay",
        answertext : "always"
      },

      card10 = {
        card: 10,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "been",
        answertext : "are"
      },

      card11 = {
        card: 11,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "bet",
        answertext : "better"
      },

      card12 = {
        card: 12,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "beth",
        answertext : "are"
      },

      card13 = {
        card: 13,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "brenne",
        answertext : "burn"
      },

      card14 = {
        card: 14,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "but, but if",
        answertext : "unless"
      },

      card15 = {
        card: 16,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "can, kan",
        answertext : "be able"
      },

      card16 = {
        card: 16,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "canstow",
        answertext : "can you"
      },

      card17 = {
        card: 17,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "cas",
        answertext : "happening"
      },

      card18 = {
        card: 18,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "certes",
        answertext : "certainly"
      },

      card19 = {
        card: 19,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "clepe",
        answertext : "call"
      },

      card20 = {
        card: 20,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "clerk",
        answertext : "scholar"
      },

      card21 = {
        card: 21,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "coy",
        answertext : "quiet"
      },

      card22 = {
        card: 22,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ech",
        answertext : "each"
      },

      card23 = {
        card: 23,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "echo",
        answertext : "each one "
      },

      card24 = {
        card: 24,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "eek, eke",
        answertext : "also"
      },

      card25 = {
        card: 25,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "er, or",
        answertext : "before"
      },

      card26 = {
        card: 26,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "everich",
        answertext : "every"
      },

      card27 = {
        card: 27,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "fay, fey",
        answertext : "faith"
      },

      card28 = {
        card: 28,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "forthy",
        answertext : "therefore"
      },

      card29 = {
        card: 29,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "fro",
        answertext : "from"
      },

      card30 = {
        card: 30,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "gan, gonne",
        answertext : "began"
      },

      card31 = {
        card: 31,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "han",
        answertext : "have"
      },

      card32 = {
        card: 32,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "hastow",
        answertext : "have you"
      },

      card33 = {
        card: 33,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "hem",
        answertext : "them"
      },

      card34 = {
        card: 34,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "here",
        answertext : "her"
      },

      card35 = {
        card: 35,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "hight",
        answertext : "named"
      },

      card36 = {
        card: 36,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "him lest",
        answertext : "he wants "
      },

      card37 = {
        card: 37,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "hir",
        answertext : "her"
      },

      card38 = {
        card: 38,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ich",
        answertext : "I"
      },

      card39 = {
        card: 39,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ilke",
        answertext : "same"
      },

      card40 = {
        card: 40,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "kan",
        answertext : "know"
      },

      card41 = {
        card: 41,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "konne",
        answertext : "learn"
      },

      card42 = {
        card: 42,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "koude",
        answertext : "could"
      },

      card43 = {
        card: 43,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "kynde",
        answertext : "nature"
      },

      card44 = {
        card: 44,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "lasse",
        answertext : "less"
      },

      card45 = {
        card: 45,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "le (e) ve",
        answertext : "dear"
      },

      card46 = {
        card: 46,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "lite",
        answertext : "little"
      },

      card47 = {
        card: 47,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "maistow",
        answertext : "may you"
      },

      card48 = {
        card: 48,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "make",
        answertext : "mate"
      },

      card49 = {
        card: 49,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "mo",
        answertext : "more"
      },

      card50 = {
        card: 50,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "moot",
        answertext : "must"
      },

      card51 = {
        card: 51,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "morewe",
        answertext : "morrow"
      },

      card52 = {
        card: 52,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "mowe",
        answertext : "may"
      },

      card53 = {
        card: 53,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "muche",
        answertext : "much"
      },

      card54 = {
        card: 54,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nam",
        answertext : "am not"
      },

      card55 = {
        card: 55,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "namoore",
        answertext : "no more"
      },

      card56 = {
        card: 56,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nas",
        answertext : "was not"
      },

      card57 = {
        card: 57,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nat",
        answertext : "not"
      },

      card58 = {
        card: 58,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nathelees",
        answertext : "nevertheless"
      },

      card59 = {
        card: 59,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ne",
        answertext : "not"
      },

      card60 = {
        card: 60,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nere",
        answertext : "were not"
      },

      card61 = {
        card: 61,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nolde",
        answertext : "would not"
      },

      card62 = {
        card: 62,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nonys",
        answertext : "occasion"
      },

      card63 = {
        card: 63,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "noon",
        answertext : "none"
      },

      card64 = {
        card: 64,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "noot",
        answertext : "know not"
      },

      card65 = {
        card: 65,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nyce",
        answertext : "foolish"
      },

      card66 = {
        card: 66,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "nys",
        answertext : "is not"
      },

      card67 = {
        card: 67,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "o, oo, on, oon, that oon",
        answertext : "one"
      },

      card68 = {
        card: 68,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "pardee",
        answertext : "certainly"
      },

      card69 = {
        card: 69,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "quod",
        answertext : "said"
      },

      card70 = {
        card: 70,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "rathe",
        answertext : "early"
      },

      card71 = {
        card: 71,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "rede",
        answertext : "read"
      },

      card72 = {
        card: 72,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "seistow",
        answertext : "you say"
      },

      card73 = {
        card: 73,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "sely",
        answertext : "simple"
      },

      card74 = {
        card: 74,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "seyde",
        answertext : "said"
      },

      card75 = {
        card: 75,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "seye",
        answertext : "say"
      },

      card76 = {
        card: 76,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "shaltow",
        answertext : "you shall"
      },

      card77 = {
        card: 77,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "sikerly",
        answertext : "certainly"
      },

      card78 = {
        card: 78,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "sith",
        answertext : "since"
      },

      card79 = {
        card: 79,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "somdel",
        answertext : "somewhat"
      },

      card80 = {
        card: 80,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "sothe",
        answertext : "truth"
      },

      card81 = {
        card: 81,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "swich",
        answertext : "such"
      },

      card82 = {
        card: 82,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "syn",
        answertext : "since"
      },

      card83 = {
        card: 83,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "thilke",
        answertext : "this"
      },

      card84 = {
        card: 84,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "tho",
        answertext : "those"
      },

      card85 = {
        card: 85,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "tweye",
        answertext : "two"
      },

      card86 = {
        card: 86,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "unnethe",
        answertext : "scarcely"
      },

      card87 = {
        card: 87,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "verray",
        answertext : "true"
      },

      card88 = {
        card: 88,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "wene",
        answertext : "think"
      },

      card89 = {
        card: 89,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "whylom",
        answertext : "once"
      },

      card90 = {
        card: 90,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "wight",
        answertext : "person"
      },

      card91 = {
        card: 91,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "yaf",
        answertext : "gave"
      },

      card92 = {
        card: 92,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ycleped",
        answertext : "named"
      },

      card93 = {
        card: 93,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ye",
        answertext : "eye"
      },

      card94 = {
        card: 94,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "yeve",
        answertext : "give"
      },

      card95 = {
        card: 95,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ynogh",
        answertext : "enough"
      },

      card96 = {
        card: 96,
        wordtype: "General Words",
        picture : "https://imgur.com/4r5UdHH.png",
        word: "ywis",
        answertext : "indeed"
      },

      card97 = {
        card: 97,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "asterte",
        answertext : "escape"
      },

      card98 = {
        card: 98,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "brydel",
        answertext : "reins"
      },

      card99 = {
        card: 99,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "chere",
        answertext : "face"
      },

      card100 = {
        card: 100,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "despit",
        answertext : "disdain"
      },

      card101 = {
        card: 101,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "gentil",
        answertext : "noble"
      },

      card102 = {
        card: 102,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "hente",
        answertext : "seize"
      },

      card103 = {
        card: 103,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "lystes",
        answertext : "jousting"
      },

      card104 = {
        card: 104,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "maugre",
        answertext : "despite"
      },

      card105 = {
        card: 105,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "mottelee",
        answertext : "multi-colored"
      },

      card106 = {
        card: 106,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "parfit",
        answertext : "perfect"
      },

      card107 = {
        card: 107,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "pyne",
        answertext : "pain"
      },

      card107 = {
        card: 107,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "socour",
        answertext : "succor"
      },

      card108 = {
        card: 108,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "sote",
        answertext : "sweet-smelling"
      },

      card109 = {
        card: 109,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "sterve",
        answertext : "die"
      },

      card110 = {
        card: 110,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "steven",
        answertext : "sound"
      },

      card111 = {
        card: 111,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "trew",
        answertext : "true"
      },

      card112 = {
        card: 112,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "weylaway",
        answertext : "alas"
      },

      card113 = {
        card: 113,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "waymentyng",
        answertext : "lamentation"
      },

      card114 = {
        card: 114,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "wepen",
        answertext : "weapon"
      },

      card115 = {
        card: 115,
        wordtype: "Knight's Tale",
        picture : "https://imgur.com/5uU6wXt.png",
        word: "wod",
        answertext : "mad"
      },

      card116 = {
        card: 116,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "grucche",
        answertext : "complain"
      },

      card117 = {
        card: 117,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "camus nose",
        answertext : "pug nose"
      },

      card118 = {
        card: 118,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "capul",
        answertext : "horse"
      },

      card119 = {
        card: 119,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "cake",
        answertext : "loaf of bread"
      },

      card120 = {
        card: 120,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "ilhayl",
        answertext : "bad luck"
      },

      card121 = {
        card: 121,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "warderere",
        answertext : "look out behind"
      },

      card122 = {
        card: 122,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "herberwe",
        answertext : "lodging"
      },

      card123 = {
        card: 123,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "ese",
        answertext : "food"
      },

      card124 = {
        card: 124,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "yexeth",
        answertext : "belches"
      },

      card125 = {
        card: 125,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "fnorteth",
        answertext : "snorts"
      },

      card126 = {
        card: 126,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "rowtyng",
        answertext : "snoring"
      },

      card127 = {
        card: 127,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "pyled",
        answertext : "bald"
      },

      card128 = {
        card: 128,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "poke",
        answertext : "bag"
      },

      card129 = {
        card: 129,
        wordtype: "Reeve's Tale",
        picture : "https://imgur.com/byoyoBn.png",
        word: "throte-bolle",
        answertext : "Adam\’s apple"
      },

      card130 = {
        card: 130,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "abroche",
        answertext : "open"
      },

      card131 = {
        card: 131,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "auctoritee",
        answertext : "authority"
      },

      card132 = {
        card: 132,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "bishrewe",
        answertext : "curse"
      },

      card133 = {
        card: 133,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "chaffre",
        answertext : "trade"
      },

      card134 = {
        card: 134,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "chepe",
        answertext : "buy"
      },

      card135 = {
        card: 135,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "costage",
        answertext : "expense"
      },

      card136 = {
        card: 136,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "engendrure",
        answertext : "procreation"
      },

      card137 = {
        card: 137,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "geste",
        answertext : "history"
      },

      card138 = {
        card: 138,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "glose",
        answertext : "interpret"
      },

      card139 = {
        card: 139,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "gossib",
        answertext : "close friend"
      },

      card140 = {
        card: 140,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "hende",
        answertext : "courteous"
      },

      card141 = {
        card: 141,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "kyndely",
        answertext : "naturally"
      },

      card142 = {
        card: 142,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "maydenhede",
        answertext : "virginity"
      },

      card143 = {
        card: 143,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "mete",
        answertext : "dream"
      },

      card144 = {
        card: 144,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "pleyne",
        answertext : "complain"
      },

      card145 = {
        card: 145,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "purveyance",
        answertext : "foresight"
      },

      card146 = {
        card: 146,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "shende",
        answertext : "destroy"
      },

      card147 = {
        card: 147,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "soveraynetee",
        answertext : "sovereignty"
      },

      card148 = {
        card: 148,
        wordtype: "Wife of Bath's Prologue",
        picture : "https://imgur.com/pCpRDsX.png",
        word: "waxe",
        answertext : "grow"
      },

      card149 = {
        card: 149,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "avantour",
        answertext : "boaster"
      },

      card150 = {
        card: 150,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "biknew",
        answertext : "confesses"
      },

      card151 = {
        card: 151,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "catel",
        answertext : "property"
      },

      card152 = {
        card: 152,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "chuk",
        answertext : "cluck"
      },

      card153 = {
        card: 153,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "gargat",
        answertext : "throat"
      },

      card154 = {
        card: 154,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "keen",
        answertext : "cows"
      },

      card155 = {
        card: 155,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "losengeour",
        answertext : "flatterer"
      },

      card156 = {
        card: 156,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "pyned",
        answertext : "tortured"
      },

      card157 = {
        card: 157,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "recche",
        answertext : "reckon"
      },

      card158 = {
        card: 158,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "steven",
        answertext : "voice"
      },

      card159 = {
        card: 159,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "sweven",
        answertext : "dream"
      },

      card160 = {
        card: 160,
        wordtype: "Nun’s Priest’s Prologue and Tale",
        picture : "https://imgur.com/obzDMFm.png",
        word: "woned",
        answertext : "dwelled"
      },

      card161 = {
        card: 161,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "passioun",
        answertext : "suffering"
      },

      card162 = {
        card: 162,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "herye",
        answertext : "praise"
      },

      card163 = {
        card: 163,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "honestee",
        answertext : "chastity"
      },

      card164 = {
        card: 164,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "thewes",
        answertext : "morals"
      },

      card165 = {
        card: 165,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "unwemmed",
        answertext : "undefiled"
      },

      card166 = {
        card: 166,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "clennesse",
        answertext : "purity"
      },

      card167 = {
        card: 167,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "corones",
        answertext : "crowns"
      },

      card168 = {
        card: 168,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "reneye",
        answertext : "renounce"
      },

      card169 = {
        card: 169,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "quyken",
        answertext : "give life to"
      },

      card170 = {
        card: 170,
        wordtype: "Second Nun’s Prologue and Tale",
        picture : "https://imgur.com/VdxVYwP.png",
        word: "lotynge",
        answertext : "hiding"
      },

      card171 = {
        card: 171,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "slideth",
        answertext : "slides"
      },

      card172 = {
        card: 172,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "quelle",
        answertext : "kill"
      },

      card173 = {
        card: 173,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "sublymed",
        answertext : "purified"
      },

      card174 = {
        card: 174,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "elvysshe",
        answertext : "mysterious"
      },

      card175 = {
        card: 175,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "multiplicaccioun",
        answertext : "transmutation"
      },

      card176 = {
        card: 176,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "mollificacioun",
        answertext : "softening"
      },

      card177 = {
        card: 177,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "induracioun",
        answertext : "hardening"
      },

      card178 = {
        card: 178,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "bitymes",
        answertext : "soon"
      },

      card179 = {
        card: 179,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "hals",
        answertext : "neck"
      },

      card180 = {
        card: 180,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "mortifye",
        answertext : "harden"
      },

      card181 = {
        card: 181,
        wordtype: "Canon Yeoman’s Prologue and Tale",
        picture : "https://imgur.com/wAfwLXM.png",
        word: "byjaped",
        answertext : "tricked"
      },

      card182 = {
        card: 182,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "fleen",
        answertext : "fleas"
      },

      card183 = {
        card: 183,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "queen",
        answertext : "whore"
      },

      card184 = {
        card: 184,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "hevynesse",
        answertext : "drowsiness"
      },

      card185 = {
        card: 185,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "ganeth",
        answertext : "yawns"
      },

      card186 = {
        card: 186,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "fneseth",
        answertext : "sneezes"
      },

      card187 = {
        card: 187,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "pose",
        answertext : "head cold"
      },

      card188 = {
        card: 188,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "volage",
        answertext : "foolish"
      },

      card189 = {
        card: 189,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "Cokkow",
        answertext : "cuckoo"
      },

      card190 = {
        card: 190,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "montance",
        answertext : "value"
      },

      card191 = {
        card: 191,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "rakel",
        answertext : "rash"
      },

      card192 = {
        card: 192,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "unavysed",
        answertext : "recklessly"
      },

      card193 = {
        card: 193,
        wordtype: "Manciple’s Prologue and Tale",
        picture : "https://imgur.com/hXTcYtv.png",
        word: "wantrust",
        answertext : "distrust"
      },

    ];
    for (var i = 0; i < arr.length; i++) {
        deck.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    
    //deck.push(arr[1]);
    
    };

  });