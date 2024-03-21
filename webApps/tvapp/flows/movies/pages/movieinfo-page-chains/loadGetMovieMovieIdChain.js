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

  class loadGetMovieMovieIdChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.movieId 
     */
    async run(context, { movieId }) {
      const { $page, $flow, $application } = context;

      // Test valid input
      if (true && movieId !== undefined) {
        // Clears getMovieMovie_id data the variable holds
        await Actions.resetVariables(context, {
          variables: [
            '$page.variables.getMovieMovieId',
          ],
        }, { id: 'resetGetMovieMovieIdData' });

        // Initiates REST call loading getMovieMovie_id data
        const callRestGetGetMovieMovieIdResult = await Actions.callRest(context, {
          endpoint: 'MovieInfo/getMovieMovie_id',
          responseType: 'getMovieMovieIdResponse',
          uriParams: {
            'movie_id': movieId,
          },
        }, { id: 'loadGetMovieMovieId' });

        if (callRestGetGetMovieMovieIdResult.ok) {
          // Assigns data loaded by the REST call to the getMovieMovie_id variable
          $page.variables.getMovieMovieId = callRestGetGetMovieMovieIdResult.body;
        } else {
          // Shows an error message informing about data load failure
          await Actions.fireNotificationEvent(context, {
            summary: 'Could not load data',
            message: `Could not load data: status ${callRestGetGetMovieMovieIdResult.status}`,
          }, { id: 'fireErrorNotification' });
        }
      }
    }
  }

  return loadGetMovieMovieIdChain;
});
