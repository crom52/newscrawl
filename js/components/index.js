webix.ready(function () {
  Topbar.render();
  PopupNewsReference.render();
  renderBody();
  initEvent();
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

const initEvent = () => {
  $(document).on('keydown', function (event) {
    if (event.key == 'Escape') {
      let popup = $$('popupNews');
      if (popup && popup.isVisible()) {
        popup.hide();
      }
    }
  });
};
