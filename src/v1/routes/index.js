const workoutRoutes = require('./workoutRoutes');

module.exports = app => {
    app.use('/v1/workout', workoutRoutes);
}