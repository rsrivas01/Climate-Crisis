/* globals Chart:false, feather:false */

(function () {
  'use strict'
  feather.replace()
})()

var mainChart = d3.select("#mainChart")
var mainLink= d3.select("#mainLink")


function updateMain(SRC, ALT) {
var mainChart = d3.select("#mainChart")
var mainLink= d3.select("#mainLink")
  mainLink.attr("href", SRC)
  mainChart.attr("src", SRC)
  mainChart.attr("alt", ALT)
  console.log("function complete")
}

new SlimSelect({
  select: '#slim-select',
  placeholder: 'Select Charts'
})