
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('ticket'), 3000 })
    })

    let ticket
    try {
        ticket = await promiseWifeBringingTicks;
        const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

        const addButter = new Promise((resolve, reject) => resolve(`butter`));

        const getColdDrinks = new Promise((resolve, reject) => resolve('cold drinks'))

        let [popcorn, butter, coke] = await Promise.all([getPopcorn, addButter, getColdDrinks])
        console.log(`${popcorn},${butter},${coke}`)

    } catch (e) {
        ticket = 'sad face';
    }

    // console.log(`wife: I have the ${ticket}`);
    // console.log('husband: We should go in');
    // console.log('wife: No I am hungry');

    // let popcorn=await getPopcorn;

    // console.log(`husband: I got some ${popcorn}`);
    // console.log('husband: We should go in');
    // console.log('wife: I need butter on my popcorn');

    // let butter=await addButter;

    // console.log(`husband: I got some ${butter}`);
    // console.log('husband: Anything else darling?');
    // console.log('wife: Lets go we are getting late');
    // console.log('husband: Thank you for the reminder *grins*');

    // let coldrink = await getColdDrinks;
    // console.log(`husband: I got some ${coldrink}`);
    // console.log('wife: Lets go in finally');

    return ticket;
}

preMovie().then((m) => console.log(`person 3 shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
