const Comments = (() => {
  let commentComp = {
    rows: [
      {
        view: 'comments',
        currentUser: 4,
        users: USER_LIST,
        data: COMMENT_SAMPLE,
      },
    ],
  };
  const render = async () => {
    webix.ui();
  };
  const getComponent = () => {
    return commentComp;
  };
  return {
    getComponent,
  };
})();
