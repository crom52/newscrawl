const LeftMenu = (() => {
  let leftMenuComp = {
    view: 'sidebar',
    id: 'sideMenuLeft',
    width: 200,
    data: [
      {
        id: 'news',
        icon: 'mdi mdi-view-list',
        value: 'News',
      },
      {
        id: 'dashboard',
        icon: 'mdi mdi-view-dashboard',
        value: 'Dashboard',
      },
    ],
  };
  const getComponent = () => {
    return leftMenuComp;
  };
  const render = () => {
    return webix.ui(leftMenuComp);
  };
  return {
    getComponent,
  };
})();
