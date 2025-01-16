const shortid = require("shortid")
const URL = require('../model/url')


async function GenURL(req,res){
    const shortID = shortid();
    const body = req.body;
    if(!body?.url) return res.status(400).json({err:"Url Not Found "})
    await URL.create({
        shortId: shortID,
        ogUrl: body.url,
        vistHistory: [],
    });

    res.json({id:shortID});

}




module.exports ={
    GenURL,
    
}