const express = require('express');
const router = express.Router();
const conn = require('../config/DB.js');


router.get("/show_item",function(request,response){

    let sql = `select * from beaugan`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/makeup_item",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/cleansing_item",function(request,response){

    let sql = `select * from beaugan where L_category="CLEANSING"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/body_item",function(request,response){

    let sql = `select * from beaugan where L_category="BODY"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/sun_item",function(request,response){

    let sql = `select * from beaugan where L_category="SUN"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/other_item",function(request,response){

    let sql = `select * from beaugan where L_category =""`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})


router.get("/skin_item_LIPCARE",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="LIPCARE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_AMPOULE_SERUM",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="AMPOULE/SERUM"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_TONER",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="TONER"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_CREAM",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="CREAM"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_FACE",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="FACE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/skin_item_LOTION",function(request,response){

    let sql = `select * from beaugan where L_category="SKINCARE" and S_category="LOTION"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})


router.get("/makeup_item_BLUSH",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="BLUSH"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})


router.get("/makeup_item_EYE",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="EYE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})


router.get("/makeup_item_FACE",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="FACE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/makeup_item_LIPS",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="LIPS"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})



router.get("/makeup_item_LIPCARE",function(request,response){

    let sql = `select * from beaugan where L_category="MAKEUP" and S_category="LIPCARE"` ;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})


router.get("/cleansing_item_FACE",function(request,response){

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="FACE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/cleansing_item_HAIR",function(request,response){

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="HAIR"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})


router.get("/cleansing_item_BODY",function(request,response){

    let sql = `select * from beaugan where L_category="CLEANSING" and S_category="BODY"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})



router.get("/body_item_LOTION",function(request,response){

    let sql = `select * from beaugan where L_category="BODY" and S_category="LOTION"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})


router.get("/body_item_FACE",function(request,response){

    let sql = `select * from beaugan where L_category="BODY" and S_category="FACE"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})



router.get("/body_item_PERFUME",function(request,response){

    let sql = `select * from beaugan where L_category="BODY" and S_category="PERFUME"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})


router.get("/athe",function(request,response){

    let sql = `select * from beaugan where brand="athe"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/melixir",function(request,response){

    let sql = `select * from beaugan where brand="melixir"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})

router.get("/LUSH",function(request,response){

    let sql = `select * from beaugan where brand="LUSH"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})
router.get("/DearDahlia",function(request,response){

    let sql = `select * from beaugan where brand="DearDahlia"`;

    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("items",{
                rows : rows
            })
        } else {
            console.log(err);
        }
    })

})
module.exports = router;