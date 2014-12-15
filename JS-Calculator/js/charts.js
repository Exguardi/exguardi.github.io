function CreateBarCharts() {
    //createBarChartHoriz( OnCreateBarChartHoriz() );
    createBarChartVert( OnCreateBarChartVert() );
}

function DestroyBarCharts() {
    $("#chart-graph svg").remove();
    console.log('Bar charts removed!');
}

function OnCreateBarChartHoriz() {
    console.log('Horizontal bar chart created!');
}

function OnCreateBarChartVert() {
    console.log('Vertical bar chart created!');
}

function createBarChartHoriz(oncomplete) {
     var width = 420,
         barHeight = 20;

     var x = d3.scale.linear()
         .range([0, width]);

     var chart = d3.select(".chart")
         .attr("width", width);

     d3.tsv("data/horizData.tsv", type, function(error, data) {
       x.domain([0, d3.max(data, function(d) { return d.value; })]);

       chart.attr("height", barHeight * data.length);

       var bar = chart.selectAll("g")
           .data(data)
         .enter().append("g")
           .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

       bar.append("rect")
           .attr("width", function(d) { return x(d.value); })
           .attr("height", barHeight - 1);

       bar.append("text")
           .attr("x", function(d) { return x(d.value) - 3; })
           .attr("y", barHeight / 2)
           .attr("dy", ".35em")
           .text(function(d) { return d.value; });

       if (oncomplete && typeof ( oncomplete ) == "function" ) { oncomplete(); }
     });
}

function createBarChartVert(oncomplete) {
     var margin = {top: 20, right: 20, bottom: 30, left: 40},
         width = 960 - margin.left - margin.right,
         height = 500 - margin.top - margin.bottom;

     var x = d3.scale.ordinal()
         .rangeRoundBands([0, width], .1);

     var y = d3.scale.linear()
         .range([height, 0]);

     var xAxis = d3.svg.axis()
         .scale(x)
         .orient("bottom");

     var yAxis = d3.svg.axis()
         .scale(y)
         .orient("left")
         .ticks(10, "%");

     var svg = d3.select("#chart-graph").append("svg")//d3.select("body").append("svg")
         .attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)
       .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

     d3.tsv("data/vertData.tsv", type, function(error, data) {
       x.domain(data.map(function(d) { return d.letter; }));
       y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

       svg.append("g")
           .attr("class", "x axis")
           .attr("transform", "translate(0," + height + ")")
           .call(xAxis);

       svg.append("g")
           .attr("class", "y axis")
           .call(yAxis)
         .append("text")
           .attr("transform", "rotate(-90)")
           .attr("y", 6)
           .attr("dy", ".71em")
           .style("text-anchor", "end")
           .text("Frequency");

       svg.selectAll(".bar")
           .data(data)
         .enter().append("rect")
           .attr("class", "bar")
           .attr("x", function(d) { return x(d.letter); })
           .attr("width", x.rangeBand())
           .attr("y", function(d) { return y(d.frequency); })
           .attr("height", function(d) { return height - y(d.frequency); });

       if (oncomplete && typeof ( oncomplete ) == "function" ) { oncomplete(); }
     });
}

function type(d) {
  if(d.frequency) {
     d.frequency = +d.frequency;
  }
  if(d.value) {
     d.value = +d.value; // coerce to number
  }
  return d;
}