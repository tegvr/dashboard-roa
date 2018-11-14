// Define data set for all charts

myData1 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
        {
            label:"A1",
            borderColor:'rgb(255, 99, 132)',
            backgroundColor:'rgb(255, 99, 132)',
            fill: false,
            data: [
                  15,14,24,36,56,78,80
              ]
        },
        {
            label:"A2",
            borderColor:'rgb(54, 162, 235)',
            backgroundColor:'rgb(54, 162, 235)',
            fill: false,
              data: [
                  10,12,34,56,56,78,90
              ],
        },
        {
            label:"A3",
            borderColor:'rgb(30, 35, 39)',
            backgroundColor:'rgb(30, 35, 39)',
            fill: false,
              data: [50,12,34,96,56,58,40
              ],
        }
        ]
    };
myData2 = {
    labels:["Jan","Feb","Mar","Apr","May","Jun"],
        datasets:[{
            label:"Kehadiran",   
            borderColor: "rgba(220,220,220,0.8)",
            backgroundColor: 'rgb(54, 162, 235)',
            data:[280,180,60,250,165,60]
          }]
};
myData3 = {
    datasets:[{
        data: [4,5,6],
        backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    "rgba(0,0,0,.1)"
                ]
    }],
    labels:[
    "Kelas A1",
    "Kelas A2",
    "Kelas A3"
    ],
    options:{}
};
myData4={
    labels:["I","II","III","IV","V"],
    datasets:[{
            label:"Nilai kuis",   
            borderColor: "rgba(220,220,220,0.8)",
            backgroundColor: 'rgb(255, 99, 132)',
            data:[80,88,70,75,65]
          }]
};
myData5={
  labels:["Membosankan", "Menarik", "Gak Ngerti", "Kurang Bagus Menjelaskan", "Terlalu byk coding"],
  datasets:[
        {
            label:'Jan',
            backgroundColor:'rgba(255, 99, 132,.9)' ,
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            data: [30,40,50,30,20]
        },
        {
            label:'Feb',
            backgroundColor: 'rgba(54, 162, 235,.9)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            data: [10,50,60,25,20]
        },
        {
            label:'Mar',
            backgroundColor: "rgba(1, 194, 110,.9)",
            borderColor:" rgba(1, 194, 110,.2)",
            pointBackgroundColor: "rgba(1, 194, 110,.2)",
            data: [50,20,55,25,20]
        }
        ]
};
myData6={
    labels:["Jan","Feb","Mar","Apr","May","Jun"],
        datasets:[{
            label:"A1",  
            borderColor: "rgba(220,220,220,0.8)",
            backgroundColor: 'rgb(255, 99, 132)',
            data:[80,80,60,50,65,60]
          },
          {
            label:"A2",  
            borderColor: "rgba(220,220,220,0.8)",
            backgroundColor: 'rgb(54, 162, 235)',
            data:[70,60,60,70,65,80]
          },
          {
            label:"A3",  
            borderColor: "rgba(220,220,220,0.8)",
            backgroundColor: "rgba(1, 194, 110,1)",
            data:[90,80,60,40,50,40]
          }]
}
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: myData1
  
// });
// Chart.defaults.global.defaultFontFamily = "monospace";
var ctx1 = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('kehadiran-chart').getContext('2d');
var ctx3 = document.getElementById('pertemuan-chart').getContext('2d');
var ctx4 = document.getElementById('nilai-kuis').getContext('2d');
var ctx5 = document.getElementById('feedback').getContext('2d');
var ctx6 = document.getElementById('rata_kuis').getContext('2d');

window.onload=function(){
    window.ch1=Chart.Line(ctx1,{
        data:myData1
    });
    window.ch2=Chart.Bar(ctx2,{data:myData2});
    window.ch3=new Chart(ctx3,{
        type:'doughnut',
        data:myData3,
        options:{
            legend:{
                position:'top'
            },
            title:{
                display:true,
                text:'Jumlah Pertemuan'
            }
        }
    });
    window.ch4=new Chart(ctx4,{
        type:'horizontalBar',
        data:myData4,
        options:{
            legend:{
                position:'top'
            },
            title:{
                display:true,
                text:'Nilai Kuis Terakhir'
            }
        }
    });
    window.ch5=new Chart(ctx5,{
        data:myData5,
        type:'radar',
        options:{
            legend:{
                position:'top'
            },
            title:{
                display:true,
                text:'Feedback Bulanan'
            }
        }
    });
    window.ch6=new Chart(ctx6,{
        data:myData6,
        type:'bar',
        options:{
            legend:{
                position:'top'
            },
            title:{
                display:true,
                text:'Nilai Kelas Perbulan'
            }
        }
    })
}
