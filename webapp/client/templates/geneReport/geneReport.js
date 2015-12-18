/**
 *
 * @param {Object} geneReport   network data in the "network" property
 * @param {Object} expressionData
 */
function chrisCodeHere(geneReport, expressionData, viperSignaturesData) {
    console.log("geneReport: ", geneReport);
    console.log("expressionData: ", expressionData);
    console.log("viperSignaturesData",viperSignaturesData);

    if (geneReport.network.elements.length > 0) {
        // write your code here!
        var containerDiv = document.getElementById("render-circle-map-here");
        circleMapGraph.build({
            "medbookGraphData" : geneReport,
            "medbookExprData" : expressionData,
            "medbookViperSignaturesData" : viperSignaturesData,
            "containerDiv" : containerDiv,
            "circleDataLoaded" : true
        });
    }
}

Template.renderCircleMap.rendered = function() {
    Deps.autorun(function(first) {
        if (Session.get("geneReportLoaded") === true) {
            var geneReport = GeneReports.find().fetch()[0];
            var expressionData = Expression2.find().fetch();
            var viperSignaturesData = CohortSignatures.find().fetch();

            // add in sample_values
            _.each(viperSignaturesData, function (value) {
              if (!value.sample_values) {
                value.sample_values = value.samples;
              }
            });

            chrisCodeHere(geneReport, expressionData, viperSignaturesData);
            first.stop();
        }
    });
};

Template.geneReport.helpers({
    networkHasElements : function(array) {
        return array.length > 0;
    }
});
