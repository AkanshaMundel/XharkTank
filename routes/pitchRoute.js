const express=require('express')
const pitchController =require('../controller/pitchController')


const router=express.Router();

router.post('/',pitchController.createPitch);
router.get('/',pitchController.getPitches);
router.get('/:id',pitchController.getOnePitch);
router.post('/:id/makeOffer',pitchController.createOfferByInvestor);


module.exports= router