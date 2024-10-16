

interface location {
    Id: number
    Name: string,
    Type: string,
    Leader: string,
    BadgeNum: number,
    link: string
}

interface event {
    Id: number,
    Title: string,
    Leader: string,
    Order: number,
    Link: string
}

export const locations: location[] = [
    {
        Id: 1,
        Name: "Turffield",
        Type: "Grass",
        Leader: "Milo",
        BadgeNum: 1,
        link: "https://www.serebii.net/pokearth/maps/galar/44.jpg"
    },
    {
        Id: 2,
        Name: "Hulbury",
        Type: "Water",
        Leader: "Nessa",
        BadgeNum: 2,
        link: "https://www.serebii.net/pokearth/maps/galar/28.jpg"
    },
    {
        Id: 3,
        Name: "Motostoke",
        Type: "Fire",
        Leader: "Kabu",
        BadgeNum: 3,
        link: "https://www.serebii.net/pokearth/maps/galar/31.jpg"
    },
    {
        Id: 4,
        Name: "Stow-on-side",
        Type: "Fighting",
        Leader: "Bea",
        BadgeNum: 4,
        link: "https://www.serebii.net/pokearth/maps/galar/43.jpg"
    },
    {
        Id: 5,
        Name: "Ballonlea",
        Type: "Fairy",
        Leader: "Opal",
        BadgeNum: 5,
        link: "https://www.serebii.net/pokearth/maps/galar/12.jpg"
    },
    {
        Id: 6,
        Name: "Circhester",
        Type: "Ice",
        Leader: "Gordie",
        BadgeNum: 6,
        link: "https://www.serebii.net/pokearth/maps/galar/15.jpg"
    },
    {
        Id: 7,
        Name: "Spikemuth",
        Type: "Dark",
        Leader: "Piers",
        BadgeNum: 7,
        link: "https://www.serebii.net/pokearth/maps/galar/41.jpg"
    },
    {
        Id: 8,
        Name: "Hammerlocke",
        Type: "Dragon",
        Leader: "Raihan",
        BadgeNum: 8,
        link: "https://www.serebii.net/pokearth/maps/galar/26.jpg"
    }
]

export const events: event[] = [
    {
        Id: 1,
        Title: "Turffield Gym Challenge",
        Leader: "Milo",
        Order: 1,
        Link: "https://www.serebii.net/pokearth/maps/galar/44-gym.jpg"
    },
    {
        Id: 2,
        Title: "Hulbury Gym Challenge",
        Leader: "Nessa",
        Order: 2,
        Link: "https://www.serebii.net/pokearth/maps/galar/28-gym.jpg"
    },
    {
        Id: 3,
        Title: "Motostoke Gym Challenge",
        Leader: "Kabu",
        Order: 3,
        Link: "https://www.serebii.net/pokearth/maps/galar/31-gym.jpg"
    },
    {
        Id: 4,
        Title: "Stow-on-side Gym Challenge",
        Leader: "Bea",
        Order: 4,
        Link: "https://www.serebii.net/pokearth/maps/galar/43-gym.jpg"
    },
    {
        Id: 5,
        Title: "Ballonlea Gym Challenge",
        Leader: "Opal",
        Order: 5,
        Link: "https://www.serebii.net/pokearth/maps/galar/12-gym.jpg"
    },
    {
        Id: 6,
        Title: "Circhester Gym Challenge",
        Leader: "Gordie",
        Order: 6,
        Link: "https://www.serebii.net/pokearth/maps/galar/15-gym.jpg"
    },
    {
        Id: 7,
        Title: "Spikemuth Gym Challenge",
        Leader: "Piers",
        Order: 7,
        Link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dtDBZf1hEDLB8jJglE3S1fl5ms9a7DxjRw&s"
    },
    {
        Id: 8,
        Title: "Hammerlocke Gym Challenge",
        Leader: "Raihan",
        Order: 8,
        Link: "https://www.serebii.net/pokearth/maps/galar/26-gym.jpg"
    },
    {
        Id: 9,
        Title: "Wyndon Champion Match",
        Leader: "Leon",
        Order: 9,
        Link: "https://www.serebii.net/pokearth/maps/galar/49-pokemonleaguehq.jpg"
    }           
]