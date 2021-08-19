var players = [
    {
        name: "Ikkei Ukai",
        src: "/images/Ikkei.png",
        position: "Coach",
    },
    {
        name: "Keishin Ukai",
        src: "/images/Ukai.png",
        position: "Coach",
    },
    {
        name: "Ittetsu Takeda",
        src: "/images/Takeda.png",
        position: "Faculty Advisor",
    },
    {
        name: "Kiyoko Shimizu",
        src: "/images/Kiyoko.png",
        position: "Manager",
    },
    {
        name: "Hitoka Yachi",
        src: "/images/Yachi.png",
        position: "Manager",
    },
    {
        name: "Daichi Sawamura",
        src: "/images/Daichi.png",
        position: "Captain / Wing Spiker / Opposite Hitter",
    },
    {
        name: "Kōshi Sugawara",
        src: "/images/Sugawara.png",
        position: "Vice-Captain / Setter / Pinch Server",
    },
    {
        name: "Asahi Azumane",
        src: "/images/Asahi.png",
        position: "Wing Spiker / Outside Hitter / Ace",
    },
    {
        name: "Yū Nishinoya",
        src: "/images/Nishinoya.png",
        position: "Libero",
    },
    {
        name: "Ryūnosuke Tanaka",
        src: "/images/Tanaka.png",
        position: "Wing Spiker / Outside Hitter",
    },
    {
        name: "Chikara Ennoshita",
        src: "/images/Ennoshita.png",
        position: "Wing Spiker / Outside Hitter",
    },
    {
        name: "Hisashi Kinoshita",
        src: "/images/Kinoshita.png",
        position: "Wing Spiker / Pinch Server",
    },
    {
        name: "Kazuhito Narita",
        src: "/images/Narita.png",
        position: "Middle Blocker",
    },
    {
        name: "Tobio Kageyama",
        src: "/images/Kageyama.png",
        position: "Setter",
    },
    {
        name: "Shōyō Hinata",
        src: "/images/Hinata.png",
        position: "	Middle Blocker / Decoy",
    },
    {
        name: "Kei Tsukishima",
        src: "/images/Tsukishima.png",
        position: "Middle Blocker",
    },
    {
        name: "Tadashi Yamaguchi",
        src: "/images/Yamaguchi.jpeg",
        position: "Middle Blocker / Pinch Server",
    },
    
]

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('players', { players: players });
});

module.exports = router;
