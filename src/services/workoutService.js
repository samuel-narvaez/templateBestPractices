const Workout = require("../database/Workout");
const { v4: uuid } = require("uuid");

workoutService = {};

workoutService.getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
}

workoutService.getOneWorkout = () => {
    
    return ;
}

workoutService.createNew = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleDateString("en-US", {timezone : "UTC"}),
        updatedAt: new Date().toLocaleDateString("en-US", {timezone : "UTC"})
    }
    const createdWorkout = Workout.createWorkout(workoutToInsert);
    return createdWorkout;
}

workoutService.updateOneWorkout = () => {
    
    return ;
}

workoutService.deleteOneWorkout = () => {
    
    return ;
}

module.exports = workoutService;