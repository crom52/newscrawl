const PopupNewsReference = (() => {
  let popupComp = {
    view: 'window',
    modal: true,
    move: true,
    id: 'popupNews',
    position: 'center',
    on: {
      onBlur: function () {
        hidePopup();
      },
    },
    head: {
      view: 'toolbar',
      cols: [
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-close',
          align: 'right',
          height: 30,
          width: 30,
          id: 'closePopupBtn',
          on: {
            onItemClick: function () {
              hidePopup();
            },
          },
        },
      ],
    },
    body: {
      view: 'form',
      rows: [
        {
          view: 'iframe',
          id: 'newsFrame',
          src: '',
        },
      ],
      width: 1200,
      height: 500,
    },
  };
  const getComponent = () => {
    return popupComp;
  };
  const render = () => {
    return webix.ui(popupComp);
  };
  const showPopup = () => {
    if ($$('popupNews')) {
      $$('popupNews').show();
    }
  };
  const hidePopup = () => {
    if ($$('popupNews')) {
      $$('popupNews').hide();
    }
  };
  const openPopupNewsByUrl = async (url) => {
    openPopupBrowser(url);
    // await openModalIframe(url);
    // if ($('#main-frame-error') && $$('popupNews').isVisible()) {
    //   hidePopup();
    //   openPopupBrowser(url);
    // }
  };
  const openModalIframe = async (url) => {
    $$('newsFrame').src_setter(url);
    showPopup();
  };
  const openPopupBrowser = (url) => {
    newWindow = window.open(url, '', 'height=600,width=1000 left=300,top=200');
    if (window.focus) {
      newWindow.focus();
    }
  };
  return {
    render,
    getComponent,
    openPopupNewsByUrl,
  };
})();
