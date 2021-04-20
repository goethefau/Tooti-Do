const data = [
    {
        id: 1,
        img: "https://cdn.dribbble.com/users/3860505/screenshots/15477232/media/de8c8ab5e2660202397bbaf6ad0b0a6c.png?compress=1&resize=1600x1200",
        priority: "high",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptatem",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam delectus nisi, non qui tempore unde veritatis",
        date:"  2021-04-16 11:30",
        type: "todo",
        users: [
            {
                first_name:"John",
                second_name:"Bush",
                img: "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
            {
                first_name:"Benny",
                second_name:"Curtis",
                img: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
            {
                first_name:"Kelly",
                second_name:"Huston",
                img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
        ],
        subtasks:[
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: false
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: true
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: false
            },
        ]
    },
    {
        id: 2,
        priority: "high",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptatem",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam delectus nisi, non qui tempore unde veritatis",
        date:"  2021-04-16 11:30",
        type: "in_progress",
        users: [
            {
                first_name:"Andry",
                second_name:"Bush",
                img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
            {
                first_name:"Michael",
                second_name:"Curtis",
                img: "https://images.pexels.com/photos/270968/pexels-photo-270968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
            {
                first_name:"Marry",
                second_name:"Huston",
                img: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
        ],
        subtasks:[
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: false
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: true
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: false
            },
        ]
    },
    {
        id: 3,
        img: "https://cdn.dribbble.com/users/1774675/screenshots/15481353/media/df983dab685de519955b393755e36bd6.jpg?compress=1&resize=1600x1200",
        priority: "high",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptatem",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"  2021-04-16 11:30",
        type: "completed",
        users: [
            {
                first_name:"John",
                second_name:"Bush",
                img: "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
            {
                first_name:"Michael",
                second_name:"Curtis",
                img: "https://images.pexels.com/photos/270968/pexels-photo-270968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
            {
                first_name:"Kelly",
                second_name:"Huston",
                img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
            {
                first_name:"Marry",
                second_name:"Huston",
                img: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
        ],
        subtasks:[
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: false
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: true
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: false
            },   {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: false
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: true
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                completed: false
            },
        ]
    },
]

export default data