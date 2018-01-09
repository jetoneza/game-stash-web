export default (store) => ({
  path: 'dashboard',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const DashboardContainer = require('./containers/DashboardContainer').default;
      cb(null, DashboardContainer);
    }, 'dashboard');
  }
});
