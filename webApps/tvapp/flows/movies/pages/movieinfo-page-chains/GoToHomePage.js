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

  class GoToHomePage extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.homepage 
     */
    async run(context, { homepage }) {
      const { $page, $flow, $application } = context;

      await Actions.openUrl(context, {
        url: homepage,
        windowName: '_blank',
      });
    }
  }

  return GoToHomePage;
});
