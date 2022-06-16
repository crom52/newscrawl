const NewsDetails = (() => {
  let reactionButtons = ReactionButtons.getComponent();
  let commentsSection = Comments.getComponent();
  let newsDetailContent = {
    view: 'form',
    minHeight: 250,
    borderless: true,
    rows: [
      {
        view: 'label',
        id: 'newDetailTitle',
        css: 'newDetailTitle',
        label: '',
      },
      {
        css: 'newDetailTimeAgo',
        cols: [
          {
            view: 'icon',
            icon: 'wxi-clock',
            hidden: true,
            type: 'icon',
            id: 'clockIcon',
          },
          { id: 'newDetailTimeAgo', view: 'label', label: '' },
        ],
      },
      {
        id: 'newsDetailContent',
        css: 'newsDetailContent',
        view: 'label',
        value: '',
      },
      {
        id: 'newsDetailReferenceUrl',
        css: 'newsDetailReferenceUrl',
        referenceUrl: '',
        view: 'label',
        value: '',
        on: {
          onItemClick: function () {
            let url = $$('newsDetailReferenceUrl').config.referenceUrl;
            // PopupNewsReference.openPopupBrowser(url);
            PopupNewsReference.openPopupNewsByUrl(url);
          },
        },
      },
    ],
  };
  let newsDetailLayout = {
    view: 'layout',
    id: 'newsDetailLayout',
    on: {
      onItemClick: function () {},
    },
    rows: [
      //News Content Detail
      newsDetailContent,

      //Reaction Buttons
      reactionButtons,

      //Comments
      commentsSection,
      { height: 10 },
    ],
  };

  const render = () => {
    return webix.ui(newsDetailLayout);
  };
  const getComponent = () => {
    return newsDetailLayout;
  };
  const loadNewsDetail = (id) => {
    if (!$$('newsDetailLayout')) return;
    let newsList = webix.copy(NEWS_LIST);
    let news = newsList.find((el) => el.id == id);
    if (!news) return clearContent();

    $$('clockIcon').show();
    $$('newDetailTitle').setValue(news.title);
    $$('newDetailTimeAgo').setValue(news.timeAgo + ' mins ago');
    $$('newsDetailContent').setValue(news.content);
    $$('newsDetailReferenceUrl').setValue(news.sourceDomain);
    $$('newsDetailReferenceUrl').config.referenceUrl =
      news.referenceUrl || news.sourceDomain;
  };

  const clearContent = () => {
    $$('newDetailTitle').setValue(NO_CONTENT);
    $$('clockIcon').hide();
    $$('newDetailTimeAgo').setValue('');
    $$('newsDetailContent').setValue('');
    $$('newsDetailReferenceUrl').setValue('');
    $$('newsDetailReferenceUrl').config.referenceUrl = '';
  };

  return {
    loadNewsDetail,
    getComponent,
    render,
  };
})();
