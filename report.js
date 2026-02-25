const unwind = require("json2csv/lib/transforms/unwind")

db.courses.find()

db.reports.aggregate([
    { $lookup: {
            from: "modules",
            localField: "_id",
            foreignField: "courcesId",
            as: "modules"
        }
    },
    {$unwind: "$modules"},
    {   
        $project: {
            id:0,
            courseTitle=1,
            module:
])


db.enrollnents.aggregate([
    { $lookup: {
            from: "users",
            localField: "_Id",
            foreignField: "_id",
            as: "title",
    $lookup: {
            from: "courses",
            localField: "courseId",
            foreignField: "_id",
            as: "course"
        }
    },
    $unwind: {
        
    }

    