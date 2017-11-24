function charts(){

  this.skillCharts = function(){

    var html5 = [[80,10], "skill1", 'Html 5', 'doughnut'];
    var jquery = [[60,40], "skill2", 'JQuery', 'doughnut'];
    var js = [[60,40], "skill3", 'JavaScript', 'doughnut'];
    var mySql = [[70,30], "skill4", 'MySql', 'doughnut'];
    var php = [[80,10], "skill5", 'PHP', 'doughnut'];
    var bootstrap = [[80,10], "skill6", 'Bootstrap', 'doughnut'];

    var illustrator = [[60,40], "skill7", 'Adobe Illustrator', 'pie'];
    var photoshop = [[50,40], "skill8", 'Photoshop', 'pie'];
    var office = [[70,30], "skill9", 'Microsoft Office', 'pie'];

    (new charts()).showCharts(html5);
    (new charts()).showCharts(jquery);
    (new charts()).showCharts(js);
    (new charts()).showCharts(mySql);
    (new charts()).showCharts(php);
    (new charts()).showCharts(bootstrap);
    (new charts()).showCharts(illustrator);
    (new charts()).showCharts(photoshop);
    (new charts()).showCharts(office);
  }

  this.showCharts = function(data){

    var ctx = document.getElementById(data[1]).getContext('2d');

    // For a pie chart
    var myPieChart = new Chart(ctx,{
        type: data[3],
        data: {
            datasets: [{
                data: data[0],
                backgroundColor: [
                  '#666666',
                  '#cccccc'
                ]
            }]
        },
        options: {
           responsive: true,
           tooltips: {
              enabled: false
           },
           title: {
               display: true,
               text: data[2],
               position: 'bottom'
           },
           animation: {
               animateScale: true,
               animateRotate: true
           }
       }
    });
  };
}
