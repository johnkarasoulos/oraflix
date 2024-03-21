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

  class MovieCast extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const navigateToPageMoviesResult = await Actions.navigateToPage(context, {
        page: 'movies-',
        params: {
          MovieTitle: $page.variables.getMovieMovieId.title,
          movieId: $page.variables.rowIndex,
        },
      });
    }
  }

  return MovieCast;
});
