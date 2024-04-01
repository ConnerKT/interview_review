[Docs](https://www.mongodb.com/docs/manual/core/views/join-collections-with-view/)

    db.employees.aggregate([
    {
        $lookup: {
        from: "departments",
        localField: "departmentId",
        foreignField: "_id",
        as: "department"
        }
    },
    {
        $unwind: "$department" 
    },
    {
        $project: { 
        "_id": 1,
        "name": 1,
        "departmentId": 1,
        "department": { "_id": 1, "name": 1 }
        }
    }
    ])

I built out an example using guides on how I would perform the situation I was provided in the interview.