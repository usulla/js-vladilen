"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipRevers = Membership[2];
console.log(membership);
console.log(membershipRevers);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "Vk";
    SocialMedia["FB"] = "Facebook";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.FB;
console.log(social);
