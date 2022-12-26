//const workoutService = require('../services/workoutService');
const workoutService = require('../services').workoutService;
workoutController = {};

workoutController.getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: "sucesss", data: allWorkouts });
}

workoutController.getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout(req.params.workoutId);
    res.send(`Get workouts ${req.params.workoutId}`);
}

workoutController.createNew = (req, res) => {
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }

    const createWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "sucesss", data: createWorkout });

}

workoutController.updateOneWorkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send("Update workout");
}

workoutController.deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`);
}

module.exports = workoutController;
