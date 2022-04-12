const applyTemplate = (targetID, templateID, data) => {
    let target = document.getElementById(targetID);
    console.log(target);
    console.log("this is the templateID: ", templateID);
    console.log("this is the element: ", document.getElementById(templateID));
    let template = Handlebars.compile(
      document.getElementById(templateID).textContent
    );
    target.innerHTML = template(data);
  };