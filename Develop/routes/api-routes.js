const Workout = require("../models/workoutModel.js");

module.exports = function (app) {

    // //POST route to Add new exercises to a new workout plan.
    app.post("/api/workouts", async (req, res) => {

        try {
            const data = await Workout.create({});
            res.json(data);

        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    });

    //GET route for a previous workout plan.
    app.get("/api/workouts", async (req, res) => {

        try {
            const workouts = await Workout.find();
            return res.json(workouts);

        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    });

    //GET route for previous workouts range of dates
    app.get("/api/workouts/range", async (req, res) => {

        try {
            const workouts = await Workout.find();
            return res.json(workouts);

        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    });

    //PUT route to update and add exercises to a previous workout plan.
    app.put("/api/workouts/:id", async (req, res) => {

        try {
            const data = await Workout.findByIdAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } });
            return res.json(data);

        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    });

   
}