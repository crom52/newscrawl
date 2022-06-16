const ReactionButtons = (() => {
  let reactionButtonsComp = {
    rows: [
      {
        view: 'toolbar',
        id: 'reactionButtons',
        paddingY: 2,
        height: 34,
        cols: [
          {
            id: 'likeBtn',
            view: 'button',
            type: 'image',
            image: 'https://cdn-icons-png.flaticon.com/512/686/686308.png',
            width: 50,
          },
          {
            id: 'dislikeBtn',
            view: 'button',
            type: 'image',
            image: 'https://cdn-icons-png.flaticon.com/512/2717/2717402.png',
            width: 50,
          },
          {
            id: 'shareBtn',
            view: 'button',
            type: 'image',
            image: 'https://cdn-icons-png.flaticon.com/512/1828/1828959.png',
            width: 50,
          },
        ],
      },
      { height: 10 },
    ],
  };
  const render = () => {
    return webix.ui(reactionButtonsComp);
  };
  const getComponent = () => {
    return reactionButtonsComp;
  };
  return {
    getComponent,
  };
})();
