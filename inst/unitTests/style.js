vizmap = [

   {selector:"node:selected", css: {
       "text-valign":"center",
       "text-halign":"center",
       "border-color": "black",
       "content": "data(id)",
       "border-width": "3px",
       "overlay-opacity": 0.2,
       "overlay-color": "gray"
       }},


   {selector:"edge", css: {
       "line-color": "rgb(50,50,50",
       'target-arrow-color': 'rgb(50,50,50)',
      'target-arrow-shape': 'triangle',
       "width": "1px",
       'curve-style': 'bezier',
       'haystack-radius': 0.5
       }},


    {"selector": "edge:selected", css: {
       "overlay-opacity": 0.2,
        "overlay-color": "gray",
        "width": "2px",
       }},

];
