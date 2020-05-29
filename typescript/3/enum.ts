enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipRevers = Membership[2]
console.log(membership)
console.log(membershipRevers)

enum SocialMedia {
    VK = 'Vk',
    FB = 'Facebook'
}

const social = SocialMedia.FB
console.log(social)