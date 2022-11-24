// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var trace = {x: ["0", "500",  "1000", "1500", "2000", "2500", "3000", "3500"],
                y: [0, 50, 100, 150, 200, 250],
                type: "button"};
    var bubbleData = [trace
                 
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {title:"Bacteria Culture Per Sample",
    xaxis: {title:"OTU_ID"},
    yaxis: {title:""}
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(); 
  });
}
