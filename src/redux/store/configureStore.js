const module = process.env.NODE_ENV === 'production' ? require('./configureStore.prod') : require('./configureStore.dev');
export default module.default;