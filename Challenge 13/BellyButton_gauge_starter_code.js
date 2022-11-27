// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
       var array = {};
    // Create a variable that filters the samples for the object with the desired sample number.
        var filters = {};
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
        var metadata ={};
    // Create a variable that holds the first sample in the array.
        var sample = {};

    // 2. Create a variable that holds the first sample in the metadata array.
        var first = {};

    // Create variables that hold the otu_ids, otu_labels, and sample_values.

        var otu_ids = {};
    // 3. Create a variable that holds the washing frequency.
        var washing = {};
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugedata = [
        {
          domain: {x:[0,1], y:[0,1]},
          value: 2,
          title: {text:"Belly Button Washing Frequency Scrubs per Week"}, 
          type:"indicator",
          mode:"gauge+number"     
        }
      ];
    
    // 5. Create the layout for the gauge chart.
    var gaugelayout = {width:600, heigh:500, margin:{t:0,b:0}
        
      };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("indicatpr", gaugedata, gaugelayout);
  });
}
