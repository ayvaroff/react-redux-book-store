const module = process.env.NODE_ENV === 'production' ? require('./Root.prod') : require('./Root.dev');
export default module.default;