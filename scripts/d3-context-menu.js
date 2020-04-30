d3.contextMenu = function(menu, openCallback) {
  d3.selectAll(".d3-context-menu")
    .data([1])
    .enter()
    .append("div")
    .attr("class", "d3-context-menu");

  return function(data, index) {
    var elm = this;
    d3.selectAll(".d3-context-menu").html("");
    var list = d3.selectAll(".d3-context-menu").append("ul");
    list
      .selectAll("li")
      .data(menu)
      .enter()
      .append("li")
      .html(function(d) {
        return d.title;
      })
      .on("click", function(d, i) {
        d.action(elm, data, index);
        if (i == 0) { // TILE
          elm.setAttribute("fill", "#59AEEB");
        }
        else if (i == 1) { // EMPTY
          elm.setAttribute("fill", "#000000");
        }
        else if (i == 2) { // PLAYER SPAWN
          elm.setAttribute("fill", "#E4EEF5");
        }
        else if (i == 3) { // INVADER SPAWN
          elm.setAttribute("fill", "#A9F5C5");
        }
        else if (i == 4) { // BED
          elm.setAttribute("fill", "#D32CDB");
        }
        else if (i == 5) { // BED TILE
          elm.setAttribute("fill", "#CB79F7");
        }
        else if (i == 6) { // CLOSET
          elm.setAttribute("fill", "#ECA025");
        }
        else if (i == 7) { // SOFA
          elm.setAttribute("fill", "#F06086");
        }
        else if (i == 8) { // LAMP
          elm.setAttribute("fill", "#6D73C9");
        }
        else if (i == 9) { // BOOKCASE
          elm.setAttribute("fill", "#F0F051");
        }
        d3.select(".d3-context-menu").style("display", "none");
      });

    if (openCallback) openCallback(data, index);

    d3.select(".d3-context-menu")
      .style("left", d3.event.pageX - 2 + "px")
      .style("top", d3.event.pageY - 2 + "px")
      .style("display", "block");

    d3.event.preventDefault();
  };
};
