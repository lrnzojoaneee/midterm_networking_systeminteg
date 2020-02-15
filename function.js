function all_mask(slash){
var mask_ip=[];
var binMask8;
var first=(slash>8 ? 8:slash);
var second=(slash>16 ? 8:(slash>8 ? slash-8:0));
var third=(slash>24 ? 8:(slash>16 ? slash-16:0));
var fourth=(slash==32 ? 8:(slash>24 ? slash-24:0));
mask_ip[0]=binMask8(first);
mask_ip[1]=binMask8(second);
mask_ip[2]=binMask8(third);
mask_ip[3]=binMask8(fourth);

return mask_ip;
}

//ico, lorenzo, saludes
