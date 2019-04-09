 /*para libreria*/   
$(document).ready(function(){

/*
.first-color { background: #00aeef;}
.second-color { background: #ee2a7b;}
.third-color { background: #21409a;}
.fourth-color { background: #1c75bc;}
.fifht-color { background: #92278f;}
*/

/*common vars*/          
    var yAxisLabels = ['','Bas','Med','Adv','Exp'];

/*vars*/

    var languageSeriesData = [{ name: 'languages',data: [3.5,2.4,3.2]}];
    var languagexAxisLabels = {categories: ['js', 'php', 'j2ee'], labels: { rotation: -45  }, lineWidth: 0, 
                               lineColor: 'transparent', minorTickLength: 0, tickLength: 0};

    var stackSeriesData = [{ name: 'stack',data: [3.2,2.9, 3.2]}];
    var stackxAxisLabels = {categories: ['Backbone', 'Handlebars', 'jQuery'], labels: { rotation: -45  }, lineWidth: 0, 
                               lineColor: 'transparent', minorTickLength: 0, tickLength: 0};

    var opSeriesData = [{ name: 'op',data: [3.3,2.9, 2.9]}];
    var opxAxisLabels = {categories: ['windows', 'linux', 'os x'], labels: { rotation: -45  }, lineWidth: 0, 
                               lineColor: 'transparent', minorTickLength: 0, tickLength: 0};

    var webdesignSeriesData = [{ name: 'webdesign',data: [3.5,3.5, 2.9]}];
    var webdesignxAxisLabels = {categories: ['html5', 'css3', 'html frameworks'], labels: { rotation: -45  }, lineWidth: 0, 
                               lineColor: 'transparent', minorTickLength: 0, tickLength: 0};

    var adobesuiteSeriesData = [{ name: 'adobesuite',data: [3.1,2.9, 2.1]}];
    var adobesuitexAxisLabels = {categories: ['photoshop', 'illustrator', 'inDesign'], labels: { rotation: -45  }, lineWidth: 0, 
                               lineColor: 'transparent', minorTickLength: 0, tickLength: 0};

     var web2_0SeriesData = [{ name: 'web2_0',data: [1.8,1.4, 2.5]}];
    var web2_0xAxisLabels = {categories: ['eCommerce', 'SEO', 'CMS'], labels: { rotation: -45  }, lineWidth: 0, 
                               lineColor: 'transparent', minorTickLength: 0, tickLength: 0};

    /*charts*/
    /*lang*/
    var languageschart = new Highcharts.Chart({ colors: ["#00aeef"],credits: {enabled: false },
        chart: { renderTo: 'languages',type: 'column', backgroundColor: "#ffffff"},
        series: languageSeriesData, xAxis: languagexAxisLabels, title: { text: null },
        yAxis: { gridLineWidth: 0, minorGridLineWidth: 0, lineWidth: 0, lineColor: 'transparent',
        labels: { formatter: function() { return yAxisLabels[this.value]; }}, title: { text: ''} },
        tooltip: { pointFormat: '{point.y:.1f} over 4 </b>', }, legend: { enabled: false },
        plotOptions: { series: { shadow: false, borderColor: '#00aeef', animation:{ duration: 10000} } }
    });
    var stackchart = new Highcharts.Chart({ colors: ["#1c75bc"],credits: {enabled: false },
        chart: { renderTo: 'stack',type: 'column', backgroundColor: "#ffffff"},
        series: stackSeriesData, xAxis: stackxAxisLabels, title: { text: null },
        yAxis: { gridLineWidth: 0, minorGridLineWidth: 0, lineWidth: 0, lineColor: 'transparent',
        labels: { formatter: function() { return yAxisLabels[this.value]; }}, title: { text: ''} },
        tooltip: { pointFormat: '{point.y:.1f} over 4 </b>', }, legend: { enabled: false },
        plotOptions: { series: { shadow: false, borderColor: '#1c75bc',animation:{ duration: 10000} } }
    });
    var opchart = new Highcharts.Chart({ colors: ["#21409a"],credits: {enabled: false },
        chart: { renderTo: 'op',type: 'column', backgroundColor: "#ffffff"},
        series: opSeriesData, xAxis: opxAxisLabels, title: { text: null },
        yAxis: { gridLineWidth: 0, minorGridLineWidth: 0, lineWidth: 0, lineColor: 'transparent',
        labels: { formatter: function() { return yAxisLabels[this.value]; }}, title: { text: ''} },
        tooltip: { pointFormat: '{point.y:.1f} over 4 </b>', }, legend: { enabled: false },
        plotOptions: { series: { shadow: false, borderColor: '#21409a',animation:{ duration: 10000} } }
    });
//***/
    var webdesignchart = new Highcharts.Chart({ colors: ["#ee2a7b"],credits: {enabled: false },
        chart: { renderTo: 'webdesign',type: 'column', backgroundColor: "#ffffff"},
        series: webdesignSeriesData, xAxis: webdesignxAxisLabels, title: { text: null },
        yAxis: { gridLineWidth: 0, minorGridLineWidth: 0, lineWidth: 0, lineColor: 'transparent',
        labels: { formatter: function() { return yAxisLabels[this.value]; }}, title: { text: ''} },
        tooltip: { pointFormat: '{point.y:.1f} over 4 </b>', }, legend: { enabled: false },
        plotOptions: { series: { shadow: false, borderColor: '#ee2a7b',animation:{ duration: 10000} } }
    });

    var adobesuitechart = new Highcharts.Chart({ colors: ["#92278f"],credits: {enabled: false },
        chart: { renderTo: 'adobesuite',type: 'column', backgroundColor: "#ffffff"},
        series: adobesuiteSeriesData, xAxis: adobesuitexAxisLabels, title: { text: null },
        yAxis: { gridLineWidth: 0, minorGridLineWidth: 0, lineWidth: 0, lineColor: 'transparent',
        labels: { formatter: function() { return yAxisLabels[this.value]; }}, title: { text: ''} },
        tooltip: { pointFormat: '{point.y:.1f} over 4 </b>', }, legend: { enabled: false },
        plotOptions: { series: { shadow: false, borderColor: '#92278f',animation:{ duration: 10000} } }
    });

    var web2_0chart = new Highcharts.Chart({ colors: ["#00aeef"],credits: {enabled: false },
        chart: { renderTo: 'web2_0',type: 'column', backgroundColor: "#ffffff"},
        series: web2_0SeriesData, xAxis: web2_0xAxisLabels, title: { text: null },
        yAxis: { gridLineWidth: 0, minorGridLineWidth: 0, lineWidth: 0, lineColor: 'transparent',
        labels: { formatter: function() { return yAxisLabels[this.value]; }}, title: { text: ''} },
        tooltip: { pointFormat: '{point.y:.1f} over 4 </b>', }, legend: { enabled: false },
        plotOptions: { series: { shadow: false, borderColor: '#00aeef',animation:{ duration: 10000} } }
    });


});