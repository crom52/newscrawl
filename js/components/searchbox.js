const SearchBox = (() => {
  let searchBoxComp = {
    view: 'search',
    keyPressTimeout: 300,
    placeholder: 'Search ...',
    on: {
      onEnter: function () {
        searchByTitle(this.getValue() || '');
      },
      onSearchIconClick: function () {
        searchByTitle(this.getValue() || '');
      },
      onTimedKeyPress: function () {
        searchByTitle(this.getValue() || '');
      },
    },
  };
  const getComponent = () => {
    return searchBoxComp;
  };
  const render = () => {
    return webix.ui(searchBoxComp);
  };

  const searchByTitle = (title) => {
    let newList = webix.copy(NEWS_LIST);
    if (!title) return NewsList.loadNewsList(); //Load All

    newListAfterFilter = newList.filter((el) =>
      el.title.toLowerCase().includes(title.toLowerCase())
    );
    $$('newsList').clearAll();
    $$('newsList').parse(newListAfterFilter);
    $$('newsList').refresh();
  };
  return {
    getComponent,
    render,
  };
})();
