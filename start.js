var express = require('express');
var mongodb = require('mongodb').MongoClient;
var fs = require('fs');
var nodemailer = require('nodemailer');
var formidable = require('formidable');
var a = "mongodb+srv://hussein:harb123@cluster0.vnhwz.mongodb.net/cmps278?retryWrites=true&w=majority"
var url = require('url');
var app = express();
app.use(express.static('views'))
const path = require('path');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'))

mongodb.connect(a, async function(err,client) {
let db= client.db();
let allcolectionplant= await db.collection('plant').find().toArray();
let x = JSON.stringify(allcolectionplant)




if (!fs.existsSync('views/saveddatabase.json')) {
    fs.writeFile('views/saveddatabase.json',JSON.stringify(allcolectionplant), function (err) {
        });
    
  }


app.get('/', async function(req, res) {


    let plantcollection = await db.collection('plant').find().toArray();
    let urlquery = url.parse(req.url,true).query;
    res.render('homepage',{plants: plantcollection}); 

})








app.get('/imagegallary',  async function(req, res) {
    let plantcollection = await db.collection('plant').find().toArray();
    let urlquery = url.parse(req.url,true).query;

    if(urlquery.name =='scientific name'){
    if(urlquery.planttype)
    {    var mysort = { name: 1 };
        if(urlquery.planttype == 'All'){plantcollection = await db.collection('plant').find().sort({ scientific_name : 1 }).toArray();}
        if(urlquery.planttype == 'Groundcover'){plantcollection = await db.collection('plant').find( {planttype :"Groundcover".toLowerCase()}).sort({ scientific_name : 1 }).toArray();}
        if(urlquery.planttype == 'Lawn'){plantcollection = await db.collection('plant').find({planttype :"Lawn".toLowerCase()}).sort({ scientific_name : 1 }).toArray();}
        if(urlquery.planttype == 'Shrub'){plantcollection = await db.collection('plant').find({planttype :"Shrub".toLowerCase()}).sort({ scientific_name : 1 }).toArray();}
        if(urlquery.planttype == 'Tree'){plantcollection = await db.collection('plant').find({planttype :"Tree".toLowerCase()}).sort({ scientific_name : 1 }).toArray();}
        if(urlquery.planttype == 'Vine'){plantcollection = await db.collection('plant').find({planttype :"Vine".toLowerCase()}).sort({ scientific_name : 1 }).toArray();}
        if(urlquery.planttype == 'Cactus'){plantcollection = await db.collection('plant').find({planttype :"Cactus".toLowerCase()}).sort({ scientific_name : 1 }).toArray();}
    }

    }
    else{
        {   
        if(urlquery.planttype == 'All'){plantcollection = await db.collection('plant').find().sort({ common_name : 1 }).toArray();}
        if(urlquery.planttype == 'Groundcover'){plantcollection = await db.collection('plant').find( {planttype :"Groundcover".toLowerCase()}).sort({ common_name : 1 }).toArray();}
        if(urlquery.planttype == 'Lawn'){plantcollection = await db.collection('plant').find({planttype :"Lawn".toLowerCase()}).sort({ common_name : 1 }).toArray();}
        if(urlquery.planttype == 'Shrub'){plantcollection = await db.collection('plant').find({planttype :"Shrub".toLowerCase()}).sort({ common_name : 1 }).toArray();}
        if(urlquery.planttype == 'Tree'){plantcollection = await db.collection('plant').find({planttype :"Tree".toLowerCase()}).sort({ common_name : 1 }).toArray();}
        if(urlquery.planttype == 'Vine'){plantcollection = await db.collection('plant').find({planttype :"Vine".toLowerCase()}).sort({ common_name : 1 }).toArray();}
        if(urlquery.planttype == 'Cactus'){plantcollection = await db.collection('plant').find({planttype :"Cactus".toLowerCase()}).sort({ common_name : 1 }).toArray();}
    }

     }
     
    res.render('imagegallary',{plants: plantcollection})
})


app.get('/result', async function(req, res){

    let plantcollection = null;
    let urlquery = url.parse(req.url,true).query;     
    if(urlquery.common_name){ plantcollection = await db.collection('plant').find({common_name:String(urlquery.common_name).toLowerCase()}).toArray(); }
    if(urlquery.scientific_name){ plantcollection = await db.collection('plant').find({scientific_name:String(urlquery.scientific_name).toLowerCase()}).toArray(); }
    if(urlquery.letter){ plantcollection = await db.collection('plant').find({common_name:{$regex:"^"+String(urlquery.letter).toLowerCase()+""}}).toArray(); }

    if(!plantcollection){res.render('searchresultno')}
     else{res.render('searchresult',{plants:plantcollection});} 

})


app.get('/result2',  async function(req, res){

   let filterobject ={}
 
   let urlquery = url.parse(req.url,true).query;   
   if(urlquery.country){ let x = {country:String(urlquery.country).toLowerCase()   };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.pLanttype){ let x = {planttype:String(urlquery.pLanttype).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.light){ let x = {light:String(urlquery.light).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.soil){ let x = {soil:String(urlquery.soil).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.water){ let x = {water:String(urlquery.water).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.canopyshape){ let x = {canopyshape:String(urlquery.canopyshape).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.leafcolorgrowing){ let x = {leafcolorgrowing:String(urlquery.leafcolorgrowing).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.leafcolorchanging){ let x = {leafcolorchanging:String(urlquery.leafcolorchanging).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.flowerColor){ let x = {flowerColor:String(urlquery.flowerColor).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.fruitcolor){ let x = {fruitcolor:String(urlquery.fruitcolor).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_heatTolerance){ let x = {radio_heatTolerance:String(urlquery.radio_heatTolerance).toLowerCase() };filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_droughtTolerance){ let x = {radio_droughtTolerance:String(urlquery.radio_droughtTolerance).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_frostTolerance){ let x = {radio_frostTolerance:String(urlquery.radio_frostTolerance).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_saltTolerance){ let x = {radio_saltTolerance:String(urlquery.radio_saltTolerance).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_lifeCycle){ let x = {radio_lifeCycle:String(urlquery.radio_lifeCycle).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_growthRate){ let x = {radio_growthRate:String(urlquery.radio_growthRate).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_leafPersistance){ let x = {radio_leafPersistance:String(urlquery.radio_leafPersistance).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_scent){ let x = {radio_scent:String(urlquery.radio_scent).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_flowerScent){ let x = {radio_flowerScent:String(urlquery.radio_flowerScent).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_flowerSeason){ let x = {radio_flowerSeason:String(urlquery.radio_flowerSeason).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_flowerShowiness){ let x = {radio_flowerShowiness:String(urlquery.radio_flowerShowiness).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_fruitShowiness){ let x = {radio_fruitShowiness:String(urlquery.radio_fruitShowiness).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_fruitSeason){ let x = {radio_fruitSeason:String(urlquery.radio_fruitSeason).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_ediblePlantParts){ let x = {radio_ediblePlantParts:String(urlquery.radio_ediblePlantParts).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_fruitLeavesFlowerLitter){ let x = {radio_fruitLeavesFlowerLitter:String(urlquery.radio_fruitLeavesFlowerLitter).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_surfaceRooting){ let x = {radio_surfaceRooting:String(urlquery.radio_surfaceRooting).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_plantToxicity){ let x = {radio_plantToxicity:String(urlquery.radio_plantToxicity).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_pruningRequirements){ let x = {radio_pruningRequirements:String(urlquery.radio_pruningRequirements).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_invasivePotential){ let x = {radio_invasivePotential:String(urlquery.radio_invasivePotential).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_suceptibilityToDiseases){ let x = {radio_suceptibilityToDiseases:String(urlquery.radio_suceptibilityToDiseases).toLowerCase()};filterobject =   Object.assign(filterobject,x)}
   if(urlquery.radio_lifeSpan){ let x = {radio_lifeSpan:String(urlquery.radio_lifeSpan).toLowerCase()};filterobject =   Object.assign(filterobject,x)}

     let plantcollection = await db.collection('plant').find(filterobject).toArray(); 
    res.render('searchresult',{plants: plantcollection})
})


app.get('/result3', async function(req, res){
     let  filter = {};
     let plantcollection = null;
    let urlquery = url.parse(req.url,true).query;
    plantcollection = null;
    
if(urlquery.whichone == 'Edible plants'){ plantcollection = await db.collection('plant').find({radio_ediblePlantParts:'yes'.toLowerCase()}).toArray(); res.render('searchresult',{plants:plantcollection}); }
if(urlquery.whichone == 'need clay soil'){ plantcollection = await db.collection('plant').find({soil:'clay'.toLowerCase()}).toArray(); res.render('searchresult',{plants:plantcollection}); }
if(urlquery.whichone == 'need alot of water'){ plantcollection = await db.collection('plant').find({water:'moderate'.toLowerCase()}).toArray();  res.render('searchresult',{plants:plantcollection});}
if(urlquery.whichone == 'plants with fast GrowthRate'){ plantcollection = await db.collection('plant').find({radio_growthRate:'fast'.toLowerCase()}).toArray();  res.render('searchresult',{plants:plantcollection});}
if(urlquery.whichone == 'Plants For shade'){ plantcollection = await db.collection('plant').find({light:'shade'.toLowerCase()}).toArray();  res.render('searchresult',{plants:plantcollection});}
if(urlquery.whichone == 'Ground covers'){ plantcollection = await db.collection('plant').find({planttype:'groundedcover'.toLowerCase()}).toArray(); res.render('searchresult',{plants:plantcollection}); }
 

if(!plantcollection){res.render('searchresultno')}
})


app.get('/addordelete', async function(req,res){
    let urlquery = url.parse(req.url,true).query;
    let =  plantcollection =  db.collection('plant');
    
   
      if(urlquery.deleteoredit == "Modify")
      {plantcollection.updateOne({common_name:urlquery.plantname},{$set:{[urlquery.propertyname]:urlquery.valueofprop}})  }
    else{plantcollection.deleteOne({common_name:urlquery.plantname})}
    res.redirect(req.get('referer'));
    fs.writeFile('views/saveddatabase.json',JSON.stringify(allcolectionplant), function (err) {
        });
    
})

app.get('/addnew',  async function(req,res){
let filterobject ={}
let urlquery = url.parse(req.url,true).query;
let plants =  db.collection('plant');
if(urlquery.common_name){ let x = {common_name:urlquery.common_name};filterobject =   Object.assign(filterobject,x)}
if(urlquery.scientific_name){ let x = {scientific_name:urlquery.scientific_name};filterobject =   Object.assign(filterobject,x)}
if(urlquery.arabicname){ let x = {arabicname:urlquery.arabicname};filterobject =   Object.assign(filterobject,x)}
if(urlquery.frenchname){ let x = {frenchname:urlquery.frenchname};filterobject =   Object.assign(filterobject,x)}
if(urlquery.description){ let x = {description:urlquery.description};filterobject =   Object.assign(filterobject,x)}
if(urlquery.country){ let x = {country:urlquery.country};filterobject =   Object.assign(filterobject,x)}
if(urlquery.planttype){ let x = {planttype:urlquery.planttype};filterobject =   Object.assign(filterobject,x)}
if(urlquery.light){ let x = {light:urlquery.light};filterobject =   Object.assign(filterobject,x)}
if(urlquery.soil){ let x = {soil:urlquery.soil};filterobject =   Object.assign(filterobject,x)}
if(urlquery.water){ let x = {water:urlquery.water};filterobject =   Object.assign(filterobject,x)}
if(urlquery.canopyshape){ let x = {canopyshape:urlquery.canopyshape};filterobject =   Object.assign(filterobject,x)}
if(urlquery.leafcolorgrowing){ let x = {leafcolorgrowing:urlquery.leafcolorgrowing};filterobject =   Object.assign(filterobject,x)}
if(urlquery.leafcolorchanging){ let x = {leafcolorchanging:urlquery.leafcolorchanging};filterobject =   Object.assign(filterobject,x)}
if(urlquery.flowerColor){ let x = {flowerColor:urlquery.flowerColor};filterobject =   Object.assign(filterobject,x)}
if(urlquery.fruitcolor){ let x = {fruitcolor:urlquery.fruitcolor};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_heatTolerance){ let x = {radio_heatTolerance:urlquery.radio_heatTolerance};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_droughtTolerance){ let x = {radio_droughtTolerance:urlquery.radio_droughtTolerance};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_frostTolerance){ let x = {radio_frostTolerance:urlquery.radio_frostTolerance};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_saltTolerance){ let x = {radio_saltTolerance:urlquery.radio_saltTolerance};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_lifeCycle){ let x = {radio_lifeCycle:urlquery.radio_lifeCycle};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_growthRate){ let x = {radio_growthRate:urlquery.radio_growthRate};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_leafPersistance){ let x = {radio_leafPersistance:urlquery.radio_leafPersistance};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_scent){ let x = {radio_scent:urlquery.radio_scent};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_flowerScent){ let x = {radio_flowerScent:urlquery.radio_flowerScent};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_flowerSeason){ let x = {radio_flowerSeason:urlquery.radio_flowerSeason};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_flowerShowiness){ let x = {radio_flowerShowiness:urlquery.radio_flowerShowiness};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_fruitShowiness){ let x = {radio_fruitShowiness:urlquery.radio_fruitShowiness};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_fruitSeason){ let x = {radio_fruitSeason:urlquery.radio_fruitSeason};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_ediblePlantParts){ let x = {radio_ediblePlantParts:urlquery.radio_ediblePlantParts};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_fruitLeavesFlowerLitter){ let x = {radio_fruitLeavesFlowerLitter:urlquery.radio_fruitLeavesFlowerLitter};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_surfaceRooting){ let x = {radio_surfaceRooting:urlquery.radio_surfaceRooting};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_plantToxicity){ let x = {radio_plantToxicity:urlquery.radio_plantToxicity};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_pruningRequirements){ let x = {radio_pruningRequirements:urlquery.radio_pruningRequirements};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_invasivePotential){ let x = {radio_invasivePotential:urlquery.radio_invasivePotential};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_suceptibilityToDiseases){ let x = {radio_suceptibilityToDiseases:urlquery.radio_suceptibilityToDiseases};filterobject =   Object.assign(filterobject,x)}
if(urlquery.radio_lifeSpan){ let x = {radio_lifeSpan:urlquery.radio_lifeSpan};filterobject =   Object.assign(filterobject,x)}

res.redirect(req.get('referer'));
fs.writeFile('views/saveddatabase.json',JSON.stringify(allcolectionplant), function (err) {
    });
await plants.insertOne(filterobject);



})


app.get('/yessendemail',function(req, res){
let urlquery = url.parse(req.url,true).query;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: urlquery.email,
      pass: urlquery.password
    }
  });
  
  var mailOptions = {
    from: urlquery.email,
    to: urlquery.email,
    subject: urlquery.subject,
    company: urlquery.company,
    phone : urlquery.phone,
    comment: urlquery.comment
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


})


app.get('/myprofile', async function(req, res){
  let urlquery = url.parse(req.url,true).query;

  
let plantcollection = await db.collection('plant').find({common_name:urlquery.plantname }).toArray(); 
res.render('myprofile', {plants: plantcollection})

})






app.listen(8070);
})

