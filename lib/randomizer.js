
// function test() {
//     let groups = [
//         {
//             group: 'Alverson',
//             names: [
//                 'Claire',
//                 'Warren',
//                 'Chris',
//                 'Jan',
//                 'Kate',
//                 'Hadrian',
//             ],
//         },
//         {
//             group: 'Nazir',
//             names: [
//                 'Hannah',
//                 'Alia',
//                 'Karen',
//                 'Faisal',
//                 'Tanner',
//                 'Andres'
//             ]
//         },
//         {
//             group: 'Lezak',
//             names: [
//                 'Mimi',
//             ]
//         }
//     ]

function test() {
    let groups = [
        {
            group: 'Alverson',
            names: [
                'Claire',
                'Warren',
                'Chris',
                'Jan',
                'Kate',
            ],
        },
        {
            group: 'Lezak',
            names: [
                'Mimi',
            ]
        },
        {
            group: 'Nazir',
            names: [
                'Hannah',
                'Alia',
                'Karen',
                'Faisal',
                'Tanner',
                'Andres'
            ]
        },
        {
            group: 'Barbosa',
            names: [
                'Hadrian',
                'Andrea',
            ]
        },
        {
            group: 'Lezak',
            names: [
                'David',
                'Jen',
                'Katie',
                'Austin',
                'Emily',
                'Ryan',
                'Kendyll'
            ]
        }
    ]

    let names = [
        {
            name: 'Claire',
            group: 'Alverson',
            pulled: false
        },
        {
            name: 'Warren',
            group: 'Alverson',
            pulled: false
        },
        {
            name: 'Jan',
            group: 'Alverson',
            pulled: false
        },
        {
            name: 'Chris',
            group: 'Alverson',
            pulled: false
        },
        {
            name: 'Kate',
            group: 'Alverson',
            pulled: false
        },
        {
            name: 'Hadrian',
            group: 'Alverson',
            pulled: false
        },
        {
            name: 'Karen',
            group: 'Nazir',
            pulled: false
        },
        {
            name: 'Faisal',
            group: 'Nazir',
            pulled: false
        },
        {
            name: 'Hannah',
            group: 'Nazir',
            pulled: false
        },
        {
            name: 'Alia',
            group: 'Nazir',
            pulled: false
        },
        {
            name: 'Tanner',
            group: 'Nazir',
            pulled: false
        },
        {
            name: 'Andres',
            group: 'Nazir',
            pulled: false
        },
        // {
        //     name: 'Mimi',
        //     group: 'Lezak',
        //     pulled: false
        // }
    ]


    let dupNames = [...names]

    if (groups) {
        // check if even number of groups
        // also hav groups hold all the names
        let numNames = names.length
        let numGroups = groups.length
        if (numGroups == 2) {
            // check that the number of names in each is the same
                comp_1 = groups[0]['names'].length
                comp_2 = groups[1]['names'].length

                if (comp_1 == comp_2) {
                    console.log('here')
                    half = names.length/2
                    group_1 = names.slice(0, half)
                    group_2 = names.slice(half, names.length)
                    dupGroup_1 = [...group_1]
                    dupGroup_2 = [...group_2]
                    for (let i = 0; i < group_1.length; i++) {
                        let num = Math.floor(Math.random() * dupGroup_2.length)
                        names[i]['pulled'] = dupGroup_2[num]['name']
                        dupGroup_2.splice(num, 1)
                    }
                    for (let i = 0; i < group_2.length; i++) {
                        let num = Math.floor(Math.random() * dupGroup_1.length)
                        names[i+half]['pulled'] = dupGroup_1[num]['name']
                        dupGroup_1.splice(num, 1)
                    }
                } else {
                    console.log("poop")
                }

            } else {
                console.log('here')
                // scenar:   1   2   3   4   5   6
                // group_1:  4   4   4   4   5   6
                // group_2 : 4   4   4   3   3   5
                // group_3:  4   1   2   1   1   2
                // scenario 1: if equal numbers you have 1/2 group_1 pull from group_2 and 1/2 group_1 pull from group_3
                // scenario 2: if one extra person have the extra go first (group_3) and pull from everyone
                //      then their name is added to group they pulled from and it pulls like two groups
                // scenario 3: all equal numbers and two have the sam amount, smallest group (group_3) draws first
                //      equal amount from each group, then group_1 and group_2 draw from eachother
                // scenario 4: if adding x groups together would equal another group then do that and draw as two
                // scenario 5: in 5, one person from the same group would have to pull from the same group
                //      group_1 a random is removed 
                // 

                // group_1:  21
                // group_2:  15
                // group_3:  15
                // group_4:  12
                // group_5:  11
                // group_6:  10
                // group_7:  9
                // group_8:  8
                // group_9:  7
                // group_10:  6
                // group_11:  5

                // num groups is not even 
                // need to "make" the groups even
                // based on number of groups find the largest two
                // add remaining groups to make "two" big groups
                // if even number of people, pull like that with the least group last
                // if not even, have the large
                // [ 5, 4, 7, 10, 2 ]
                //  i = 2; j = 1
                for (let i = 0; i < groups.length; i++) {
                    console.log(i)
                    let objSum = groups[i]
                    let sum = objSum['names'].length
                    if (i > 0) {
                        console.log('test')
                        for (let j = i-1; j >= 0; j--) {
                            console.log(j)
                            let objSumComp = groups[j]
                            console.log(objSumComp)
                            let sumComp = objSumComp['names'].length
                            console.log(sumComp)
                            console.log(sum)
                            if (sumComp < sum ) {
                                // swap
                                groups[j+1] = objSumComp
                                groups[j] = objSum
                            }
    
                        }
                    }

                    
                }
                console.log(groups)


                

            //     for (let i = 0; i < names.length; i++) {
            //         console.log(i)
            //         let drawing = names[i]
            //         // need to remove n from the drawn names
            //         // if n exists temporarily remove it
            //         // if n does not exist, carry on (it has been drawn already)
            //         // randomize the number to draw
            //         // draw and add to pulled in n
            //         // remove that draw from the list
            //         // loop
            //         let num = Math.floor(Math.random() * dupNames.length)
            //         console.log(drawing['name'])
            //         console.log(dupNames[num]['name'])
            //         console.log(num)
            //         function checkNotName() {
            //             if (drawing['name'] == dupNames[num]['name']) {
            //                 num = Math.floor(Math.random() * dupNames.length)
            //                 checkNotName()
            //             } else {
            //                 return num
            //             }
            //         }

            //         function checkNotGroup() {
            //             if (drawing['group'] == dupNames[num]['group']) {
            //                 num = Math.floor(Math.random() * dupNames.length)
            //                 checkNotGroup()
            //             } else {
            //                 return num
            //             }

            //         }

            //         }

                    
            
            //         names[i]['pulled'] = dupNames[num]['name']
            //         dupNames.splice(num, 1)
            // }

        }
       
    }

    console.log(names)

}

function scrambleNames(groups, names, constraints) {
    // groups:
    // startNames: [{name: Claire; group: Alverson}]
    // contraints:

    let numNames = names.length
    let dupNames = [...names]

    if (groups) {
        let numGroups = groups.length
        if (numGroups % 2 == 0) {

        }

    } else {


        for (let i = 0; i < names.length; i++) {
            console.log(i)
            let drawing = names[i]
            // need to remove n from the drawn names
            // if n exists temporarily remove it
            // if n does not exist, carry on (it has been drawn already)
            // randomize the number to draw
            // draw and add to pulled in n
            // remove that draw from the list
            // loop
            let num = Math.floor(Math.random() * dupNames.length)
            console.log(drawing['name'])
            console.log(dupNames[num]['name'])
            console.log(num)
            while (drawing['name'] == dupNames[num]['name']) {
                num = Math.floor(Math.random() * dupNames.length)
            }
    
            names[i]['pulled'] = dupNames[num]['name']
            dupNames.splice(num, 1)
    
        }
    }



    if (constraints == groupMatch) {
        // make sure families are not matched
        for (group in groups) {
            
        }

    } else if (constraints == individualMatch) {
        // make sure certain people are not matched
    } else {

    }

    // on top of the regular constraints, need to make sure no one has a duplicate match and no one is paired with themself

    return matchedNames
}