
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
                'Hadrian',
            ],
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
        // {
        //     group: 'Lezak',
        //     names: [
        //         'Mimi',
        //     ]
        // }
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