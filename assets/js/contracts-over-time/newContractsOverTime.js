---
---

var controller = new ScrollMagic.Controller();

$(function() {

  const { loadPanelData, mem } = dataModule;

  // metadata on each panel
  const panels = [
    {
      id: "panel-1",
      module: barchartModule,
      dataset: "panel1",
      xAxis: "year",
      element: "#svg-1"
    },
    {
      id: "panel-2",
      module: multiLinechartModule,
      dataset: "panel2",
      xAxis: "week",
      element: "#svg-2"
    },
    {
      id: "panel-3",
      module: multiLinechartModule,
      dataset: "panel3",
      xAxis: "year",
      element: "#svg-3"
    },
    {
      id: "panel-4",
      module: multiLinechartModule,
      dataset: "panel4",
      xAxis: "year",
      element: "#svg-4"
    },
    {
      id: "panel-5",
      module: multiLinechartModule,
      dataset: "panel5",
      xAxis: "year",
      element: "#svg-5"
    },
    {
      id: "panel-6",
      module: multiLinechartModule,
      dataset: "panel6",
      xAxis: "year",
      element: "#svg-6"
    }
  ];

  function setDimsOfSvg(id) {
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const windowMargin = 50;

    const svgHeight = windowHeight - 2 * windowMargin;
    const svgWidth = windowWidth * .7 - 2 * windowMargin;

    $(id)
      .attr("height", svgHeight)
      .attr("width", svgWidth);
  }


  for (let pan of panels) {
      setDimsOfSvg(pan.element);
      loadPanelData(pan.dataset, pan.module['draw'], pan.element);
      break;
  }

  // load remaining datasets
  panels.forEach(p => loadPanelData(p.dataset));

  

  /*
  new ScrollMagic.Scene({ triggerElement: "#svg-1", triggerHook: "onEnter" })
      .duration("50%")
      .setTween("#svg-1", {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
      })
      .addIndicators()
      .addTo(controller);
      */

      new ScrollMagic.Scene({ triggerElement: "#breakpoint-1", duration: 800 })
        .setPin("#svg-1")
        .addTo(controller);
      

        /*
  new ScrollMagic.Scene({ triggerElement: "#svg-2", triggerHook: "onEnter" })
      .duration("50%")
      .addIndicators()
      .addTo(controller);
      

  new ScrollMagic.Scene({ triggerElement: "#svg-3", triggerHook: "onEnter" })
      .duration("50%")
      .addIndicators()
      .addTo(controller);
      

*/

      /*
  new ScrollMagic.Scene({ offset: 400, duration: 100 }).setPin("#svg-2").addTo(controller);
  new ScrollMagic.Scene({ offset: 800, duration: 100 }).setPin("#svg-3").addTo(controller);
  new ScrollMagic.Scene({ offset: 1200, duration: 100 }).setPin("#svg-4").addTo(controller);
  new ScrollMagic.Scene({ offset: 1600, duration: 100 }).setPin("#svg-5").addTo(controller);
  new ScrollMagic.Scene({ offset: 2000, duration: 100 }).setPin("#svg-6").addTo(controller);
  */
});
