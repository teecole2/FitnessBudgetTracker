const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            required: "Please select workout type",
            trim: true
        },
        name: {
            type: String,
            required: "Enter exercise name",
            trim: true
        },
        duration: {
            type: Number,
            required: "Enter duration in minutes",
            trim: true
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }]

   
},
    {
        toJSON: {
            virtuals: true
        }
    }
);


WorkoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;