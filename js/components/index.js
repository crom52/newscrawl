webix.ready(function () {
  Topbar.render();
  renderBody();
});

const renderBody = () => {
  let sidebarMenuLeft = LeftMenu.getComponent();
  let newsListLayout = NewsList.getComponent();
  let newsDetailLayout = NewsDetails.getComponent();
  let layout = {
    container: 'aggregatorLayout',
    rows: [
      {
        id: 'layout',
        borderless: true,

        cols: [
          sidebarMenuLeft,
          newsListLayout,
          { width: 20 },
          newsDetailLayout,
          { width: 20 },
        ],
      },
      { height: 10 },
    ],
  };
  webix.ui(layout);
};
