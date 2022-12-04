
const Pitch=require('../model/pitchmodel')
const Investor=require('../model/investorModel')

exports.createPitch=async(req,res)=>{
    
    console.log("helllo")
    const newPitch=await Pitch.create(req.body)
    console.log("hep")
    try {
        res.status(200).json({
            id:newPitch._id
        })
        
    } catch (error) {
        res.status(400)
    }
}

exports.getPitches=async(req,res)=>{
    try {
        const postPitches = await Pitch.find().sort({createdAt:-1}).populate('offers');
        res.status(200).json(postPitches);
    } catch (error) {
        res.status(400)
    }
}

exports.getOnePitch=async(req,res)=>{
    const id=req.params.id
    try {
        const pitch = await Pitch.findById(id).populate('offers');
        if (!pitch) {
            res.status(400);
            throw new error("Pitch not exits")
        }
        res.status(200).json({
            id:pitch._id,
            entrepreneur:pitch.entrepreneur,
            pitchTitle:pitch.pitchTitle,
            pitchIdea:pitch.pitchIdea,
            askAmount:pitch.askAmount,
            equity:pitch.equity,
            offers:pitch.offers,

        });
    } catch (error) {
        res.status(400)
    }
}

exports.createOfferByInvestor=async(req,res)=>{
    const id=req.params.id
    try {
        const pitch = await Pitch.findById(id);
        if (!pitch) {
            return res.status(404).json({
                message: 'Pitch not found',
            })
        }

        const offer = req.body;
        const newOffer = await Investor.create(offer)
        
        pitch.offers.push(newOffer);
        pitch.save();
        res.status(200).json({
            id: newOffer._id,
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

