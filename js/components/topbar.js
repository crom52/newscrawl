const Topbar = (() => {
  const render = () => {
    return webix.ui({
      view: 'toolbar',
      container: 'header',
      id: 'topbar',
      height: 70,
      //   borderless: true,
      cols: [
        {
          view: 'label',
          label: "<img src='../icon/logo.jpg' style='height:60px'>",
          width: 70,
          height: 70,
        },
        {
          view: 'label',
          label: 'Crypto Aggregator',
          align: 'left',
          id: 'brandLogo',
        },
        { width: 10 },
      ],
    });
  };
  return {
    render,
  };
})();
