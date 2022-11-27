// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
   Plotly.newPlot();  

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
      {
        y: [0,50,100,150,200,250],
        x: [0,500,1000,1500,2000,2500,3000,3500],
        text: otu_labels.slice(0, 10).reverse(),
        mode: "markers",
        marker: {
        color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        size: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      
      }}
    ];
                 
   
  

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      margin: { t: 30, l: 150 }
    };


    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
    
  });
}
