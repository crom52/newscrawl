const NewsList = (() => {
  let searchBox = SearchBox.getComponent();
  let newListLayout = {
    rows: [
      { height: 20 },
      searchBox,
      { height: 5 },
      {
        id: 'newsList',
        view: 'list',
        select: true,
        maxWidth: 700,
        template: ` <div class="timeAgo"> #timeAgo# mins</div> 
        <h4 class="news-title"> #title# </h4>
         `,
        type: {
          height: 100,
        },
        data: NEWS_LIST,
        on: {
          onItemClick: function (id) {
            NewsDetails.loadNewsDetail(id);
          },
          onAfterLoad: async function () {
            if (this.getFirstId()) {
              await this.select(this.getFirstId());
              NewsDetails.loadNewsDetail(this.getFirstId());
            }
          },
        },
      },
    ],
  };
  const render = () => {
    return webix.ui(newListLayout);
  };
  const getComponent = () => {
    return newListLayout;
  };

  const sortTimeAgo = async (newsList) => {
    return (newsList = newsList.sort(a, (b) => a.timeAgo - b.timeAgo));
  };

  const loadNewsList = () => {
    let newList = webix.copy(NEWS_LIST);
    $$('newsList').clearAll();
    $$('newsList').parse(newList);
    $$('newsList').refresh();
    return;
  };

  return {
    render,
    getComponent,
    loadNewsList,
  };
})();
