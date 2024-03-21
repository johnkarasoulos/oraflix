define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class GoToMovieInfo extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { key, index, current }) {
      const { $page, $flow, $application } = context;

      const navigateToPageMovieinfoResult = await Actions.navigateToPage(context, {
        page: 'movieinfo',
        params: {
          parentPage: 'movies-start',
          rowIndex: key,
          bidirectionalNavigation: false,
        },
      });
    }
  }

  return GoToMovieInfo;
});
