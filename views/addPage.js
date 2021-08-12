const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class = "form-group" >Name<input name="Name" type="text"></div>


    <div class = "form-group">Email <input name="Email" type="text"></div>

    <div class="form-group"> Page Title <input name="Title" type="text"></div>

    <div class = "form-group">Content<input name="Content" type="textarea"></div>

    <div class = "form-group">Status<input name="Status" type="text"></div>



    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
