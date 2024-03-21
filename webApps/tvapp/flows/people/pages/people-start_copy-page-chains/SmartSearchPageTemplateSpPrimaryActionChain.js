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

  class SmartSearchPageTemplateSpPrimaryActionChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callComponentMethodVoteDialogOpenResult = await Actions.callComponentMethod(context, {
        selector: '#voteDialog',
        method: 'open',
      });
    }
  }

  return SmartSearchPageTemplateSpPrimaryActionChain;
});
