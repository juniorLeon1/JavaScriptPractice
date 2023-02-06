let attendance = 175;
let isProfessional = false;

// if(attendance < 175) {
//     console.log(`we have room`)
// }else if(attendance = 175) {
//     console.log(`we are at capacity`)
// }else if(attendance > 175) {
//     console.log(`use the zoom link`)
// }

if(attendance < 175 && attendance > 0) {
    console.log('we have room');
} else if (attendance > 175 || isProfessional === false) {
    console.log(`use the zoom link`);
}