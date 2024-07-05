let groups = ['Alverson', 'Nazir', 'Lezak']

function test() {
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
        {
            name: 'Mimi',
            group: 'Lezak',
            pulled: false
        }
    ]


    let dupNames = [...names]

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
    console.log('end')
    console.log(names)
}

function scrambleNames(groups, names, constraints) {
    // groups:
    // startNames: [{name: Claire; group: Alverson}]
    // contraints:

    let numNames = names.length
    let dupNames = names

    if (groups) {
        let numGroups = groups.length
    } else {
        for (let i = 0; i < names.length; i++) {
            let drawing = names[i]
            // need to remove n from the drawn names
            // if n exists temporarily remove it
            // if n does not exist, carry on (it has been drawn already)
            // randomize the number to draw
            // draw and add to pulled in n
            // remove that draw from the list
            // loop
            let num = Math.floor(Math.random() * dupNames.length)
            if (drawing['name'] == dupNames[0]) {
                while (num == 0) {
                    let num = Math.floor(Math.random() * dupNames.length)
                }
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