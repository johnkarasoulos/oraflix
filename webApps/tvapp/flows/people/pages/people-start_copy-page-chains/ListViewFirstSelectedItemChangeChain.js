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

  class ListViewFirstSelectedItemChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.rowKey 
     * @param {any} params.rowData 
     */
    async run(context, { rowKey, rowData }) {
      const { $page, $flow, $application } = context;

      const callRestPersonGetPersonPersonidResult = await Actions.callRest(context, {
        endpoint: 'person/getPersonPersonid',
        uriParams: {
          personid: rowKey,
        },
      });

      $page.variables.actor = callRestPersonGetPersonPersonidResult.body;

      $page.variables.opendrawer = true;
    }
  }

  return ListViewFirstSelectedItemChangeChain;
});
