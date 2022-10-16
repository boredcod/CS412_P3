var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ps3', { firstname: 'John' });
});

let originalString = "";
router.post('/pos', function (req, res, next) {
    originalString=req.body.string;
    res.render('ps3c',
        { originalString: originalString , stringLength: originalString.length});
    console.log(originalString);
    console.log(originalString.length);
})

router.get('/name/:tagId', function (req,res,next){
    res.render('ps3d', {firstName: req.params.tagId});
})
module.exports = router;
